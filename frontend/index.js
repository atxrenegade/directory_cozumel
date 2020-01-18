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
	let businessListings = document.getElementById('js-listing-show');
	let listingMenu = document.getElementById('js-listing-menu');

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
		listingMenu.style.display = 'none';
		listingsContainer.style.display = 'block';
		postSearchByName(searchNameField.value);
		searchNameField.value = '';
	}

	function retrieveSearchCategoryResults() {
		listingMenu.style.display = 'none';
		listingsContainer.style.display = 'block';
		let category = document.getElementById('js-category-select').value
		let results = postSearchByCategory(category);
	}

	/* TOGGLE FORM FUNCTIONS */
	function toggleForm(event, el) {
		if (event === 'submit' || el.style.display == 'block') {
			el.style.display = 'none'
		} else {
			el.style.display = 'block'
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
			.then(json => displayBusObj(json)
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
			return el['name']
		})
	}

	function returnResults(data){
		data = Array.from(data)
		if (data[0] == undefined) {
			appendErrorMsg('NOT FOUND');
		} else {
			renderIndex(data)
		}
	}

	function displayBusObj(data){
		renderListing(buildListing(data));
	}

	function buildListing(data){
		let objArray = []
		let busObj = Business.buildBusObj(data);
		let map;
		if (data['map']) {
			map = GoogleMap.mapBuilder(data['map'])
		} else { map = [] }
		let imagesCollection = Image.imagesBuilder(data['images']);
		let reviewsCollection = Review.reviewsBuilder(data['reviews']);
		objArray.push(busObj, map, imagesCollection, reviewsCollection)
		return objArray;
	}

	function renderListing(objArray){
		if (objArray != undefined) {
			let el = businessListings
			el.innerHTML = '';
			let busHTML = objArray[0].renderBusListing();
			let mapHTML;
			let reviewsHTML;
			let imagesHTML;
			renderComponent(busHTML, el);
			if (objArray[1].length > 0){
				mapHTML = objArray[1].renderMap();
				renderComponent(mapHTML, el);
			}
			if (objArray[3].length > 0){
				let reviewsHTML = '';
				objArray[3].forEach((rev) => reviewsHTML += rev.renderReview());
				renderComponent(reviewsHTML, el);
			}
			if (objArray[2].length > 0) {
				let imagesHTML = '';
				objArray[2].forEach((img) => imagesHTML += img.renderImage());
				renderComponent(imagesHTML, el);
			}
			listingMenu.style.display = 'block';
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

	function renderIndex(resultsList){
		businessListings.innerHTML = '';
		businessListings.style.display = 'block';
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

	function renderComponent(generatedHtml, el) {
		let newDiv = document.createElement('div');
		newDiv.innerHTML = generatedHtml;
		el.appendChild(newDiv);
	}

	/* FORM FUNCTIONs */
	/* Render Categories Select For Bus Form */
	function renderNewBusCatSelect(){
		if (CATS.length == 0){
			collectCategories();
		}
		let catMenu = document.createElement('div');
		let html = '<select id="cat-select" multiple>';
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
		let busName = '';
		if (event.target[0].id === 'new-bus'){
			busName = document.getElementById('bus-name').value;
		} else {
			busName = document.getElementById('listing-bus-name').innerText;
		}
		return busName;
	}

	function submitForm(event) {
		if (event.type === 'submit' &&  event.target.className !== 'admin-form') {
			event.preventDefault();
			let busName = getBusNameForAssoForm(event);
			createPostData(event, busName);
			formSubmitted(event);
		}
	}

	function formSubmitted(event) {
		let submittedEl = document.createElement('p');
		submittedEl.className = 'succMsg'
		submittedEl.innerHTML = 'Successfully submitted for Review!';
		event.target.style.display = 'none';
		event.target.reset();
		if (event.originalTarget[0].id === 'new-bus'){
			newBusContainer.appendChild(submittedEl)
		} else {
			listingMenu.appendChild(submittedEl)
			clearCheckBox();
		}
	}

	function clearCheckBox(){
		reviewCheckBox.checked = false;
		imageCheckBox.checked = false;
		flagCheckBox.checked = false;
		editCheckBox.checked = false;
	}

	function clearGlobalVariables(){
		ALL = [];
		CATS = [];
		ENTRIES = [];
	}

	/* Form Post functions */
	function createPostData(event, busName) {
		let data = Array.from(event.target.elements)
		let dataArray = []
		data = data.forEach(el => {
			dataArray.push([el['id'], el['value']])
		})
		dataArray.pop
		dataArray.push(['name', busName]);
		postForm(dataArray);
	}

	/* ADMIN LOGIN FUNCTIONS */
	function clearDirectoryForAdmin(){
		sponsListContainer.style.display = 'none';
		adsContainer.style.display = 'none';
		searchBarContainer.style.display = 'none';
		listingsContainer.style.display = 'none';
		newBusContainer.style.display = 'none';
		hiddenAdminButton.style.display = 'none';
		adminPanel.style.display = 'block';
		adminMenu.style.display = 'block';
		adminPanelLogin.style.display = 'none';
		adminPanelLogout.style.display = 'block';
		adminPanelForm.style.display = 'none';
		adminUserInfo.style.display = 'block';

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
		clearCheckBox();
		clearGlobalVariables();
		nameRadioSelect.checked = true;
		categoryRadioSelect.checked = false;
		listingsContainer.style.display = 'none';
		listingMenu.style.display = 'none';
		mapContainer.style.display = 'none';
		businessListings.style.display = 'none';
		let elements = document.querySelectorAll('input[type="text"]');
		Array.from(elements).forEach(el => el.value = '')
		/* repopulate categories for drop down menu */
		collectCategories();
	}


	/* EVENT LISTENERS */
	/* Search Bar Listeners */
	nameRadioSelect.addEventListener('click', toggleNameMenu);
	categoryRadioSelect.addEventListener('click', toggleCategoryMenu);

	document.getElementById('js-by-category-button').addEventListener('click', retrieveSearchCategoryResults);

	document.getElementById('js-by-name-button').addEventListener('click', retrieveSearchNameResults)

	/* Checkbox Listeners */
	reviewCheckBox.addEventListener('change', function() {
		let el = document.getElementById('js-add-review-form-container')
		toggleForm('checkbox', el);
	})

	imageCheckBox.addEventListener('change', function() {
		let el = document.getElementById('js-add-image-form-container')
	 	toggleForm('checkbox', el);
	})

	flagCheckBox.addEventListener('change', function() {
		let el = document.getElementById('js-flag-business-form-container')
	 	toggleForm('checkbox', el);
	})

	editCheckBox.addEventListener('change', function() {
		let el = document.getElementById('js-suggest-edit-form-container')
	 	toggleForm('checkbox', el);
	})

	/* New Business Form Listener */
	newBusinessButton.addEventListener('click', toggleNewBusinessForm);

	/* Form Event Listeners */
	document.addEventListener( 'submit', function(){
		submitForm(event);
	});
	/* remove form success message */
	document.addEventListener( 'click', function (event) {
		[].forEach.call(document.querySelectorAll('.succMsg'),function(e){
		  e.parentNode.removeChild(e);
		})
	})

	/* Initiate Admin Panel Listeners */
	hiddenAdminButton.addEventListener('click', function() {
		let el = document.getElementById('js-admin-login-container')
		toggleForm('click', el);
	})
	adminPanelLogin.addEventListener('click', clearDirectoryForAdmin);

	/* AdminPanel Listeners */
	let modifyRecButton = document.getElementById('js-super-admin-modify-menu')
	modifyRecButton.addEventListener('click', console.log(event.target))

	/* SET PAGE LOAD VALUES */
	resetPage();
	adminInterface.resetAdmin();
}
