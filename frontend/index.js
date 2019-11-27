
window.onload = function() {
/* Search Menu Buttons */

	function toggleCategoryMenu() {
		let searchByName = document.getElementById('searchByName')
		searchByName.style.display = 'none';
		let searchByCategory = document.getElementById('searchByCategory')
		searchByCategory.style.display = 'block';
	}

	function toggleNameMenu() {
		let searchByName = document.getElementById('searchByName');
		searchByName.style.display = 'block';
		let searchByCategory = document.getElementById('searchByCategory');
		searchByCategory.style.display = 'none';
	}

	/* Check box toggle forms functions */
	function toggleReviewForm() {
		$('#add-review-form-container').toggle();
	}

	function toggleImageForm() {
		$('#add-image-form-container').toggle();
	}

	function toggleEditForm() {
		$('#suggest-edit-form-container').toggle();
	}

	function toggleFlagForm() {
		$('#flag-business-form-container').toggle();
	}

	function toggleNewBusinessForm() {
		$('#add-business-form-container').toggle();
	}

	let nameRadioSelect = document.getElementById('byName');
	nameRadioSelect.addEventListener("click", toggleNameMenu);

	let categoryRadioSelect = document.getElementById('byCategory');
	categoryRadioSelect.addEventListener("click", toggleCategoryMenu);

	let reviewCheckBox = document.getElementById('add-review-checkbox');
	reviewCheckBox.addEventListener("change", toggleReviewForm);

	let imageCheckBox = document.getElementById('add-image-checkbox');
	imageCheckBox.addEventListener("change", toggleImageForm);

	let flagCheckBox = document.getElementById('flag-business-checkbox');
	flagCheckBox.addEventListener("change", toggleFlagForm);

	let editCheckBox = document.getElementById('edit-business-checkbox');
	editCheckBox.addEventListener("change", toggleEditForm);

	let newBusinessButton = document.getElementById('add-button');
	newBusinessButton.addEventListener("click", toggleNewBusinessForm);

}
