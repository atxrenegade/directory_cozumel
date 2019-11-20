
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

	let nameRadioSelect = document.getElementById('byName');
	nameRadioSelect.addEventListener("click", toggleNameMenu);

	let categoryRadioSelect = document.getElementById('byCategory');
	categoryRadioSelect.addEventListener("click", toggleCategoryMenu);
}
