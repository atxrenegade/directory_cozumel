	// Admin Variables
	function adminVar() {
		return {
			loginContainer: document.getElementById('js-admin-login-container'),
			tableContainer: document.getElementById('js-admin-panel-container'),

			/* admin details table elements */
			 smResolvedIndexButton: document.getElementById('admin-resolved-index-button'),
			 smPendingIndexButton: document.getElementById('admin-pending-index-button'),
			 rejectButton: document.getElementById('admin-reject-button'),
			 approveButton: document.getElementById('admin-approve-button'),
			 addNotesButton: document.getElementById('admin-notes-button'),
			 newNotesSubmitButton: document.getElementById('admin-submit-notes-field'),
			 superAdminMenuButton: document.getElementById('js-admin-show-super-admin'),
			/* super admin auth panel elements */
			 createAdminButton: document.getElementById('js-admin-create-admin'),
			 editAdminButton: document.getElementById('js-admin-edit-admin'),
			 deleteAdminButton: document.getElementById('js-admin-delete-admin'),
			/* admin entry details panel elements */
			 bigPendingIndexButton: document.getElementById('admin-show-pending-button'),
			 bigResolvedIndexButton: document.getElementById('admin-show-resolved-button'),
			 searchButton: document.getElementById('js-admin-search-entries'),

			/* super admin CRUD panel elements */
			 superAdminCRUDMenu: document.getElementById('js-super-admin-modify-menu'),

			/* admin login/logout elements */
			 logoutButton: document.getElementById('js-admin-logout-button'),

			/* elements to reset on admin logout */
			 superAdminPanel: document.getElementById('js-admin-super-admin-open'),
			 indexTable: document.getElementById('admin-entry-table'),
			 detailsTable: document.getElementById('entry-details-tables'),
			 notesForm: document.getElementById('admin-notes-form'),
			 entryNotes: document.getElementById('js-entry-notes')
			}
		}

		export { adminVar };
