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
	constructor(name, categories, overallRating, address, phoneNumber, website) {
		this.name = name;
		this.categories = categories;
		this.overallRating = overallRating;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.website = website;
	}
}

class Map {
	constructor(lat, lng) {
		this.lat = lat;
		this.lng = lng;
	}
}

class Image {
	constructor(contributor, contributor_email, date, description, email, id, url){
		this.contributor = contributor;
		this.contributor_email = contributor_email;
		this.date = date;
		this.description = description;
		this.email = email;
		this.id = id;
		this.url = url;
	}
}

class Review {
	constructor(rating, content, contributor, contributorEmail, date, id){
		this.rating = rating;
		this.content = content;
		this.contributor = contributor;
		this.contributor_email = contributorEmail;
		this.date = new Date();
		this.id = id;
	}
}

/*
 ***************************************************************************
*/

window.onload = function() {

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
	sponsListContainer = document.getElementById('sponsored-listing-container')
	adsContainer = document.getElementById('ads-container')
	searchBarContainer = document.getElementById('js-searchbar-container')
	listingsContainer = document.getElementById('listings-container')
	newBusContainer = document.getElementById('js-new-business-container')

	/* Search Bar Toggle Functions */
	function toggleCategoryMenu() {
		searchByName.style.display = 'none';
		searchByCategory.style.display = 'block';
		/* prevent redundant calls to api */
		if (categoriesNames.length === 0) {
				collectCategories();
		};
	}

	function toggleNameMenu() {
		searchByName.style.display = 'block';
		searchByCategory.style.display = 'none';
	}

	/* search by name functions */
	function retrieveSearchNameResults(){
		let name = searchNameField.value
		postSearchByName(name)
	}

	/* search by category functions */
	function renderCategories(data) {
		let categoryObjects = Array.from(data);
		categoriesNames = categoryObjects.map((el) => {
			return el["name"]
		})
		renderCategoriesMenu(categoriesNames)
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
		console.log(data)
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
			.then(json => objMassAssign(json)
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
			.then(json => objMassAssign(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	/* Business Listing Search Results Object Creation and DOM appending functions */

	function objMassAssign(data){
		data.forEach((el) => busObjBuilder(el))
	}

	function busObjBuilder(elData){
		let listingData = [elData["name"], elData["categories"], elData["listing"]];
		let mapData = elData["map"];
		let imagesData = elData["images"];
		let reviewsData = elData["reviews"];
		let a = busListingBuilder(listingData);
		let b = mapBuilder(mapData);
		let c = imagesBuilder(imagesData);
		let d = reviewsBuilder(reviewsData);
		appendResults(a, b, c, d);
	}

	function busListingBuilder(listingData){
		let busName = listingData[0];
		let busCategories = listingData[1];
		let busOverallRating = listingData[2]['overall_rating'];
		let busAddress = listingData[2]["address"];
		let busPhone = listingData[2]["phone_number"];
		let busWebsite = listingData[2]["website"];
		let newBus = new Business(busName, busCategories, busOverallRating, busAddress, busPhone, busWebsite);
		return newBus;
	}

	function mapBuilder(mapData) {
		let lat = mapData['lat'];
		let lng = mapData['lng'];
		let newMap = new Map(lat, lng);
		return newMap;
	}

	function imagesBuilder(imagesData){
		let imageCollection = imagesData.map((el) => {
			let contributor = el["contributor"];
			let contributorEmail = el["contributorEmail"];
			let date = el["date"];
			let description = el["description"];
			let id = el["id"];
			let url = el["url"];
			let newImage = new Image(contributor, contributorEmail, date, description, id, url)
			return newImage;
		})
		return imageCollection;
	}

	function reviewsBuilder(reviewsData){
		let reviewsCollection = reviewsData.map((el) => {
			let content = el['content'];
			let contributor = el["contributor"];
			let contributorEmail = el["contributorEmail"];
			let date = new Date();
			let id = el["id"];
			let rating = el["rating"];
			let newReview = new Review(content, contributor, contributorEmail, date, id, rating)
			return newReview;
		})
		return reviewsCollection;
	}

	function renderBusListing(busObj){
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `${busObj.name}<input type='button' value='View Details'> </input>`;
		businessListings.appendChild(newDiv);
	}

	function renderBusListingDetailed(busObj){
		let newDiv = document.createElement('div');
		let categories = busObj.categories.join(', ');
		newDiv.innerHTML = `<p>${busObj.name}</p><p>${busObj.overallRating}</p><p>${categories}</p><p>${busObj.address}</p><p>${busObj.phoneNumber}</p><p><a href='${busObj.website}'>${busObj.website}</a></p><br>`;
		businessListings.appendChild(newDiv);
	}

	function renderMap(mapObj){
	}

	function renderImage(imageObj){
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `<img src='${imageObj.url}'><br><p>${imageObj.contributor}</p><p>${imageObj.date}</p><p>${imageObj.description}</<p><br>`;
		businessListings.appendChild(newDiv);
	}

	function renderReview(reviewObj){
	}

	function appendResults(a, b, c, d){
		/* renderBusListing(a); */
		renderBusListingDetailed(a);
		c.forEach(renderImage);
	}

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
		newBusForm.reset();
		businessListings.innerHTML = '';
	}
	resetPage();
}
