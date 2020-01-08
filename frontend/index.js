window.onload = function() {
	mykey = config.MY_KEY;
	ALL = [];
	CATS = [];
	ENTRIES = [];
	LAT = 20.42;
	LNG = -86.92;


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
	let newBusCatSelect = document.getElementById('js-new-bus-select');

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
	let mapContainer = document.getElementById('js-map')
	let businessDetails = document.getElementById('js-business-listing-details')

	/* Form Submit Elements */
	let newBusForm = document.getElementById('js-new-bus-form');
	let newReviewForm = document.getElementById('js-new-review-form');

	/* SEARCH FUNCTIONS
	/* Search Bar Toggle Functions */
	function toggleCategoryMenu() {
		listingsContainer.style.display = 'none';
		searchByName.style.display = 'none';
		searchByCategory.style.display = 'block';
		/* prevent redundant calls to api */
		if (CATS.length === 0) {
				collectCategories();
		};
		renderCategoriesMenu();
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

	function retrieveSearchCategoryResults() {
		detailedListingMenu.style.display = 'none';
		listingsContainer.style.display = 'block';
		let category = document.getElementById('js-category-select').value
		let results = postSearchByCategory(category);
	}

	/* TOGGLE FORM FUNCTIONS */
	function toggleForm(event, el) {
		if (event === 'submit' || el.style.display == "block") {
			el.style.display = "none"
		} else {
			el.style.display = "block"
		}
	}

	function toggleNewBusinessForm() {
		let el = document.getElementById('js-add-business-form-container')
		toggleForm('click', el)
		if (CATS.length === 0) {
					collectCategories();
			};
			renderNewBusCatSelect();
	}


	/* API REQUEST FUNCTIONS */
	/* Search Bar API request functions */
	function collectCategories() {
		try {
			url = 'http://localhost:3000/categories'
			fetch(url)
			.then(resp => resp.json())
			.then(json => storeCategories(json))
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
			.then(json => returnResults(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	function postSearchByCategory(category){
		let data = {'category_name': category}
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
			.then(json => returnResults(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	function postBusObjToRetrieve(name){
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
		fetch('http://localhost:3000/business', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(json => returnDetailedResults(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	function postForm(data) {
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
		fetch('http://localhost:3000/entries/new', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(json => console.log(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	/* RESULTS FUNCTIONS */
	/* Search Results functions */
	function storeCategories(data){
		let categoryObjects = Array.from(data);
		CATS = categoryObjects.map((el) => {
			return el["name"]
		})
	}

	function returnResults(data){
		data = Array.from(data)
		if (data[0] == undefined) {
			appendErrorMsg("NOT FOUND");
		} else {
			renderIndex(data)
		}
	}

	function returnDetailedResults(data){
		let busObj = buildBusObj(data);
		if (busObj != undefined) {
			renderDetailedBusListing(busObj[0]);
			renderMap(busObj[1]);
			let imgs = busObj[2].flat();
			let reviews = busObj[3].flat();
			imgs.forEach(el => renderImage(el))
			reviews.forEach(el => renderReview(el))
		}
	}

	function appendErrorMsg(msg){
		businessListings.innerHTML = '';
		let errorMessage = document.createElement('h4');
		errorMessage.innerHTML = `${msg}`
		businessListings.appendChild(errorMessage);
	}

	/* Instance builder functions */
	function checkDuplicate(busName) {
		let allNames = ALL.map(el => el.name)
		let duplicate = allNames.includes(busName)
		return duplicate;
	}

	function mapBuilder(mapData) {
		let lat = mapData['lat'];
		let lng = mapData['lng'];
		let newMap = new GoogleMap(lat, lng);
		return newMap;
	}

	function imagesBuilder(imagesData){
		let imageCollection = []
		imagesData.map((el) => {
			let contributor = el["contributor"];
			let date = el["date"];
			let description = el["description"];
			let url = el["url"];
			let newImage = new Image(contributor, date, description, url);
			imageCollection.push(newImage);
		})
		return imageCollection;
	}

	function reviewsBuilder(reviewsData){
		let reviewsCollection = []
		reviewsData.map(el => {
			let content = el['content'];
			let contributor = el["contributor"];
			let date = new Date();
			let rating = el["rating"];
			let newReview = new Review(rating, content, contributor, date)
			reviewsCollection.push(newReview);
		})
		return reviewsCollection;
	}

	/* Render functions */
	function renderCategoriesMenu() {
		if (searchCategoryMenu.children.length === 0 ){
			let catMenu = document.createElement('div');
			let html = '<select id= "js-category-select">';
			let cats = CATS.map((el) => {
				return `<option value='${el}'> ${el} </option>`;
			})
			html += cats + '</select>';
			catMenu.innerHTML = html;
			searchCategoryMenu.appendChild(catMenu);
		}
	}
/*
	function renderDetailedBusListing(busObj){
		businessListings.innerHTML = '';
		detailedListingMenu.style.display = 'block';
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `<h3 id='listing-bus-name'>   ${busObj.name}</h3><p>Rating: ${busObj.overallRating}<br>Categories: ${busObj.categories}<br>${busObj.address}<br>${busObj.phoneNumber}<br><a href='${busObj.website}'>${busObj.website}</a><br></p>`;
		businessListings.appendChild(newDiv);
	}
*/

	function renderIndex(resultsList){
		businessListings.innerHTML = '';
		resultsList.forEach(function(busObj) {
			renderButton(busObj, postBusObjToRetrieve, businessListings);
		});
	}

	function renderButton(obj, functionToExec, elToAppendTo){
		let buttonHTML =`<input id='button_${obj.id}' type='button' class='js-bus-select' value='${obj.name}'>`;
		renderComponent(buttonHTML, elToAppendTo);
		let el = `button_${obj.id}`
		let button = document.getElementById(el)
		button.addEventListener('click', buttonFunction);
		function buttonFunction(evt){
			functionToExec(evt.target.value)
		}
	}

	function renderComponent(generatedHtml, el){
		let newDiv = document.createElement('div');
		newDiv.innerHTML = generatedHtml;
		el.appendChild(newDiv);
	}


/*
	function renderBus(busObj){
		let newDiv = document.createElement('div');
		let button =
		newDiv.innerHTML = `<input type='button' class='js-bus-select' value='${busObj.name}'>`;
		businessListings.appendChild(newDiv);
		let buttonCollection = document.querySelectorAll('input.js-bus-select')
		buttonCollection.forEach((busButton) => {
			busButton.addEventListener('click', bus => {
				let name = bus.target.value
				postRetrieveObject(name);
			})
		})
	}

	let map = mapBuilder(data["map"]);
	let imagesCollection = imagesBuilder(data["images"]);
	let reviewsCollection = reviewsBuilder(data["reviews"]);
	busObjArray.push(business, map, imagesCollection, reviewsCollection)
 return busObjArray;
*/


	function renderMap(mapObj){
		mapContainer.style.display = 'block';
		mapObj.initMap(mapObj.lat, mapObj.lng);
	}

	function renderImage(imgObj){
		businessDetails.style.display = "block";
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `<img src="${imgObj.url}"></img><br><p>${imgObj.contributor}<br>${imgObj.date}<br>${imgObj.description}<br><br></<p>`;
		businessDetails.appendChild(newDiv);
	}

	function renderReview(reviewObj){
		businessDetails.style.display = "block";
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `<p>${reviewObj.content}<br>Rating: ${reviewObj.rating}<br>${reviewObj.contributor}<br>${reviewObj.date}</p>`;
		businessDetails.appendChild(newDiv);
	}

	/* FORM FUNCTIONs */
	/* Render Categories Select For Bus Form */
	function renderNewBusCatSelect(){
		if (CATS.length == 0){
			collectCategories();
		}
		let catMenu = document.createElement('div');
		let html = '<select id= "cat-select" multiple>';
		let cats = CATS.map((el) => {
			return `<option value='${el}'> ${el} </option>`;
		})
		html += cats + '</select>';
		catMenu.innerHTML = html;
		newBusCatSelect.appendChild(catMenu)
	};

	/* Retrieve Bus Name From DOM for Associated Form */
	/* works for new bus form and all other forms */
	function getBusNameForAssoForm(event){
		let busName = ''
		if (event.target[0].id === 'new-bus'){
			busName = document.getElementById('bus-name').value;
		} else {
			busName = document.getElementById('listing-bus-name').innerText;
		}
		return busName;
	}

	function submitForm(event) {
		event.preventDefault();
		let busName = getBusNameForAssoForm(event);
		createPostData(event, busName);
		formSubmitted(event);
	}

	function formSubmitted(event) {
		 event.target.reset();
		 let submittedEl = document.createElement('p');
		 submittedEl.className = "succMsg"
		 submittedEl.innerHTML = "Successfully submitted!";
		 event.target.style.display = "none";
		 detailedListingMenu.appendChild(submittedEl)
	}

	/* Form Post functions */
	function createPostData(event, busName) {
		let data = Array.from(event.target.elements)
		let dataArray = []
		data = data.forEach(el => {
			dataArray.push([el["id"], el["value"]])
		})
		dataArray.pop
		dataArray.push(["name", busName]);
		postForm(dataArray);
	}

	/* ADMIN LOGIN FUNCTIONS */
	function clearDirectoryForAdmin(){
		sponsListContainer.style.display = "none";
		adsContainer.style.display = "none";
		searchBarContainer.style.display = "none";
		listingsContainer.style.display = "none";
		newBusContainer.style.display = "none";
		hiddenAdminButton.style.display = "none";

		adminPanel.style.display = "block";
		adminMenu.style.display = "block";
		adminPanelLogin.style.display = "none";
		adminPanelLogout.style.display = "block";
		adminPanelForm.style.display = "none";
		adminUserInfo.style.display = "block";

		if (loggedIn() === true){
				adminInterface.launchAdminInterface();
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

	/* PAGE RESET FUNCTION */
	function resetPage() {
		reviewCheckBox.checked = false;
		imageCheckBox.checked = false;
		flagCheckBox.checked = false;
		editCheckBox.checked = false;
		nameRadioSelect.checked = true;
		categoryRadioSelect.checked = false;
		listingsContainer.style.display = 'none';
		detailedListingMenu.style.display = 'none';
		mapContainer.style.display = "none";
		businessDetails.style.display = "none";
		let elements = document.querySelectorAll('input[type="text"]');
		Array.from(elements).forEach(el => el.value = '')

		/* clear global variables */
		ALL = [];
		CATS = [];
		ENTRIES = [];

		/* repopulate categories for drop down menu */
		collectCategories();
	}


	/* EVENT LISTENERS */
	/* Search Bar Listeners */
	nameRadioSelect.addEventListener("click", toggleNameMenu);
	categoryRadioSelect.addEventListener("click", toggleCategoryMenu);

	document.getElementById('js-by-category-button').addEventListener('click', retrieveSearchCategoryResults);

	document.getElementById('js-by-name-button').addEventListener('click', retrieveSearchNameResults)

	/* Checkbox Listeners */
	reviewCheckBox.addEventListener("change", function() {
		let el = document.getElementById('js-add-review-form-container')
		toggleForm('checkbox', el);
	})

	imageCheckBox.addEventListener("change", function() {
		let el = document.getElementById('js-add-image-form-container')
	 	toggleForm('checkbox', el);
	})

	flagCheckBox.addEventListener("change", function() {
		let el = document.getElementById('js-flag-business-form-container')
	 	toggleForm('checkbox', el);
	})

	editCheckBox.addEventListener("change", function() {
		let el = document.getElementById('js-suggest-edit-form-container')
	 	toggleForm('checkbox', el);
	})

	/* Index Button Event Listeners */
	/*
	button.addEventListener('click', busObj => {
		let name = button.target.value
		postBusObjToRetrieve(name);
	})
	*/

	/* New Business Form Listener */
	newBusinessButton.addEventListener("click", toggleNewBusinessForm);

	/* Form Event Listeners */
	document.addEventListener( "submit", submitForm(event));
	/* remove form success message */
	document.addEventListener( 'click', function (event) {
		[].forEach.call(document.querySelectorAll('.succMsg'),function(e){
		  e.parentNode.removeChild(e);
		})
	})

	/* Admin Panel Listeners */
	hiddenAdminButton.addEventListener("click", function() {
		let el = document.getElementById('js-admin-login-container')
		toggleForm('click', el);
	})
	adminPanelLogin.addEventListener("click", clearDirectoryForAdmin);

	/* SET PAGE LOAD VALUES */
	resetPage();
	adminInterface.resetAdmin();
}
