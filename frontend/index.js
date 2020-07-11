import * as adminVar from './src/elementVariables/adminVar.js';
import * as userVar from	'./src/elementVariables/userVar.js';
import Business from	'./src/classes/business.js';
import Image from './src/classes/image.js';
import Review from './src/classes/review.js';
import GoogleMap from './src/classes/GoogleMap.js';
import Entry from './src/classes/entry.js';
import Operation from './src/classes/operation.js';
import * as adminAPI from	'./src/admin/api/adminAPIRequests.js';
import * as adminInterface from	'./src/admin/interface/adminInterface.js';
import * as storage from './src/sessionStorage/localStorage.js';

window.onload = function(){
	sessionStorage.clear();
	storage.initializeStorage();

	const user = userVar.userVar();
	const admin = adminVar.adminVar();
	const adminFetch = adminAPI.adminAPIRequests(storage, Entry);

	const LAT = 20.42;
	const LNG = -86.92;

	var LANGUAGE = '';

	/* LANGUAGE SUPPORT  */
	(function setLanguage(event){
		if (document.title == "Directory Cozumel") {
			LANGUAGE = 'eng';
		} else {
			LANGUAGE = 'esp';
		}
	}());

	/* Initiate Admin Panel Listeners */
	if (user.hiddenAdminButton !== null) {
		user.hiddenAdminButton.addEventListener('click', function() {
			const el = document.getElementById('js-admin-login-container')
			toggleForm('click', el);
		})
		user.adminPanelLogin.addEventListener('click', logInAdmin);
	}

	/* SET PAGE LOAD VALUES */
	resetPage();

	/* SEARCH FUNCTIONS
	/* Search Bar Toggle Functions */
	function toggleCategoryMenu() {
		user.listingsContainer.style.display = 'none';
		user.searchByName.style.display = 'none';
		user.searchByCategory.style.display = 'block';
		/* prevent redundant calls to api */
		if (storage.getStorageItem('cats') == false) collectCategories();
		renderCategoriesMenu(LANGUAGE);
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

	/* New Business Form - Info PopUps */
	function showSustainableInfo(){
		if (LANGUAGE == 'eng') {
			alert('Sustainable Business: incorporates principles of sustainability, supplies environmentally friendly products or services, is greener than competition, and has made an enduring commitment to environmental principles in operations.')
		} else {
			alert('Negocio sostenible: incorpora principios de sostenibilidad, proporciona productos o servicios respetuosos con el medio ambiente, es más ecológico que la competencia y ha asumido un compromiso duradero con los principios ambientales en las operaciones.')
		}
	}

	function showOperationInfo(){
		if (LANGUAGE == 'eng') {
			alert('Add hours of operation, CoVid capacity, operations status, estimated opening date if not open yet, message to customers, etc.')
		} else {
			alert('Agregar horas de operación, capacidad CoVid, estado de las operaciones, fecha estimada de apertura si aún no está abierta, mensaje a los clientes, etc.')
		}
	}

	function toggleOpeningDate(){
		user.openingDate.style.display == 'block' ? 	user.openingDate.style.display = 'none' : user.openingDate.style.display = 'block';
	}

	function retrieveSearchCategoryResults() {
		user.listingMenu.style.display = 'none';
		user.listingsContainer.style.display = 'block';
		const category = document.getElementById('js-category-select').value
		const results = postSearchByCategory(LANGUAGE, category);
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
			if (storage.getStorageItem('cats') == false) collectCategories();
			if (categorySelectEl === null) renderNewBusCatSelect();
		}
		document.getElementById('sustainable-info').addEventListener('click', showSustainableInfo);
		document.getElementById('operation-info').addEventListener('click', showOperationInfo);
		document.getElementById('current-status-no').addEventListener('click', 	toggleOpeningDate);
	}

	function toggleOperationForm() {
		const operationForm = document.getElementById('js-operation-form');
		operationForm.style.display == 'none' ? operationForm.style.display = 'block' : operationForm.style.display = 'none';
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
			.then(resp => resp.json())
			.then(json => {
				if (params['callback']) {
					params['callback'](json);
			} else {
				storage.updateOrCreateStorage('response', json);
			}
				return console.log(json)
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

	function postSearchByCategory(LANGUAGE, category) {
		const params = {method: 'POST', url: 'http://localhost:3000/index_by_category', data: {lang: LANGUAGE, 'category_name': category}, callback: returnResults}
		dynamPostReq(params);
	}

	function postBusObjToRetrieve(name) {
		const params = { method: 'POST', url: 'http://localhost:3000/business', data: {'name': name}, callback: displayBusObj }
		dynamPostReq(params);
	}

	function postForm(data) {
		const callback = storage.updateOrCreateStorage('response', data)
		const params = { method: 'POST', url: 'http://localhost:3000/entries', data, callback: null}
		dynamPostReq(params);
	}


	/* RESULTS FUNCTIONS */
	/* Search Results functions */
	function storeCategories(data) {
		const categoryObjects = Array.from(data);
		var catsCollection;
		if (LANGUAGE == 'eng') {
			catsCollection = categoryObjects.map((el) => {
				return el['name'];
			}).sort()
		} else {
			catsCollection = categoryObjects.map((el) => {
				return el['nombre'];
			}).sort()
		}
		let catsData = JSON.stringify(catsCollection);
		storage.updateOrCreateStorage('cats', catsData);
	}

	function returnResults(data) {
		var newData;
		if (data['msg'] !== undefined) {
			if (LANGUAGE == 'esp' && data['msg-esp'] !== undefined ){
				appendErrorMsg(data['msg-esp']);
			} else {
				appendErrorMsg(data['msg']);
			}
		} else {
			cacheSearch(data);
			newData = data.map(el => JSON.parse(el));
			renderIndex(newData);
		}
		return newData;
		//return data;
	}

	function displayBusObj(data) {
		renderListing(buildListing(data));
	}

	function displaySearchResultsBusObj(data){
		data.forEach( el => {
			renderListing(buildListing(data));
		})
	}

	function buildListing(data) {
		const busObj = Business.buildBusObj(data);
		var map;
		var operationObj;

		//data['map'] ?  map = GoogleMap.mapBuilder(data['map']) : map = []
		map = []
		const imagesCollection = Image.imagesBuilder(data['images']);
		const reviewsCollection = Review.reviewsBuilder(data['reviews']);
		data['operation']? operationObj = Operation.operationBuilder(data['operation']) : operationObj = [];
		const objArray = [busObj, map, imagesCollection, reviewsCollection, operationObj]
		return objArray;
	}

	function renderListingOnly(objArray){
		if (objArray != undefined) {
			var business = Business.buildBusObj(objArray);
			let busHTML = business.renderIndexBusListing(LANGUAGE);
			renderComponent(busHTML, user.resultsListings);
			let busButton = document.getElementById(`js-bus-${objArray.id}-more`);
			busButton.addEventListener('click', postBusObjToRetrieve.bind(null, objArray.name))
		}
	}

	function renderListing(objArray) {
		// refactor this function
		if (objArray != undefined) {
			user.businessListings.innerHTML = '';
			user.resultsListings.innerHTML = '';
			const busHTML = objArray[0].renderBusListing(LANGUAGE);
			renderComponent(busHTML, user.resultsListings);
			if (objArray[4].currentStatus != undefined || objArray[4].currentStatus != null) {
				//fix bug check for covid details render if present
				const operationsHTML = objArray[4].renderOperations(LANGUAGE);
				renderComponent(operationsHTML, user.resultsListings);
			}

			if (objArray[1].length > 0){
				mapHTML = objArray[1].renderMap();
				renderComponent(mapHTML, user.resultsListings);
			}
			if (objArray[3].length > 0){
				let reviewsHTML = '<h5>Reviews</h5>';
				objArray[3].forEach((rev) => reviewsHTML += rev.renderReview(LANGUAGE));
				renderComponent(reviewsHTML, user.resultsListings);
			}
			if (objArray[2].length > 0) {
				let imagesHTML = '<h5>Photos</h5>';
				objArray[2].forEach((img) => imagesHTML += img.renderImage());
				renderComponent(imagesHTML, user.resultsListings);
			}
			user.listingMenu.style.display = 'block';
			document.getElementById('listing-back-button').addEventListener('click', returnToCachedSearch)
		}
	}

	function appendErrorMsg(msg) {
		user.businessListings.innerHTML = '';
		user.resultsListings.innerHTML = '';
		const errorMsg = document.createElement('p');
		errorMsg.innerHTML = `${msg}`
		user.businessListings.appendChild(errorMsg);
		user.businessListings.style.display = 'block';
	}

	/* Render functions */
	function renderCategoriesMenu(LANGUAGE) {
		if (user.searchCategoryMenu.children.length === 0 ){
			let catMenu = document.createElement('div');
			let html = '<select id= "js-category-select">';
			let catsData = JSON.parse(storage.getStorageItem('cats'));
			const cats = catsData.map((el) => {
				return `<option value='${el}'> ${el} </option>`;
			})
			html += cats + '</select>';
			catMenu.innerHTML = html;
			user.searchCategoryMenu.appendChild(catMenu);
		}
	}

	function renderIndex(resultsList) {
		user.businessListings.innerHTML = '';
		user.resultsListings.innerHTML = '';
		user.businessListings.style.display = 'block';
		resultsList.forEach(function(busObj) {
			renderListingOnly(busObj);
		});
	}

	function cacheSearch(data){
		sessionStorage.setItem('cachedSearchLen', data.length)
		var num = 0;
		data.forEach(el => {
			sessionStorage.setItem(`cachedSearch${num}`, el)
			num ++;
		})
	}

	function returnToCachedSearch(){
		var checkboxes = document.querySelectorAll("input[type='checkbox']");
		for(var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = false;
		}
		document.getElementById('js-add-review-form-container').style.display = 'none';
		document.getElementById('js-add-image-form-container').style.display = 'none';
		document.getElementById('js-suggest-edit-form-container').style.display = 'none';
		document.getElementById('js-flag-business-form-container').style.display = 'none';
		user.listingMenu.style.display = 'none';
		var length = sessionStorage.cachedSearchLen;
		var dataArray = [];
		for(let i = 0; i < length; i++){
			let cachedSearch = sessionStorage.getItem(`cachedSearch${i}`);
			dataArray.push(JSON.parse(cachedSearch));
		}
		renderIndex(dataArray);
	}

	function renderButton(obj, functionToExec, elToAppendTo){
		const buttonHTML =`<div class='button-div'><input id='button_${obj.id}' type='button' class='js-bus-select' value='${obj.name}'></div>`;
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
		if (storage.getStorageItem('cats') == false) collectCategories();
		let catMenu = document.createElement('div');
		let html = '<select id="cat-select">';
		let catsData = JSON.parse(storage.getStorageItem('cats'));
		const cats = catsData.map((el) => {
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
			if (LANGUAGE == 'eng'){
				if (storage.getStorageItem('response') !== false){
					submittedEl.innerHTML = 'Thank you for your submission!'
					submittedEl.innerHTML += '<br>' + 'It will be added to the directory as soon as it is confirmed!';
				} else {
					submittedEl.innerHTML = 'Submission Unsuccessful!';
				}
			} else {
				if (storage.getStorageItem('response') !== false){
				submittedEl.innerHTML = '¡Gracias por tu envío!'
				submittedEl.innerHTML += '<br>' + '¡Se agregará al directorio tan pronto como se revise!';
				} else {
					submittedEl.innerHTML = '¡Envío fallido!';
				}
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
			adminInterface.checkAdminAuth();
			clearDirectoryForAdminView();
			adminInterface.launchAdminInterface(user, admin, adminFetch, storage, Entry);
		} else {
			alert('You are not authorized to access administrative tasks!')
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
		if (document.getElementById('js-admin-password') !== null){
			document.getElementById('js-admin-password').value = ''
		}
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


	/* Operations Form Event Listener */
	user.operationFormCheckBox.addEventListener('click', toggleOperationForm)



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
}
