	// User Variables
	function userVar(){
		return {
			/* searchbar elements */
			searchByName: document.getElementById('js-search-by-name'),
			searchByCategory: document.getElementById('js-search-by-category'),
			nameRadioSelect: document.getElementById('js-radio-by-name'),
			categoryRadioSelect: document.getElementById('js-radio-by-category'),
			searchCategoryMenu: document.getElementById('js-search-category-menu'),
			searchNameField: document.getElementById('js-search-name-text-field'),

			/* checkbox elements */
			reviewCheckBox: document.getElementById('js-add-review-checkbox'),
			imageCheckBox: document.getElementById('js-add-image-checkbox'),
			flagCheckBox: document.getElementById('js-flag-business-checkbox'),
			editCheckBox: document.getElementById('js-edit-business-checkbox'),

			/* business listing elements */
			businessListings: document.getElementById('js-listing-show'),
			resultsListings: document.getElementById('js-listing-show-results'),
			listingMenu: document.getElementById('js-listing-menu'),

			/* add business form elements */
			newBusinessButton: document.getElementById('js-add-business-button'),
			newBusinessForm: document.getElementById('js-new-business-form'),
			operationFormRadioYes:  document.getElementById('js-add-operation-yes'),
			operationFormRadioNo: document.getElementById('js-add-operation-no'),
			operationStatusYes: document.getElementById('js-current-status-yes'),
			operationStatusNo: document.getElementById('js-current-status-no'),
			openingDate: document.getElementById('js-bus-form-reopen-date'),

			/* admin hidden button element */
			hiddenAdminButton: document.getElementById('js-admin-hidden-button'),

			/* admin login panel elements */
			adminPanelLogin: document.getElementById('js-admin-login-button'),

			/* container elements */
			listingsContainer: document.getElementById('listings-container')
		}
	}

	export { userVar };