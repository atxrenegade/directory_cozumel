
window.onload = function() {
/* Search Menu Buttons */

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

	/* Check box toggle forms functions */
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

	function toggleAdminLogIn() {
		$('#js-admin-login-container').toggle();
	}

	function toggleAdminPanel() {
		$('#js-admin-panel').toggle();
	}

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
	let searchByName = document.getElementById('js-by-name-button');
	searchByName.addEventListener("click", busNameSearch(event));

	let nameRadioSelect = document.getElementById('js-by-name');
	nameRadioSelect.addEventListener("click", toggleNameMenu);

	let categoryRadioSelect = document.getElementById('js-by-category');
	categoryRadioSelect.addEventListener("click", toggleCategoryMenu);

	let reviewCheckBox = document.getElementById('js-add-review-checkbox');
	reviewCheckBox.addEventListener("change", toggleReviewForm);

	let imageCheckBox = document.getElementById('js-add-image-checkbox');
	imageCheckBox.addEventListener("change", toggleImageForm);

	let flagCheckBox = document.getElementById('js-flag-business-checkbox');
	flagCheckBox.addEventListener("change", toggleFlagForm);

	let editCheckBox = document.getElementById('js-edit-business-checkbox');
	editCheckBox.addEventListener("change", toggleEditForm);

	let newBusinessButton = document.getElementById('js-add-button');
	newBusinessButton.addEventListener("click", toggleNewBusinessForm);

	let hiddenAdminButton = document.getElementById('js-admin-hidden-button');
	hiddenAdminButton.addEventListener("click", toggleAdminLogIn);

	let adminPanelLogin = document.getElementById('js-admin-login-button');
	adminPanelLogin.addEvenListener("click", toggleAdminPanel);

}
