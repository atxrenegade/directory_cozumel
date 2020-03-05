function adminVariables() {
	const loginContainer = document.getElementById('js-admin-login-container')
	const tableContainer = document.getElementById('js-admin-panel-container')

	/* admin details table elements */
	const smResolvedIndexButton = document.getElementById('admin-resolved-index-button')
	const smPendingIndexButton = document.getElementById('admin-pending-index-button')
	const rejectButton = document.getElementById('admin-reject-button')
	const approveButton = document.getElementById('admin-approve-button')
	const addNotesButton = document.getElementById('admin-notes-button')
	const newNotesSubmitButton = document.getElementById('admin-submit-notes-field')
	const superAdminMenuButton = document.getElementById('js-admin-show-super-admin')
	/* super admin auth panel elements */
	const createAdminButton = document.getElementById('js-admin-create-admin')
	const editAdminButton = document.getElementById('js-admin-edit-admin')
	const deleteAdminButton = document.getElementById('js-admin-delete-admin')
	/* admin entry details panel elements */
	const bigPendingIndexButton = document.getElementById('admin-show-pending-button')
	const bigResolvedIndexButton = document.getElementById('admin-show-resolved-button')
	const searchButton = document.getElementById('js-admin-search-entries')

	/* super admin CRUD panel elements */
	const superAdminCRUDMenu = document.getElementById('js-super-admin-modify-menu')

	/* admin login/logout elements */
	const logoutButton = document.getElementById('js-admin-logout-button')

	/* elements to reset on admin logout */
	const superAdminPanel = document.getElementById('js-admin-super-admin-open')
	const indexTable = document.getElementById('admin-entry-table');
	const detailsTable = document.getElementById('entry-details-tables');
	const notesForm = document.getElementById('admin-notes-form')
	const entryNotes = document.getElementById('js-entry-notes')
}
