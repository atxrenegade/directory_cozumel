import * as adminVar from './src/elementVariables/adminVar.js';
import * as user from	'./src/elementVariables/userVar.js';
import * as adminFetch from	'./src/admin/api/adminAPIRequests.js';

window.onload = function() {
	let storage = new AppStorage;
	//const user = userVariables(); ?

	LAT = 20.42;
	LNG = -86.92;

	/* SEARCH FUNCTIONS
	/* Search Bar Toggle Functions */
	function toggleCategoryMenu() {
		user.listingsContainer.style.display = 'none';
		user.searchByName.style.display = 'none';
		user.searchByCategory.style.display = 'block';
		/* prevent redundant calls to api */
		if (storage.cats.length < 1) collectCategories();
		renderCategoriesMenu();
	}

	function toggleNameMenu() {
		user.searchNameField.value = '';
		user.listingsContainer.style.display = 'none';
		user.searchByName.style.display = 'block';
		user.searchByCategory.style.display = 'none';
	}

	/* search by name functions */
	function retrieveSearchNameResults(){
		user.listingMenu.style.display = 'none';
		user.listingsContainer.style.display = 'block';
		postSearchByName(user.searchNameField.value);
		user.searchNameField.value = '';
	}

	function retrieveSearchCategoryResults() {
		user.listingMenu.style.display = 'none';
		user.listingsContainer.style.display = 'block';
		const category = document.getElementById('js-category-select').value
		const results = postSearchByCategory(category);
	}

	/* TOGGLE FORM FUNCTIONS */
	function toggleForm(event, el) {
		el.firstElementChild.style.display = 'block';
		event === 'submit' || el.style.display == 'block' ? el.style.display = 'none' : el.style.display = 'block'
	}

	function toggleNewBusinessForm() {
		const elFormContainer = document.getElementById('js-add-business-form-container')
		if (elFormContainer.style.display === 'block'){
			elFormContainer.style.display = 'none';
		} else {
			const categorySelectEl = document.getElementById('cat-select')
			user.newBusinessForm.style.display = 'block';
			elFormContainer.style.display = 'block';
			if (storage.cats.length < 1) collectCategories();
			if (categorySelectEl === null) renderNewBusCatSelect();
		}
	}

	/* API REQUEST FUNCTIONS */
	/* Search Bar API request functions */
	function dynamPostReq(params) {
		const configObj = {
			method: params['method'],
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(params['data'])
		};
		try {
			fetch(params['url'], configObj)
			.then(resp => {
				return resp.json();
			})
			.then(json => {
				params['callback'](json)
			})
		}
		catch(err) {
			alert('Error. See console for further details!');
			console.log(err.message);
		}
	}

	function dynamGetReq(params){
		try {
			fetch(params['url'])
			.then(resp => resp.json())
			.then(json => params['callback'](json))
		}
		catch(err) {
			alert('Error. See console for further details!');
			console.log(err.message);
		}
	}

	function collectCategories() {
		const params = {url: 'http://localhost:3000/categories', callback: storeCategories};
		dynamGetReq(params);
	}

	function postSearchByName(name) {
		const params = {method: 'POST', url: 'http://localhost:3000/index_by_name', data: {'name': name}, callback: returnResults}
		dynamPostReq(params);
	}

	function postSearchByCategory(category) {
		const params = {method: 'POST', url: 'http://localhost:3000/index_by_category', data: {'category_name': category}, callback: returnResults}
		dynamPostReq(params);
	}

	function postBusObjToRetrieve(name) {
		const params = {method: 'POST', url: 'http://localhost:3000/business', data: {'name': name}, callback: displayBusObj}
		dynamPostReq(params);
	}

	function postForm(data) {
		const callback = storage.updateResponse
		const params = {method: 'POST', url: 'http://localhost:3000/entries', data, callback}
		dynamPostReq(params);
	}


	/* RESULTS FUNCTIONS */
	/* Search Results functions */
	function storeCategories(data) {
		const categoryObjects = Array.from(data);
		let catsCollection = categoryObjects.map((el) => {
			return el['name']
		})
		storage.updateCats(catsCollection)
	}

	function returnResults(data) {
		if (data['msg'] !== undefined) {
			appendErrorMsg(data['msg']);
		} else {
			data = Array.from(data);
			renderIndex(data);
		}
	}

	function displayBusObj(data) {
		renderListing(buildListing(data));
	}

	function buildListing(data) {
		const busObj = Business.buildBusObj(data);
		let map;
		data['map'] ?  map = GoogleMap.mapBuilder(data['map']) : map = []
		const imagesCollection = Image.imagesBuilder(data['images']);
		const reviewsCollection = Review.reviewsBuilder(data['reviews']);
		const objArray= [busObj, map, imagesCollection, reviewsCollection]
		return objArray;
	}

	function renderListing(objArray) {
		// refactor this function
		if (objArray != undefined) {
			user.businessListings.innerHTML = '';
			const busHTML = objArray[0].renderBusListing();
			renderComponent(busHTML, user.businessListings);

			if (objArray[1].length > 0){
				mapHTML = objArray[1].renderMap();
				renderComponent(mapHTML, user.businessListings);
			}
			if (objArray[3].length > 0){
				let reviewsHTML = '';
				objArray[3].forEach((rev) => reviewsHTML += rev.renderReview());
				renderComponent(reviewsHTML, user.businessListings);
			}
			if (objArray[2].length > 0) {
				let imagesHTML = '';
				objArray[2].forEach((img) => imagesHTML += img.renderImage());
				renderComponent(imagesHTML, user.businessListings);
			}
			user.listingMenu.style.display = 'block';
		}
	}

	function appendErrorMsg(msg) {
		user.businessListings.innerHTML = '';
		const errorMsg = document.createElement('p');
		errorMsg.innerHTML = `${msg}`
		user.businessListings.appendChild(errorMsg);
		user.businessListings.style.display = 'block';
	}

	/* Render functions */
	function renderCategoriesMenu() {
		if (user.searchCategoryMenu.children.length === 0 ){
			let catMenu = document.createElement('div');
			let html = '<select id= "js-category-select">';
			const cats = storage.cats.map((el) => {
				return `<option value='${el}'> ${el} </option>`;
			})
			html += cats + '</select>';
			catMenu.innerHTML = html;
			user.searchCategoryMenu.appendChild(catMenu);
		}
	}

	function renderIndex(resultsList) {
		user.businessListings.innerHTML = '';
		user.businessListings.style.display = 'block';
		resultsList.forEach(function(busObj) {
			renderButton(busObj, postBusObjToRetrieve, user.businessListings);
		});
	}

	function renderButton(obj, functionToExec, elToAppendTo){
		const buttonHTML =`<input id='button_${obj.id}' type='button' class='js-bus-select' value='${obj.name}'>`;
		renderComponent(buttonHTML, elToAppendTo);
		const el = `button_${obj.id}`
		const button = document.getElementById(el)
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
	function renderNewBusCatSelect() {
		const newBusCatSelectEl = document.getElementById('js-new-bus-select-label');
		if (storage.cats.length < 1) collectCategories();
		let catMenu = document.createElement('div');
		let html = '<select id="cat-select" multiple>';
		const cats = storage.cats.map((el) => {
			return `<option value='${el}'> ${el} </option>`;
		})
		html += cats + '</select>';
		catMenu.innerHTML = html;
		newBusCatSelectEl.appendChild(catMenu)
	};

	/* Retrieve Bus Name From DOM for Associated Form */
	function getBusNameForAssoForm(event){
		let busName = '';
		if (event.target[0].id === 'new-bus') {
			busName = document.getElementById('business-name').value;
		} else {
			busName = document.getElementById('listing-bus-name').innerText;
		}
		return busName;
	}

	function submitForm(event) {
		if (event.type === 'submit' &&  event.target.className !== 'admin-form') {
			event.preventDefault();
			const busName = getBusNameForAssoForm(event);
			createPostData(event, busName);
			formSubmitted(event);
		}
	}

	function formSubmitted(event) {
		let submittedEl = document.createElement('p');
		submittedEl.className = 'succMsg'
		setTimeout(function(){
			if (storage.response !== undefined){
				submittedEl.innerHTML = 'Thank you for your submission!'
				submittedEl.innerHTML += '<br>' + 'New data will be added to the directory upon review!';
			} else {
				submittedEl.innerHTML = 'Submission Unsuccessful!';
			}
			event.target.reset();
			if (event.originalTarget[0].id === 'new-bus'){
				document.getElementById('js-add-business').appendChild(submittedEl);
			} else {
				user.listingMenu.appendChild(submittedEl)
				clearCheckBox();
			}
			event.target.style.display = 'none';
		}, 250)
	}

	function clearCheckBox() {
		user.reviewCheckBox.checked = false;
		user.imageCheckBox.checked = false;
		user.flagCheckBox.checked = false;
		user.editCheckBox.checked = false;
	}

	/* Form Post functions */
	function createPostData(event, busName) {
		let data = Array.from(event.target.elements)
		let dataArray = []
		data.forEach(el => {
			dataArray.push([el['id'], el['value']])
		})
		dataArray.pop
		dataArray.push(['name', busName]);
		postForm(dataArray);
	}

	/* ADMIN LOGIN FUNCTIONS */
	function clearDirectoryForAdminView() {
		const sponsListContainer = document.getElementById('sponsored-listing-container');
		const adsContainer = document.getElementById('ads-container');
		const searchBarContainer = document.getElementById('js-searchbar-container');
		const newBusContainer = document.getElementById('js-new-business-container');
		const adminPanel = document.getElementById('js-admin-panel-container');
		const adminMenu = document.getElementById('js-admin-menu-container');
		const adminPanelLogout = document.getElementById('js-admin-logout-button');
		const adminPanelForm = document.getElementById('js-admin-login');
		const adminUserInfo = document.getElementById('js-admin-user-info');
		sponsListContainer.style.display = 'none';
		adsContainer.style.display = 'none';
		searchBarContainer.style.display = 'none';
		user.listingsContainer.style.display = 'none';
		newBusContainer.style.display = 'none';
		user.hiddenAdminButton.style.display = 'none';
		adminPanel.style.display = 'block';
		adminMenu.style.display = 'block';
		user.adminPanelLogin.style.display = 'none';
		adminPanelLogout.style.display = 'block';
		adminPanelForm.style.display = 'none';
		adminUserInfo.style.display = 'block';
	}

	function logInAdmin() {
		const usernameVal = document.getElementById('js-admin-username').value.trim();
		const passwordVal = document.getElementById('js-admin-password').value.trim();
		let data = {"session": {"username": usernameVal, "password": passwordVal}}
		const params = {method: 'POST', url: 'http://localhost:3000/login', data, callback: authAdminLogIn}
		dynamPostReq(params);
	}

	function authAdminLogIn(session) {
		if (session['id'] == true){
			sessionStorage.setItem('adminId', session['id']);
			sessionStorage.setItem('adminName', session['username']);
			sessionStorage.setItem('adminRole', session['role']);
			AdminInterface.checkAdminAuth();
			clearDirectoryForAdminView();
			new AdminInterface();
		} else {
			alert('You are not authorized to access admininstrative tasks!')
			resetPage();
		}
	}

	/* PAGE RESET FUNCTION */
	function resetPage() {
		const mapContainer = document.getElementById('js-map');
		clearCheckBox();
		user.nameRadioSelect.checked = true;
		user.categoryRadioSelect.checked = false;
		user.listingsContainer.style.display = 'none';
		user.listingMenu.style.display = 'none';
		mapContainer.style.display = 'none';
		user.businessListings.style.display = 'none';
		const elements = document.querySelectorAll('input[type="text"]');
		Array.from(elements).forEach(el => el.value = '')
		document.getElementById('js-admin-password').value = ''
		/* repopulate categories for drop down menu */
		collectCategories();
	}

	/* EVENT LISTENERS */
	/* Search Bar Listeners */
	user.nameRadioSelect.addEventListener('click', toggleNameMenu);

	user.categoryRadioSelect.addEventListener('click', toggleCategoryMenu);

	document.getElementById('js-by-category-button').addEventListener('click', retrieveSearchCategoryResults);

	document.getElementById('js-by-name-button').addEventListener('click', retrieveSearchNameResults);

	/* Checkbox Listeners */
	user.reviewCheckBox.addEventListener('change', function() {
		const el = document.getElementById('js-add-review-form-container')
		toggleForm('checkbox', el);
	})

	user.imageCheckBox.addEventListener('change', function() {
		const el = document.getElementById('js-add-image-form-container')
	 	toggleForm('checkbox', el);
	})

	user.flagCheckBox.addEventListener('change', function() {
		const el = document.getElementById('js-flag-business-form-container')
	 	toggleForm('checkbox', el);
	})

	user.editCheckBox.addEventListener('change', function() {
		const el = document.getElementById('js-suggest-edit-form-container')
	 	toggleForm('checkbox', el);
	})

	/* New Business Form Listener */
	user.newBusinessButton.addEventListener('click', toggleNewBusinessForm);

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
	user.hiddenAdminButton.addEventListener('click', function() {
		const el = document.getElementById('js-admin-login-container')
		toggleForm('click', el);
	})
	user.adminPanelLogin.addEventListener('click', logInAdmin);

	/* SET PAGE LOAD VALUES */
	resetPage();
}
