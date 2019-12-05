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

	/* admin hidden button element */
	let hiddenAdminButton = document.getElementById('js-admin-hidden-button');

	/* admin login panel elements */
	let adminPanelLogin = document.getElementById('js-admin-login-button');
	let adminUsernameField = document.getElementById('js-admin-username')
	let adminPasswordField = document.getElementById('js-admin-password')

	/* Search Bar Toggle Functions */
	function toggleCategoryMenu() {
		searchByName.style.display = 'none';
		searchByCategory.style.display = 'block';
	}

	function toggleNameMenu() {
		searchByName.style.display = 'block';
		searchByCategory.style.display = 'none';
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

	/* Search Bar API request functions */
	function busNameSearch(event) {
		try {
			event.preventDefault();
			url = 'http://localhost/3000/index_all'
			fetch(url)
			.then(resp => resp.json())
			.then(json => console.log(json))
		}
		catch(err) {
			console.log(error.message);
		}
	}

	/* Admin Panel functions */
	function toggleAdminLogIn() {
		$('#js-admin-login-container').toggle();
	}

	function toggleAdminPanel(username, password) {
		logInAdmin(username, password);
		if (loggedIn === true) {
			$('#js-admin-panel').toggle();
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
	adminPanelLogin.addEventListener("click", toggleAdminPanel);

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
	}
	resetPage();
}
