window.onload = function() {
	globalCats = [];
	globalEntries = [];
	globalAttributes = [];
	globalAllBusinesses = [];
	globalResponse = undefined; /* user only */
	globalResult = []; /* admin only */
	LAT = 20.42;
	LNG = -86.92;

	/* searchbar elements */
	const searchByName = document.getElementById('js-search-by-name');
	const searchByCategory = document.getElementById('js-search-by-category');
	const nameRadioSelect = document.getElementById('js-radio-by-name');
	const categoryRadioSelect = document.getElementById('js-radio-by-category');
	const searchCategoryMenu = document.getElementById('js-search-category-menu');
	const searchNameField = document.getElementById('js-search-name-text-field');

	/* checkbox elements */
	const reviewCheckBox = document.getElementById('js-add-review-checkbox');
	const imageCheckBox = document.getElementById('js-add-image-checkbox');
	const flagCheckBox = document.getElementById('js-flag-business-checkbox');
	const editCheckBox = document.getElementById('js-edit-business-checkbox');

	/* business listing elements */
	const businessListings = document.getElementById('js-listing-show');
	const listingMenu = document.getElementById('js-listing-menu');

	/* add business form elements */
	const newBusinessButton = document.getElementById('js-add-business-button');
	const newBusinessForm = document.getElementById('js-new-business-form');

	/* admin hidden button element */
	const hiddenAdminButton = document.getElementById('js-admin-hidden-button');

	/* admin login panel elements */
	const adminPanelLogin = document.getElementById('js-admin-login-button');

	/* container elements */
	const listingsContainer = document.getElementById('listings-container')

	/* SEARCH FUNCTIONS
	/* Search Bar Toggle Functions */
	function toggleCategoryMenu() {
		listingsContainer.style.display = 'none';
		searchByName.style.display = 'none';
		searchByCategory.style.display = 'block';
		/* prevent redundant calls to api */
		if (globalCats.length === 0) {
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
		const category = document.getElementById('js-category-select').value
		const results = postSearchByCategory(category);
	}

	/* TOGGLE FORM FUNCTIONS */
	function toggleForm(event, el) {
		/**** REFACTOR TOGGLE FORM ***/
		el.firstElementChild.style.display = 'block';
		if (event === 'submit' || el.style.display == 'block') {
			el.style.display = 'none'
		} else {
			el.style.display = 'block'
		}
	}

	function toggleNewBusinessForm() {
		const elFormContainer = document.getElementById('js-add-business-form-container')
		if (elFormContainer.style.display === 'block'){
			elFormContainer.style.display = 'none';
		} else {
			newBusinessForm.style.display = 'block';
			elFormContainer.style.display = 'block';
			if (globalCats .length === 0) {
				collectCategories();
			};
			const categorySelectEl = document.getElementById('cat-select')
			if (categorySelectEl === null) { renderNewBusCatSelect() };
		}
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
			console.log(err.msg);
		}
	}

	function postSearchByName(name) {
		const data = {'name': name}
		const configObj = {
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
			console.log(err.msg);
		}
	}

	function postSearchByCategory(category){
		const data = {'category_name': category}
		const configObj = {
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
			console.log(err.msg);
		}
	}

	function postBusObjToRetrieve(name){
		const data = {'name': name}
		const configObj = {
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
			.then(json => displayBusObj(json))
		}
		catch(err) {
			alert('Post request failed see console for further details!');
			console.log(err.msg);
		}
	}

	function postForm(data) {
		const configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
		};
		try {
		fetch('http://localhost:3000/entries', configObj)
		.then(resp => {
			return resp.json();
		})
		.then(json => globalResponse = json)
		}
		catch(err) {
			alert('Post request failed see console for further details!');
			console.log(err.msg);
		}
	}

	/* RESULTS FUNCTIONS */
	/* Search Results functions */
	function storeCategories(data){
		const categoryObjects = Array.from(data);
		globalCats = categoryObjects.map((el) => {
			return el['name']
		})
	}

	function returnResults(data){
		if (data['msg'] !== undefined) {
			appendErrorMsg(data['msg']);
		} else {
			data = Array.from(data)
			renderIndex(data)
		}
	}

	function displayBusObj(data){
		renderListing(buildListing(data));
	}

	function buildListing(data){
		let objArray = []
		const busObj = Business.buildBusObj(data);
		let map;
		if (data['map']) {
			map = GoogleMap.mapBuilder(data['map'])
		} else { map = [] }
		const imagesCollection = Image.imagesBuilder(data['images']);
		const reviewsCollection = Review.reviewsBuilder(data['reviews']);
		objArray.push(busObj, map, imagesCollection, reviewsCollection)
		return objArray;
	}

	function renderListing(objArray){
		if (objArray != undefined) {
			let el = businessListings;
			el.innerHTML = '';
			const busHTML = objArray[0].renderBusListing();
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
		const errorMsg = document.createElement('p');
		errorMsg.innerHTML = `${msg}`
		businessListings.appendChild(errorMsg);
		businessListings.style.display = 'block';
	}

	/* Instance builder functions */
	function checkDuplicate(busName) {
		const allNames = globalALLBusinesses.map(el => el.name)
		const duplicate = allNames.includes(busName)
		return duplicate;
	}

	/* Render functions */
	function renderCategoriesMenu() {
		if (searchCategoryMenu.children.length === 0 ){
			let catMenu = document.createElement('div');
			let html = '<select id= "js-category-select">';
			const cats = globalCats.map((el) => {
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
	function renderNewBusCatSelect(){
		const newBusCatSelectEl = document.getElementById('js-new-bus-select-label');
		if (globalCats .length == 0){
			collectCategories();
		}
		let catMenu = document.createElement('div');
		let html = '<select id="cat-select" multiple>';
		const cats = globalCats.map((el) => {
			return `<option value='${el}'> ${el} </option>`;
		})
		html += cats + '</select>';
		catMenu.innerHTML = html;
		newBusCatSelectEl.appendChild(catMenu)
	};

	/* Retrieve Bus Name From DOM for Associated Form */
	/* works for new bus form and all other forms */
	function getBusNameForAssoForm(event){
		let busName = '';
		if (event.target[0].id === 'new-bus'){
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
			if (globalResponse === true){
				submittedEl.innerHTML = 'Thank you for your submission!'
				submittedEl.innerHTML += '<br>' + 'New data will be added to the directory upon review!';
			} else {
				submittedEl.innerHTML = 'Submission Unsuccessful!';
			}
			event.target.reset();
			if (event.originalTarget[0].id === 'new-bus'){
				document.getElementById('js-add-business').appendChild(submittedEl);
			} else {
				listingMenu.appendChild(submittedEl)
				clearCheckBox();
			}
			event.target.style.display = 'none';
		}, 250)
	}

	function clearCheckBox(){
		reviewCheckBox.checked = false;
		imageCheckBox.checked = false;
		flagCheckBox.checked = false;
		editCheckBox.checked = false;
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
	function clearDirectoryForAdminView(){
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
		listingsContainer.style.display = 'none';
		newBusContainer.style.display = 'none';
		hiddenAdminButton.style.display = 'none';
		adminPanel.style.display = 'block';
		adminMenu.style.display = 'block';
		adminPanelLogin.style.display = 'none';
		adminPanelLogout.style.display = 'block';
		adminPanelForm.style.display = 'none';
		adminUserInfo.style.display = 'block';
	}

	function loggedIn() {
		return true;
		/* check for token value? */
	}

	function postLogIn(data){
		const configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'origin': 'http:localhost:3000'
		},
		body: JSON.stringify(data)
	};
	try {
		fetch('http://localhost:3000/admin_token', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(json => console.log(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(err.message);
		}
	}

	function logInAdmin(){
		const usernameVal = document.getElementById('js-admin-username').value.trim();
		const passwordVal = document.getElementById('js-admin-password').value.trim();
		data = {"auth": {"username": usernameVal, "password": passwordVal}}
		postLogIn(data);
		if (loggedIn() === true){
			clearDirectoryForAdminView();
			adminInterface.launchAdminInterface();
		} else {
			alert('You are not authorized to access admininstrative tasks!')
		}
	}

	/* PAGE RESET FUNCTION */
	function resetPage() {
		const mapContainer = document.getElementById('js-map');
		clearCheckBox();
		nameRadioSelect.checked = true;
		categoryRadioSelect.checked = false;
		listingsContainer.style.display = 'none';
		listingMenu.style.display = 'none';
		mapContainer.style.display = 'none';
		businessListings.style.display = 'none';
		const elements = document.querySelectorAll('input[type="text"]');
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
		const el = document.getElementById('js-add-review-form-container')
		toggleForm('checkbox', el);
	})

	imageCheckBox.addEventListener('change', function() {
		const el = document.getElementById('js-add-image-form-container')
	 	toggleForm('checkbox', el);
	})

	flagCheckBox.addEventListener('change', function() {
		const el = document.getElementById('js-flag-business-form-container')
	 	toggleForm('checkbox', el);
	})

	editCheckBox.addEventListener('change', function() {
		const el = document.getElementById('js-suggest-edit-form-container')
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
		const el = document.getElementById('js-admin-login-container')
		toggleForm('click', el);
	})
	adminPanelLogin.addEventListener('click', logInAdmin);

	/* SET PAGE LOAD VALUES */
	resetPage();
	adminInterface.resetAdmin();
}
