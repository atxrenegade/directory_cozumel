

/* Search Menu Buttons */
function toggleSearchMenus() {
	function toggleSearchMenus() {
		$( "#search_by_name" ).toggle()
		$( "#search_by_category" ).toggle()
	}
}

let byNameRadioSelect = document.getElementById("byName")
byNameRadioSelect.addEventListener('click', toggleSearchMenus)

let byCategoryRadioSelect = document.getElementById("byCategory")
byCategoryRadioSelect.addEventListener('click', toggleSearchMenus)
