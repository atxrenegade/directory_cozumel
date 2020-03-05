function userVariables() {
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

	return { searchByName: searchByName, searchByCategory: searchByCategory, nameRadioSelect: nameRadioSelect, categoryRadioSelect: categoryRadioSelect, searchCategoryMenu: searchCategoryMenu, searchNameField: searchNameField, reviewCheckBox: reviewCheckBox, imageCheckBox: imageCheckBox, flagCheckBox: flagCheckBox, editCheckBox: editCheckBox, businessListings: businessListings, listingMenu: listingMenu, newBusinessButton: newBusinessButton, newBusinessForm: newBusinessForm, hiddenAdminButton: hiddenAdminButton, adminPanelLogin: adminPanelLogin, listingsContainer: listingsContainer };
}
