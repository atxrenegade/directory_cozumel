/*
import Business from './src/business.js';
import Image from '.src/image.js';
import Map from './src/map.js';
import Review from '.src/review.js';
*/

/*
temp location for JS classes while debugging module/Rack Cors issue
*/

class Business {
	constructor(id, name, categories, overallRating, address, phoneNumber, website) {
		this.id = id;
		this.name = name;
		this.categories = categories;
		this.overallRating = overallRating;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.website = website;
	}
}

class Map {
	constructor(busID, lat, lng) {
		this.busID = busID;
		this.lat = lat;
		this.lng = lng;
	}
}

class Image {
	constructor(busID, contributor, date, description, id, url) {
		this.busID = busID;
		this.contributor = contributor;
		this.date = date;
		this.description = description;
		this.id = id;
		this.url = url;
	}
}

class Review {
	constructor(busID, rating, content, contributor, date, id){
		this.busID = busID;
		this.rating = rating;
		this.content = content;
		this.contributor = contributor;
		this.date = new Date();
		this.id = id;
	}
}

/*
 ***************************************************************************
*/

window.onload = function() {
	MAPS = [];
	REVIEWS = [];
	IMAGES = [];

	/* searchbar elements */
	let searchByName = document.getElementById('js-search-by-name');
	let searchByCategory = document.getElementById('js-search-by-category');
	let nameRadioSelect = document.getElementById('js-radio-by-name');
	let categoryRadioSelect = document.getElementById('js-radio-by-category');
	let searchCategoryMenu = document.getElementById('js-search-category-menu');
	let searchNameField = document.getElementById('js-search-name-text-field');
	let categoriesNames = [];

	/* checkbox elements */
	let reviewCheckBox = document.getElementById('js-add-review-checkbox');
	let imageCheckBox = document.getElementById('js-add-image-checkbox');
	let flagCheckBox = document.getElementById('js-flag-business-checkbox');
	let editCheckBox = document.getElementById('js-edit-business-checkbox');

	/* business listing elements */
	let businessListings = document.getElementById('js-business-show');
	let detailedListingMenu = document.getElementById('js-detailed-listing-menu');

	/* add business form elements */
	let newBusinessButton = document.getElementById('js-add-button');
	let newBusForm = document.getElementById('js-new-bus-form');

	/* admin hidden button element */
	let hiddenAdminButton = document.getElementById('js-admin-hidden-button');

	/* admin login panel elements */
	let adminPanel = document.getElementById('js-admin-panel-container');
	let adminMenu = document.getElementById('js-admin-menu-container');
	let adminPanelLogin = document.getElementById('js-admin-login-button');
	let adminUsernameField = document.getElementById('js-admin-username')
	let adminPasswordField = document.getElementById('js-admin-password')

	let adminPanelLogout = document.getElementById('js-admin-logout-button')
	let adminPanelForm = document.getElementById('js-admin-login')
	let adminUserInfo = document.getElementById('js-admin-user-info')

	/* container elements */
	let sponsListContainer = document.getElementById('sponsored-listing-container')
	let adsContainer = document.getElementById('ads-container')
	let searchBarContainer = document.getElementById('js-searchbar-container')
	let listingsContainer = document.getElementById('listings-container')
	let newBusContainer = document.getElementById('js-new-business-container')

	/* Search Bar Toggle Functions */
	function toggleCategoryMenu() {
		listingsContainer.style.display = 'none';
		searchByName.style.display = 'none';
		searchByCategory.style.display = 'block';
		/* prevent redundant calls to api */
		if (categoriesNames.length === 0) {
				collectCategories();
		};
	}

	function toggleNameMenu() {
		searchNameField.value = '';
		listingsContainer.style.display = 'none';
		searchByName.style.display = 'block';
		searchByCategory.style.display = 'none';
	}

	/* search by name functions */
	function retrieveSearchNameResults(){
		detailedListingMenu.style.display = 'none';
		listingsContainer.style.display = 'block';
		postSearchByName(searchNameField.value);
		searchNameField.value = '';
	}

	/* search by category functions */
	function renderCategories(data) {
		let categoryObjects = Array.from(data);
		categoriesNames = categoryObjects.map((el) => {
			return el["name"]
		})
		renderCategoriesMenu(categoriesNames);
	}

	function renderCategoriesMenu(categoriesNames) {
		if (searchCategoryMenu.children.length === 0 ){
			let catMenu = document.createElement('div');
			let html = '<select id= "js-category-select">';
			let cats = categoriesNames.map((el) => {
				return `<option value='${el}'> ${el} </option>`;
			})
			html += cats + '</select>';
			catMenu.innerHTML = html;
			searchCategoryMenu.appendChild(catMenu)
		}
	}

	function retrieveSearchCategoryResults() {
		detailedListingMenu.style.display = 'none';
		listingsContainer.style.display = 'block';
		let category = document.getElementById('js-category-select').value
		postSearchByCategory(category)
	}

	/* Listings Checkbox Toggle Forms Functions */
	function toggleReviewForm() {
		$('#js-add-review-form-container').toggle();
	}

	function toggleImageForm() {
		$('#js-add-image-form-container').toggle();
	}

	function toggleEditForm() {
		$('#js-suggest-edit-form-container').toggle();
	}

	function toggleFlagForm() {
		$('#js-flag-business-form-container').toggle();
	}

	function toggleNewBusinessForm() {
		$('#js-add-business-form-container').toggle();
	}

	/* API REQUESTS */
	/* Search Bar API request functions */
	function collectCategories() {
		try {
			url = 'http://localhost:3000/categories'
			fetch(url)
			.then(resp => resp.json())
			.then(json => renderCategories(json))
		}
		catch(err) {
			console.log(error.message);
		}
	}

	function postSearchByName(name) {
		let data = {'name': name}
		let configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		fetch('http://localhost:3000/index_by_name', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(json => returnDetailResults(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	function postSearchByCategory(category){
		let data = {'name': category}
		let configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		fetch('http://localhost:3000/index_by_category', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(json => returnIndexResults(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	/* Business Listing Search Results Object Creation and DOM appending functions */
	function returnIndexResults(data) {
		let results = buildResults('index', data);
		appendResults('index', results);
	}

	function returnDetailResults(data) {
		businessListings.innerHTML = '';
		if (data.length == 0) {
			appendNotFound();
		} else {
		let results = buildResults('detailed', data);
		appendResults('detailed', results);
		}
	}

	function appendNotFound(){
		businessListings.innerHTML = '';
		let errorMessage = document.createElement('h4');
		errorMessage.innerHTML = 'Nothing with that name found!'
		businessListings.appendChild(errorMessage);

	}

	function buildResults(type, data) {
		RESULTS = []
		if (type == 'detailed'){
			data.forEach((el) => {
				let busObj = busObjBuilder(el);
				RESULTS.push(busObj);
			})
		} else {
			data.forEach((el) => {
				let busObj = busListingBuilder(el);
				RESULTS.push(busObj);
			})
		}
		return RESULTS;

	}

	function appendResults(type, resultsList){
		businessListings.innerHTML = '';
		if (type === 'index'){
			resultsList.forEach((busObj) => renderBus(busObj));
		} else {
			resultsList.forEach((busObj) => {
				console.log(busObj)
				renderBusListingDetailed(busObj);
			})
		}
	}

	function busObjBuilder(elData){
		let duplicate = findDuplicate(elData["name"])
		if (duplicate == false) {
			let busID = elData["id"]
			let listingData = [busID, elData["name"], elData["categories"], elData["listing"]];
			let busObj = busListingBuilder(listingData);
			return busObj;
		}
	}

	function buildDetails(elData){
		let mapData = elData["map"];
		let imagesData = elData["images"];
		let reviewsData = elData["reviews"];
		let mapObj = mapBuilder(mapData);
		let imgsCollection = imagesBuilder(imagesData);
		let reviewsCollection = reviewsBuilder(reviewsData);
	}

	function findDuplicate(elDataName) {
		let response;
		if (RESULTS == undefined || RESULTS[0] == undefined || RESULTS.length == 0) {response = false};
		let search = RESULTS.find((el) => {
			return (el['name'] == elDataName)
		});
		if (search === undefined) {response = false}
		return response;
	}

	function busListingBuilder(listingData){
		let busID = listingData['id'];
		let busName = listingData["name"];
		let busCategories = listingData['categories'];
		let busOverallRating = listingData['listing']['overall_rating'];
		let busAddress = listingData['listing']["address"];
		let busPhone = listingData['listing']["phone_number"];
		let busWebsite = listingData['listing']["website"];
		let newBus = new Business(busID, busName, busCategories, busOverallRating, busAddress, busPhone, busWebsite);
		return newBus;
	}

	function mapBuilder(mapData) {
		let busID = mapData['business_id'];
		let lat = mapData['lat'];
		let lng = mapData['lng'];
		let newMap = new Map(busID, lat, lng);
		MAPS.push(newMap);
		return newMap;
	}

	function imagesBuilder(imagesData){
		console.log(imagesData)
		let imageCollection = imagesData.map((el) => {
			let busID = el["business_id"];
			let contributor = el["contributor"];
			let date = el["date"];
			let description = el["description"];
			let id = el["id"];
			let url = el["url"];
			let newImage = new Image(busID, contributor, date, description, id, url)
			IMAGES.push(newImage);
			newImage
		})
		return imageCollection;
	}

	function reviewsBuilder(reviewsData){
		let reviewsCollection = reviewsData.map((el) => {
			let busID = el["business_id"];
			let content = el['content'];
			let contributor = el["contributor"];
			let date = new Date();
			let id = el["id"];
			let rating = el["rating"];
			let newReview = new Review(busID, rating, content, contributor, date, id)
			REVIEWS.push(newReview);
			return newReview;
		})
		return reviewsCollection;
	}

	function renderBus(busObj){
		let newDiv = document.createElement('div');
		let button =
		newDiv.innerHTML = `<input type='button' class='js-bus-select' value='${busObj.name}'>`;
		businessListings.appendChild(newDiv);
		let buttonCollection = document.querySelectorAll('input.js-bus-select')
		buttonCollection.forEach((busButton) => {
			busButton.addEventListener('click', bus => {
				let name = bus.target.value
				let busObj = RESULTS.find((obj) => obj.name == name)
				renderBusListingDetailed(busObj);
			})
		})
	}

	function renderBusListingDetailed(busObj){
		businessListings.innerHTML = '';
		detailedListingMenu.style.display = 'block';
		let newDiv = document.createElement('div');
		let categories = busObj.categories.join(', ');
		newDiv.innerHTML = `<p>${busObj.name}<br>${busObj.overallRating}<br>${categories}<br>${busObj.address}<br>${busObj.phoneNumber}<br><a href='${busObj.website}'>${busObj.website}</a><br></p>`;
		businessListings.appendChild(newDiv);
		appendDetails(busObj);
	}

	function collectMapImgRev(busObj) {
		console.log(busObj) /* undefined */
		let busID = busObj.id
		let detailsCollection = [];

		let mapMatch = MAPS.find(obj => {return (obj.busID == busID)});
		let imagesMatch = IMAGES.filter(obj => {return  obj.busID == busID});
		let reviewsMatch = REVIEWS.filter(obj => {return obj.busID == busID});
		detailsCollection.push(mapMatch, imagesMatch, reviewsMatch);

		return detailsCollection;
	}

	function renderMap(mapObj){
		/* console.log('map rendered') */
		let newDiv = document.createElement('div');
		newDiv.innerHTML = '<br> This is a map <br>'
		businessListings.appendChild(newDiv);
	}

	function renderImage(imgObj){
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `<img src="${imgObj.url}"></img><br><p>${imgObj.contributor}<br>${imgObj.date}<br>${imgObj.description}<br><br></<p>`;
		businessListings.appendChild(newDiv);
	}

	function renderReview(reviewObj){
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `<p>${reviewObj.content}<br>Rating: ${reviewObj.rating}<br>${reviewObj.contributor}<br>${reviewObj.date}</p><br>`;
		businessListings.appendChild(newDiv);
	}

	function appendDetails(busObj){
		let detailsCollect = collectMapImgRev(busObj)
		console.log(detailsCollect)
		renderMap(detailsCollect[0]);
		detailsCollect[1].forEach((el) => {renderImage(el)});
		detailsCollect[2].forEach((el) => {renderReview(el)});
	}

	/* JS Search Instances */


	/* Admin Panel functions */
	function toggleAdminLogIn() {
		$('#js-admin-login-container').toggle();
	}

	function showAdminView(username, password) {
		logInAdmin(username, password);
		if (loggedIn() === true) {
			sponsListContainer.style.display = "none";
			adsContainer.style.display = "none";
			searchBarContainer.style.display = "none";
			listingsContainer.style.display = "none";
			newBusContainer.style.display = "none";
			adminPanel.style.display = "block";
			adminMenu.style.display = "block";
			hiddenAdminButton.style.display = "none";
			adminPanelLogin.style.display = "none";
			adminPanelLogout.style.display = "block";
			adminPanelForm.style.display = "none";
			adminUserInfo.style.display = "block";

		} else {
			alert('You are not authorized to access admininstrative tasks!')
		}
	}

	function logInAdmin(username, password) {
		/* login admin user upon secure authentication and authorization)*/
		loggedIn();
	}

	function loggedIn() {
		return true;
	}

	/* EVENT LISTENERS */

	/* Search Bar Listeners */
	nameRadioSelect.addEventListener("click", toggleNameMenu);
	categoryRadioSelect.addEventListener("click", toggleCategoryMenu);

	document.getElementById('js-by-category-button').addEventListener('click', retrieveSearchCategoryResults);

	document.getElementById('js-by-name-button').addEventListener('click', retrieveSearchNameResults)

	/* Business Listings Checkbox Listeners */
	reviewCheckBox.addEventListener("change", toggleReviewForm);
	imageCheckBox.addEventListener("change", toggleImageForm);
	flagCheckBox.addEventListener("change", toggleFlagForm);
	editCheckBox.addEventListener("change", toggleEditForm);

	/* New Business Form Listener */
	newBusinessButton.addEventListener("click", toggleNewBusinessForm);

	/* Admin Panel Listeners */
	hiddenAdminButton.addEventListener("click", toggleAdminLogIn);
	adminPanelLogin.addEventListener("click", showAdminView);

	/* Clear Form to set initial state */
	function resetPage() {
	  reviewCheckBox.checked = false;
		imageCheckBox.checked = false;
		flagCheckBox.checked = false;
		editCheckBox.checked = false;
		nameRadioSelect.checked = true;
		categoryRadioSelect.checked = false;
		searchNameField.value = '';
		searchCategoryMenu.value = '';
		adminUsernameField.value = '';
		adminPasswordField.value = '';
		listingsContainer.style.display = 'none';
		detailedListingMenu.style.display = 'none';
		RESULTS = [];
		newBusForm.reset();
	}
	resetPage();
}
