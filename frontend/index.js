
window.onload = function() {

/* Search Bar Toggle Functions */
	function toggleCategoryMenu() {
		let searchByName = document.getElementById('js-search-by-name')
		searchByName.style.display = 'none';
		let searchByCategory = document.getElementById('js-search-by-category')
		searchByCategory.style.display = 'block';
	}

	function toggleNameMenu() {
		let searchByName = document.getElementById('js-search-by-name');
		searchByName.style.display = 'block';
		let searchByCategory = document.getElementById('js-search-by-category');
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
	let searchByName = document.getElementById('js-by-name-button');
	searchByName.addEventListener("click", busNameSearch(event));

	let nameRadioSelect = document.getElementById('js-radio-by-name');
	nameRadioSelect.addEventListener("click", toggleNameMenu);

	let categoryRadioSelect = document.getElementById('js-radio-by-category');
	categoryRadioSelect.addEventListener("click", toggleCategoryMenu);

/* Business Listings Checkbox Listeners */
	let reviewCheckBox = document.getElementById('js-add-review-checkbox');
	reviewCheckBox.addEventListener("change", toggleReviewForm);

	let imageCheckBox = document.getElementById('js-add-image-checkbox');
	imageCheckBox.addEventListener("change", toggleImageForm);

	let flagCheckBox = document.getElementById('js-flag-business-checkbox');
	flagCheckBox.addEventListener("change", toggleFlagForm);

	let editCheckBox = document.getElementById('js-edit-business-checkbox');
	editCheckBox.addEventListener("change", toggleEditForm);



/* New Business Form Listener */
	let newBusinessButton = document.getElementById('js-add-button');
	newBusinessButton.addEventListener("click", toggleNewBusinessForm);

/* Admin Panel Listeners */
	let hiddenAdminButton = document.getElementById('js-admin-hidden-button');
	hiddenAdminButton.addEventListener("click", toggleAdminLogIn);

	let adminPanelLogin = document.getElementById('js-admin-login-button');
	adminPanelLogin.addEventListener("click", toggleAdminPanel);

/* Clear Form to set initial state */
	function resetForm() {
	  document.getElementById('js-add-review-checkbox').checked = false;
		document.getElementById('js-add-image-checkbox').checked = false;
		document.getElementById('js-edit-business-checkbox').checked = false;
		document.getElementById('js-flag-business-checkbox').checked = false;
		document.getElementById('js-radio-by-name').checked = true;
		document.getElementById('js-radio-by-category').checked = false;
		document.getElementById('js-search-name-text-field').value = '';
		document.getElementById('js-search-category-text-field').value = '';
	}
	resetForm();
}
