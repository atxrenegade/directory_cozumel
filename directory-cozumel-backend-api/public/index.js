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
import * as googleAPI from './src/API/googleMapsAPI.js';

window.onload = function(){
	sessionStorage.clear();
	localStorage.clear();
	storage.initializeStorage();

	const user = userVar.userVar();
	const admin = adminVar.adminVar();
	const adminFetch = adminAPI.adminAPIRequests(storage, Entry);
	const mapAPI = googleAPI.googleMapsAPI();

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
			el.scrollIntoView();
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
		if (user.searchNameField.value == '') {
			var title;
			var msg;
			if (LANGUAGE == 'eng') {
				title = 'INVALID SEARCH';
				msg = 'Please enter a search value!';
			} else {
				title = 'BÚSQUEDA NO VÁLIDA';
				msg = 'Por favor, introduzca un valor de búsqueda!';
			}
			userInputError(`${title}`, `${msg}`)
		} else {
			user.listingMenu.style.display = 'none';
			user.listingsContainer.style.display = 'block';
			postSearchByName(user.searchNameField.value);
			user.searchNameField.value = '';
			user.listingsContainer.scrollIntoView(true);
		}
	}

	function userInputError(title, message){
		Swal.fire({
			title: `${title}`,
			text: `${message}`,
			icon: 'warning',
			confirmButtonText: 'close'
		})
	}

	function checkRequiredInput(fieldsArray){
		var emptyValue;
		var len = fieldsArray.length
		for (let i = 0; i < len - 1; i++) {
			if (fieldsArray[i].value == "") {
				emptyValue = true;
				break;
			}
		}
		return emptyValue;
	}

	function setLocalDateTime(){
		var date = new Date();
		var dateString = date.toDateString();
		var time = date.toLocaleTimeString();
		return dateString + " " + time;
	}

	function formatDate(dateString){
		let dataArray = dateString.split('T')[0].split('-');
		return [dataArray[1], dataArray[2], [dataArray[0]]].join('-');
	}

	function capitalizeString(string) {
		var splitStringArray = string.split(' ');
		var newString = splitStringArray.map(el => {
			var lowerCaseString = el.split('').splice(1).join('').toLowerCase();
			return (el[0] + lowerCaseString);
		})
		return newString.join(' ');
	}

	/* New Business Form - Info PopUps */
	function showSustainableInfo(){
		if (LANGUAGE == 'eng') {
			Swal.fire({
				title: 'Sustainable Business',
				text: 'Incorporates principles of sustainability, supplies environmentally friendly products or services, is greener than competition, and has made an enduring commitment to environmental principles in operations.',
				icon: 'info',
				confirmButtonText: 'Close'
			})
		
		} else {
			Swal.fire({
				title: 'Negocio Sostenible:',
				text: 'Incorpora principios de sostenibilidad, proporciona productos o servicios respetuosos con el medio ambiente, es más ecológico que la competencia y ha asumido un compromiso duradero con los principios ambientales en las operaciones.',
				icon: 'info',
				confirmButtonText: 'Cerrar'
			})
		}
	}

	function showOperationInfo(){
		if (LANGUAGE == 'eng') {
			Swal.fire({
				title: 'CoVid and Operating Details',
				text: 'Add hours of operation, CoVid capacity, operations status, estimated opening date if not open yet, message to customers, etc.',
				icon: 'info',
				confirmButtonText: 'Close'
			})
		} else {
			Swal.fire({
				title: 'CoVid y Detalles Operativos:',
				text: 'Agregar horas de operación, capacidad CoVid, estado de las operaciones, fecha estimada de apertura si aún no está abierta, mensaje a los clientes, etc.',
				icon: 'info',
				confirmButtonText: 'Cerrar'
			})
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
		user.listingsContainer.scrollIntoView(true);
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
		document.getElementById('js-current-status-no').addEventListener('click', 	toggleOpeningDate);
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
		user.listingsContainer.scrollIntoView(true);
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
		data['map'] !== undefined ? map = GoogleMap.mapBuilder(data['map']) : map = null;
		const imagesCollection = Image.imagesBuilder(data['images']);
		const reviewsCollection = Review.reviewsBuilder(data['reviews']);
		data['operation'] ? operationObj = Operation.operationBuilder(data['operation'], formatDate(data['updated_at'])) : operationObj = [];
		const objArray = [busObj, map, imagesCollection, reviewsCollection, operationObj]
		return objArray;
	}

	function renderListingOnly(objArray){
		if (objArray != undefined) {
			var business = Business.buildBusObj(objArray);
			let busHTML = business.renderBusListing(LANGUAGE, formatDate, 'index');
			renderComponent(busHTML, user.resultsListings);
			let busButton = document.getElementById(`js-bus-${objArray.id}-more`);
			busButton.addEventListener('click', postBusObjToRetrieve.bind(null, objArray.name))
		}
	}

	function renderListing(objArray) {
		if (objArray != undefined) {
			user.businessListings.innerHTML = '';
			user.resultsListings.innerHTML = '';
			const busHTML = objArray[0].renderBusListing(LANGUAGE, formatDate, 'details');
			renderComponent(busHTML, user.resultsListings);
			if (objArray[1] != undefined) {
				var mapHTML = objArray[1].renderMap(mapAPI.key);
				renderComponent(mapHTML, user.resultsListings);
			}
			if (objArray[4].currentStatus != undefined || objArray[4].currentStatus != null) {
				const operationsHTML = objArray[4].renderOperations(LANGUAGE);
				renderComponent(operationsHTML, user.resultsListings);
			}
			if (objArray[3].length > 0){
				let reviewsHTML = '<h5>Reviews</h5>';
				objArray[3].forEach((rev) => reviewsHTML += rev.renderReview(LANGUAGE, formatDate));
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
			if (LANGUAGE == 'eng') {
				catsData.unshift('Sustainable Businesses');
			} else {
				catsData.unshift('Negocio Sustentable')
			}
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
	/* Handle New Business Form */
	function formatNewBusinessFormData(event){
		event.preventDefault();
		var data = Array.from(event.target.parentNode.elements)
		var required = checkRequiredInput([data[0], data[1], data[2], data[4]])
		if (required == true) {
			var title;
			var msg;
			if (LANGUAGE == 'eng'){
				title = 'Incomplete Form';
				msg = 'Business name, address, phone number and category are mandatory fields!';
			} else  {
				title = 'Forma Incompleta';
				msg = '¡El nombre comercial, la dirección, el número de teléfono y la categoría son campos obligatorios!';
			}
				userInputError(`${title}`, `${msg}`)
				required = undefined;
		} else {
			var businessData = []
			data.slice(0, 5).forEach(el => {
				businessData.push([el['id'], el['value']])
			})

			if (user.operationFormRadioYes.checked ==  true) {
				businessData.unshift(['new-bus', true])
				if (data[8].checked) {
					businessData[7] = ['current_status', false]
				} else if (data[7].checked) {
					businessData[7] = ['current_status', true]
				} else {
					businessData[7] = ['current_status', undefined]
				}
				businessData[8] = ['opening_date', data[11].value]
				businessData[9] = ['occupancy_rate', data[12].value]
				if (data[13].checked) {
					businessData[10] = ['reservation_required', true];
				} else if (data[14].checked) {
					businessData[10] = ['reservation_required', false];
				} else {
					businessData[10] = ['reservation_required', undefined];
				}
				businessData[11] = ['business_hours', data[16].value, data[17].value, data[18].value, data[19].value, data[20].value, data[21].value, data[22].value]
				businessData[12] = ['notes', data[15].value] //notes
				businessData[13] = ['user_updated', setLocalDateTime()] //update at *****
			} else {
				let sustainableArray = [];
				if (data[6].checked) {
					sustainableArray = ['sustainable_business', true]
				} else if (data[7].checked) {
					sustainableArray = ['sustainable_business', false]
				} else {
					sustainableArray = ['sustainable_business', undefined]
				}
				businessData.push(sustainableArray);
				businessData.unshift(['new-bus', false])
			}
			postForm(businessData);
			formSubmitted(event);
		}
	}

	/* Validate Form Data Before Submission */
	function checkFormInput(event) {
		event.preventDefault();
		var data = Array.from(event.target.elements)
		var mandatoryEls = []
		var msg;
		if (data[0].id = 'new-review') {
			mandatoryEls = [data[1], data[3], data[4]]
			if (LANGUAGE == 'eng') {
				msg = 'Rating, username, and email address are mandatory fields';
			} else {
				msg = 'La calificación, el nombre de usuario y la dirección de correo electrónico son campos obligatorios';
			}
		} else if (data[0].id = 'new-image') {
			mandatoryEls = [data[1], data[4], data[5]]
			if (LANGUAGE == 'eng') {
				msg = 'URL, username, and email address are mandatory fields';
			} else {
				msg = 'URL, nombre de usuario y dirección de correo electrónico son campos obligatorios';
			}
		} else if (data[0].id = 'bus-edit') {
			mandatoryEls = [data[1], data[2], data[3]]
			if (LANGUAGE == 'eng') {
				msg = 'Content, username, and email address are mandatory fields';
			} else {
				msg = 'El contenido, el nombre de usuario y la dirección de correo electrónico son campos obligatorios';
			}
		} else if (data[0].id = 'bus-flag') {
			mandatoryEls = [data[1], data[3], data[4]];
			if (LANGUAGE == 'eng') {
				msg = 'Content, username, and email address are mandatory fields';
			} else {
				msg = 'El contenido, el nombre de usuario y la dirección de correo electrónico son campos obligatorios';
			}
		} else {
			return;
		}
		var required = checkRequiredInput(mandatoryEls)
		if (required == true) {
			var title;
			LANGUAGE == 'eng' ? title = 'Incomplete Form' : title = 'Forma Incompleta'
			userInputError(`${title}`, `${msg}`)
			required = undefined;
		} else {
			submitForm(event);
		}
	}

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
		if (event.type === 'submit' && event.target.id !== 'js-new-business-form' && event.target.className !== 'admin-form' ) {
			event.preventDefault();
			const busName = getBusNameForAssoForm(event);
			const capitalizedBusName = capitalizeString(busName);
			createPostData(event, capitalizedBusName);
			formSubmitted(event);
		}
	}

	function formSubmitted(event) {
		let submittedEl = document.createElement('p');
		submittedEl.className = 'succMsg'
		setTimeout(function(){
			if (LANGUAGE == 'eng'){
				if (storage.getStorageItem('response') !== false){
					Swal.fire({
						title: 'Thank you for your submission!',
						text: 'It will be added to the directory as soon as it is reviewed!',
						icon: 'success',
						confirmButtonText: 'Close'
					})
				} else {
					Swal.fire({
						title: 'Error: Submission Unsuccessful!',
						icon: 'error',
						confirmButtonText: 'Close'
					})	
				}
			} else {
				if (storage.getStorageItem('response') !== false){
					Swal.fire({
						title: '¡Gracias por tu envío!',
						text: '¡Se agregará al directorio tan pronto como se aprobado!',
						icon: 'success',
						confirmButtonText: 'Cerrar'
					})

				} else {
					Swal.fire({
						title: 'Error ¡Envío fallido!',
						icon: 'error',
						confirmButtonText: 'Cerrar'
					})
				}
			}
			if (event.target.id == 'new-bus-submit') {
				event.target.parentElement.parentElement.reset()
				user.newBusinessForm.style.display = 'none';
				document.getElementById('js-add-business').appendChild(submittedEl);
			} else {
				event.target.reset();
				user.listingMenu.appendChild(submittedEl)
				clearCheckBox();
				event.target.style.display = 'none';
			};
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
		var data = Array.from(event.target.elements)
		data.pop()
		let dataArray = []
		data.forEach(el => {
			dataArray.push([el['id'], el['value']])
		})
		if (event.target.id !== 'new-bus'){
			dataArray.shift()
			dataArray.unshift([event.target.id])
		}
		dataArray.push(['name', busName]);
		postForm(dataArray);
	}

	/* ADMIN LOGIN FUNCTIONS */
	function clearDirectoryForAdminView() {
		document.getElementById('sponsored-listing-container').style.display = 'none';
		document.getElementById('ads-container').style.display = 'none';
		document.getElementById('js-searchbar-container').style.display = 'none';
		document.getElementById('js-admin-login-container').style.display = 'none';
		document.getElementById('js-new-business-container').style.display = 'none';
		document.getElementById('js-admin-panel-container').style.display = 'inline-block';
		document.getElementById('js-admin-menu-container').style.display = 'inline-block';
		document.getElementById('js-admin-logout-button').style.display = 'block';
		document.getElementById('js-admin-login').style.display = 'none';
		user.listingsContainer.style.display = 'none';
		user.hiddenAdminButton.style.display = 'none';
		user.adminPanelLogin.style.display = 'none';

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
			Swal.fire({
				title: 'Admin ONLY',
				text: 'You are not authorized to access administrative tasks!',
				icon: 'warning',
				confirmButtonText: 'Close'
			})
		}
	}

	/* PAGE RESET FUNCTION */
	function resetPage() {
		document.getElementById('mapDiv').innerHTML = "";
		clearCheckBox();
		user.nameRadioSelect.checked = true;
		user.categoryRadioSelect.checked = false;
		user.listingsContainer.style.display = 'none';
		user.listingMenu.style.display = 'none';
		user.businessListings.style.display = 'none';
		const textElements = Array.from(document.querySelectorAll('input[type="text"]'));
		const textareaElements = Array.from(document.querySelectorAll('textarea'));
		textareaElements.concat(textElements).forEach(el => el.value = '')
		document.getElementById('operations-notes').value = '';
		if (document.getElementById('js-admin-password') !== null){
			document.getElementById('js-admin-password').value = '';
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
	document.getElementById('new-bus-submit').addEventListener('click', formatNewBusinessFormData)

	/* Operations Form Event Listener */
	user.operationFormRadioYes.addEventListener('click', toggleOperationForm)
	user.operationFormRadioNo.addEventListener('click', toggleOperationForm)

	/* Form Event Listeners */
	document.addEventListener( 'submit', function(){
		checkFormInput(event);
	});
}
