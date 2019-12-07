window.onload = function() {
	/* searchbar elements */
	let searchByName = document.getElementById('js-search-by-name');
	let searchByCategory = document.getElementById('js-search-by-category');
	let nameRadioSelect = document.getElementById('js-radio-by-name');
	let categoryRadioSelect = document.getElementById('js-radio-by-category');
	let searchNameField = document.getElementById('js-search-name-text-field')
	let searchCategoryField = document.getElementById('js-search-category-text-field')

	/* checkbox elements */
	let reviewCheckBox = document.getElementById('js-add-review-checkbox');
	let imageCheckBox = document.getElementById('js-add-image-checkbox');
	let flagCheckBox = document.getElementById('js-flag-business-checkbox');
	let editCheckBox = document.getElementById('js-edit-business-checkbox');

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
		let cats = collectCategories();
		console.log(cats)
	}

	function toggleNameMenu() {
		searchByName.style.display = 'block';
		searchByCategory.style.display = 'none';
	}

	function renderCategories(data) {
		let categoryObjects = Array.from(data);
		let categoryNames = categoryObjects.map((el) => {
			return el["name"]
		})
		renderCategoriesMenu(categoryNames)
	}

	function renderCategoriesMenu(categoriesNames) {
		console.log(categoriesNames)
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
	function busNameSearch(event) {
		try {
			url = 'http://localhost:3000/businesses'
			fetch(url)
			.then(resp => resp.json())
			.then(json => console.log(json))
		}
		catch(err) {
			console.log(error.message);
		}
	}

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
	searchByName.addEventListener("click", busNameSearch(event));
	nameRadioSelect.addEventListener("click", toggleNameMenu);
	categoryRadioSelect.addEventListener("click", toggleCategoryMenu);

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
		searchCategoryField.value = '';
		adminUsernameField.value = '';
		adminPasswordField.value = '';
		newBusForm.reset();
	}
	resetPage();
}
