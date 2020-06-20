	function launchAdminInterface(user, admin, adminFetch, storage){
		resetAdmin();

		/* Event Listeners */
		/* Admin panel menu buttons */
		admin.bigPendingIndexButton.addEventListener('click', function() {
			indexButtonAction('pending');
		})

		admin.bigResolvedIndexButton.addEventListener('click', function() {
			indexButtonAction('resolved');
		})

		admin.searchButton.addEventListener('click', function(){
			event.preventDefault();
			const searchVal = event.target.parentNode[8].value;
			if (searchVal == true){
				admin.tableContainer.style.display = 'block';
				const propertyToSearch = getRadioVal(event);
				const entries = adminFetch.searchEntries(event, propertyToSearch, searchVal);
				setTimeout(renderIndex.bind(null, 'SEARCH'), 800);
			} else {
				alert('Enter search value!');
			}
		})

		/* Super Admin Menu Toggle Button */
		admin.superAdminMenuButton.addEventListener('click', function() {
			const role = checkAdminAuth();
			if (role === 'super') {
				const el = document.getElementById('js-admin-super-admin-open');
				toggleElement(el);
			} else {
				alert('You are not authorized for Super Admin Functions!')
			}
		})

		admin.createAdminButton.addEventListener('click', function(){ alert('Coming Soon!')})

		admin.editAdminButton.addEventListener('click', function(){ alert('Coming Soon!')})

		admin.deleteAdminButton.addEventListener('click', function(){ alert('Coming Soon!')})

		/* Detailed Entry Panel Buttons */
		admin.addNotesButton.addEventListener('click', showNotesForm);

		admin.newNotesSubmitButton.addEventListener('click', addNotes);

		admin.rejectButton.addEventListener('click', function(event) {
			rejectEntry(event);
		})

		admin.approveButton.addEventListener('click', function(event) {
			approveEntry(event);
		})

		admin.smPendingIndexButton.addEventListener('click', function() {
			indexButtonAction('pending');
		})

		admin.smResolvedIndexButton.addEventListener('click', function() {
			indexButtonAction('resolved');
		})

		admin.superAdminCRUDMenu.addEventListener('click', function() {
			event.preventDefault();
			if (admin.superAdminCRUDMenu.innerText === 'DISPLAY FORM') {
				const radVals = getRadioVal(event);
				const elToAppendTo = document.getElementById('super-admin-create-update-delete')
				buildCRUDforms(event, radVals, elToAppendTo)
				admin.superAdminCRUDMenu.innerText = 'HIDE FORM';
			} else if (admin.superAdminCRUDMenu.innerText === 'HIDE FORM'){
				admin.superAdminCRUDMenu.innerText = 'DISPLAY FORM';
				document.getElementById('super-admin-create-update-delete').innerHTML = '';
			} else {
				console.log('Button error!')
			}
		})

		admin.logoutButton.addEventListener('click', function(){
			 location.reload(true)
		});


		function getFormattedDateTime() {
			const date = new Date();
			const localDate = date.toDateString()
			const time = date.toLocaleTimeString();
			const formattedDateTime = localDate + " " + time;
			return formattedDateTime;
		}

		function appendCurrentDateTime(elToAppendTo){
			let timeDateEl = document.createElement('span');
			const timeDate = getFormattedDateTime();
			timeDateEl.innerText = timeDate;
			elToAppendTo.appendChild(timeDateEl);
		}

		function appendAdminUserDetails() {
			const adminLoginDate = document.getElementById('admin-login-date');
			const adminIdValue = document.getElementById('admin-number');
			const adminUsernameValue = document.getElementById('admin-name');
			const adminRoleValue = document.getElementById('admin-role');
			appendCurrentDateTime(adminLoginDate);
			adminIdValue.innerText = `Admin ID: ${sessionStorage['adminId']}`;
			adminUsernameValue.innerText = `Admin Username: ${sessionStorage['adminName']}`;
			adminRoleValue.innerText = `Admin Role: ${sessionStorage['adminRole']}`;
		}

		function resetAdmin() {
			admin.superAdminPanel.style.display = 'none';
			admin.tableContainer.style.display = 'none';
			admin.indexTable.style.display = 'none';
			admin.detailsTable.style.display = 'none';
			admin.notesForm.style.display = 'none';
		  admin.entryNotes.value = '';
			admin.tableContainer.style.display = 'none';
			admin.loginContainer.classList.add('admin');
			appendAdminUserDetails();
		}

 /* ADMIN INTERFACE METHODS */
		function buildCRUDforms(event, radVals, elToAppendTo){
			const [formAction, dbType] = radVals;
			let formData;

			switch (formAction) {
				case 'create':
					adminFetch.getAttributes(dbType)
					setTimeout(buildNewForm.bind(null, formAction, dbType, elToAppendTo)
					, 800)
					break;
				case 'update':
					setTimeout(resetCRUDForm, 300);
					alert('Work In Progress!')
					break;
				case 'delete':
					buildCRUDDelete(event, formAction, dbType, elToAppendTo)
					break;
				default:
					error: 'Action not understood!'
			}
		}

		function buildCRUDDelete(event, formAction, dbType, elToAppendTo){
			let formData;
			if (dbType === 'categories' || dbType === 'entries') {
				formData = {id: 'js-super-admin-CRUD-instance-id', labelValue:`ID of ${dbType.toUpperCase()} record to ${formAction.toUpperCase()} `, el: elToAppendTo, action: formAction, searchType: 'id', dbType: dbType, callback: adminFetch.findRecordToDelete}
			} else {
				const callback = adminFetch.searchIdByName;
				formData = {id: 'js-super-admin-CRUD-instance-name', labelValue:`ASSOCIATED BUSINESS NAME of ${dbType.toUpperCase()} record ‹‹to UPDATE or DELETE`, el: elToAppendTo, action: formAction,  searchType: 'businesses', dbType, callback}
			}
			buildFindInstanceForm(formData);
			if (storage.getStorageItem('result') !== false) {
				let businessId = storage.getStorageItem('result');
				setTimeout(adminFetch.getAssociatedRecords.bind(null, dbType, businessId), 1000)
				const newElToAppendTo = document.getElementById('super-admin-create-update-delete')
				let msg;
				storage.getStorageItem('result') === false ? storage.updateOrCreateStorage('result', 'No Records Match Your Query') : storage.getStorageItem('result')
				setTimeout(displayResults.bind(null, newElToAppendTo, storage.getStorageItem('result')), 500)
				setTimeout(appendIdFormForAssoc.bind(null, dbType), 1000)
			}
		}

		function indexButtonAction(status) {
			const authType = checkAdminAuth();
			const entries = adminFetch.buildEntriesIndexPostReq(status, authType);
			setTimeout(renderIndex.bind(null, status), 1000);
		}

		function toggleElement(el) {
			el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none'
		}

		function displayIndex(){
			const indexBody = document.getElementById('index-entry-table-body');
			const indexTable = document.getElementById('admin-entry-table');
			const detailsTable = document.getElementById('entry-details-tables');
			indexBody.innerHTML = '';
			detailsTable.style.display = 'none';
			indexTable.style.display = 'block';
			admin.tableContainer.style.display = 'block';
		}

		function getAdminId() {
			let adminId;
			return adminId = sessionStorage['adminId'];
		}

		function getRadioVal(event) {
			const radioTarget = event.target.parentNode.elements
			const radios = Array.from(radioTarget);
			let radValues = [];
			radios.forEach(el => {
	      if (el.checked) radValues.push(el.value);
	  	})
			return radValues
		}

		function renderIndex(indexType) {
			displayIndex();
			generateEntryTable(indexType);
		}

		function generateEntryTable(indexType) {
			document.getElementById('detailed-entry-table-1').innerHTML = '';
			document.getElementById('detailed-entry-table-2').innerHTML = '';
			document.getElementById('detailed-entry-table-3').innerHTML = '';
			if (storage.getStorageItem('entries') !== false ) {
				const indexBody = document.getElementById('index-entry-table-body');
				indexBody.innerHTML = '';
				let i = 0;
				let entries = storage.getStorageItem('entries');
				entries.forEach(function(el, indexType) {
					let row = indexBody.insertRow(i);
					let cell1 = row.insertCell(0);
					let cell2 = row.insertCell(1);
					let cell3 = row.insertCell(2);
					let cell4 = row.insertCell(3);
					let cell5 = row.insertCell(4);
					let cell6 = row.insertCell(5);
					let cell7 = row.insertCell(6);
					let cell8 = row.insertCell(7);
					let cell9 = row.insertCell(8);
					cell1.innerHTML = el.id;
					cell2.innerHTML = el.dateCreated;
					cell3.innerHTML = el.busId;
					cell4.innerHTML = el.entryType;
					cell5.innerHTML = el.dataObject;
					cell6.innerHTML = el.adminId;
					cell7.innerHTML = el.status;
					cell8.innerHTML = el.notes;
					const button = buildAdminButton(el.id);
					cell9.appendChild(button)
					i += 1;
				})
			}	else {
				const noEntries = document.createElement('p')
				noEntries.innerHTML = `No ${indexType.toUpperCase()} results at this time!`
				noEntries.id = 'admin-no-entry-message'
				const adminTable = document.getElementById('admin-entry-table');
				adminTable.appendChild(noEntries);
				document.addEventListener('click', function(){
					const noEntries = document.getElementById('admin-no-entry-message')
					if (noEntries !== null){
						document.getElementById('admin-entry-table').removeChild(noEntries)
						document.getElementById('js-admin-panel-container').style.display = 'none';
					}
				})
			}
		}

		function buildAdminButton(id) {
			const newButton = document.createElement('input');
			newButton.id = `admin_entry_${id}`;
			newButton.type = 'button';
			newButton.class = 'admin-details-button';
			newButton.value = 'Review';
			newButton.addEventListener('click', displayDetails);
			return newButton;
		}

		function displayDetails() {
			const indexTable = document.getElementById('admin-entry-table');
			const detailsTable = document.getElementById('entry-details-tables');
			indexTable.style.display = 'none';
			detailsTable.style.display = 'block';
			generateDetailedEntryTable(event);
		}

		function generateDetailedEntryTable(event) {
			const id = event.target.parentNode.parentElement.firstChild.textContent;
			const entries = storage.getStorageItem('entries');
			const entry = entries.find(obj => obj.id === parseInt(id, 10));
			const entryTable1 = document.getElementById('detailed-entry-table-1');
			let row1 = entryTable1.insertRow(0);
			let cell1 = row1.insertCell(0);
			let cell2 = row1.insertCell(1);
			let cell3 = row1.insertCell(2);
			let cell4 = row1.insertCell(3);
			let cell5 = row1.insertCell(4);
			cell1.innerHTML = entry.id;
			cell2.innerHTML = entry.dateCreated;
			cell3.innerHTML = entry.busId;
			cell4.innerHTML = entry.busName;
			cell5.innerHTML = entry.entryType;
			const entryTable2 = document.getElementById('detailed-entry-table-2')
			let row2 = entryTable2.insertRow(0);
			let cell6 = row2.insertCell(0);
			let cell7 = row2.insertCell(1);
			let cell8 = row2.insertCell(2);
			cell6.innerHTML = entry.contributor;
			cell7.innerHTML = entry.contributorEmail;
			cell8.innerHTML = entry.dataObject;
			const entryTable3 = document.getElementById('detailed-entry-table-3')
			let row3 = entryTable3.insertRow(0);
			let cell9 = row3.insertCell(0);
			let cell10 = row3.insertCell(1);
			let cell11 = row3.insertCell(2);
			let cell12 = row3.insertCell(3);
			cell9.innerHTML = entry.adminId;
			cell10.innerHTML = entry.status;
			cell11.innerHTML = entry.resolvedDate;
			cell12.innerHTML = entry.notes;
			if (entry.status == 'pending') {
				document.getElementById('admin-approve-button').style.display = 'inline-block';
				document.getElementById('admin-reject-button').style.display = 'inline-block';
			} else {
				document.getElementById('admin-approve-button').style.display = 'none';
				document.getElementById('admin-reject-button').style.display = 'none';
			}
		}

		function showNotesForm() {
			const notesForm = document.getElementById('admin-notes-form')
			notesForm.style.display = 'block';
		}

		function addNotes() {
			const id = document.getElementById('detailed-entry-table-1').lastChild.children[0].innerText
			const entryId = parseInt(id, 10);
			const notes = document.getElementById('js-entry-notes').value
			const adminId = document.getElementById('detailed-entry-table-3').lastChild.firstChild.textContent
			const date = getFormattedDateTime();
			const note = document.getElementById('detailed-entry-table-3').lastChild.lastChild.innerText
			const newNote = `[${date.toString()}]:[AdminId:${adminId}]:[${notes}]`
			const allNotes = `${note}***`+ ` ${newNote}`;
			const data = { id: entryId, admin_id: adminId, notes: allNotes }
			adminFetch.postEntryUpdate(data);
			const noteCell = document.getElementById('detailed-entry-table-3').lastChild.lastChild
			updateCell(noteCell, allNotes)
			const notesForm = document.getElementById('admin-notes-form')
			notesForm.style.display = 'none';
			document.getElementById('js-entry-notes').value = '';
		}

		function updateCell(cell, tableData) {
			cell.innerText = tableData;
		}

		function rejectEntry(event) {
			const status = 'rejected';
			const data = getEntryData(status, event);
			adminFetch.postEntryUpdate(data);
			if (storage.getStorageItem('response').msg == "Entry Successfully Updated"){
				updateEntryView(event, data);
			}
		}

		function approveEntry(event) {
			const status = 'approved';
			const data = getEntryData(status, event);
			adminFetch.postDatabaseObject(data);
			setTimeout(function(){
				if (storage.getStorageItem('result').msg === 'Object Saved'){
					adminFetch.postEntryUpdate(data);
					if (storage.getStorageItem('response').msg == "Entry Successfully Updated"){
						updateEntryView(event, data);
					}
				} else {
					alert('Approval Failed see console for Details');
					console.log(storage.getStorageItem('result').msg);
				}
			}, 1000)
		}

		function updateEntryView(event, data){
			setTimeout(function() {
				if (storage.getStorageItem('result').msg === 'Entry Successfully Updated') {
					displayResolved(data['admin_id'], data['resolved_date'], data['status']);
					document.getElementById('admin-approve-button').style.display = 'none';
					document.getElementById('admin-reject-button').style.display = 'none';
				}
				debugger;
			console.log(storage.getStorageItem('result').msg)
			}, 1500)
		}

		function displayResolved(adminId, resolvedDate, status) {
			const adminIdEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[0];
			const resolvedDateEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[2];
			const statusEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[1];
			const cellDataArray = [[adminIdEl, adminId], [resolvedDateEl, resolvedDate],[statusEl, status]]
			cellDataArray.forEach( el => updateCell(el[0], el[1]))
		}

		function getEntryData(status, event) {
			const adminId = getAdminId();
			const resolvedDate = getFormattedDateTime();
			const entryId = document.getElementById('detailed-entry-table-1').lastChild.firstChild.textContent;
			let data;
			if (status === 'approved') {
				const objectEl = document.getElementById('detailed-entry-table-2')
				const dataObject = objectEl.lastElementChild.lastElementChild.textContent;
				data = {id: entryId, resolved_date: resolvedDate, admin_id: adminId, data_object: dataObject, status}
			} else {
				data = {id: entryId, resolved_date: resolvedDate, admin_id: adminId, status}
			}
			return data;
		}

		function entryUpdateSuccess() {
			const updateSuccess = document.createElement('h4');
			updateSuccess.innerText = 'Entry Successfully Updated'
			detailsTable.appendChild('updateSuccess');
		}

		/* Dynamic Admin Forms Creation */
		function buildNewForm(action, dbType, elToAppendTo) {
			const formEl = document.createElement('form');
			const formFieldSet = document.createElement('fieldset');
			const formLegend = document.createElement('legend');
			let formElements;
			formLegend.innerHTML = `${action.toUpperCase()} ${dbType.toUpperCase()}`
			elToAppendTo.appendChild(formEl);
			formEl.appendChild(formFieldSet);
			formFieldSet.appendChild(formLegend);
			storage.attributes.forEach(attribute => {
				const attLabel = document.createElement('label');
				const attInput = document.createElement('input');
				const labelText = document.createTextNode(`${attribute}: `)
				attLabel.value = attribute;
				attLabel.appendChild(labelText);
				attInput.id = `${action}-${dbType}-${attribute}`.toLowerCase();
				attInput.name = `${attribute.replace(/\s/g, '-')}`.toLowerCase();
				attInput.type = 'text';
				const breakEl = document.createElement('br');
				const formElements = [attLabel, attInput, breakEl];
				formElements.forEach(el => formFieldSet.appendChild(el));
			})
			const breakEl = document.createElement('br');
			const formButton = document.createElement('input');
			formButton.id = `${action}-${dbType}-button`.toLowerCase();
			formButton.value = 'Submit';
			formButton.type = 'button'

			const buttonArray = [breakEl, formButton]
			buttonArray.forEach(el => formFieldSet.appendChild(el));
			formButton.addEventListener('click', function(event){
				const attributesObj = buildObjFromFormInput(event);
				processSuperCreateForm(action, dbType, attributesObj, event)
				elToAppendTo.removeChild(formEl);
				document.getElementById('js-super-admin-modify-menu').innerText = 'DISPLAY FORM'
				document.getElementById('js-super-admin-modify-records-menu').style.display = 'block';
			})
		}

		function buildObjFromFormInput(event) {
			const collection = Array.from(event.target.parentElement.children)
			let valObj = {}
			valObj = collection.map(function(el) { return [el.name, el.value] })
			valObj = valObj.filter(function(val) { return val[0] !== undefined })
			const newAttArray = valObj.slice(0, -1)
			const attObj = {};
			let i;
			const len = newAttArray.length;
	 		for (i = 0 ; i < len; i++){
				let attKey = newAttArray[i][0].toLowerCase();
				let attVal = newAttArray[i][1];
				attObj[attKey] = attVal;
			}
			return attObj;
		}

		function processSuperCreateForm(action, dbModel, attsObj, event){
			adminFetch.buildCreatePostReq(action, dbModel, attsObj, event)
			const elToAppendTo = event.target.parentElement.parentNode.parentNode;
			const msg = `Successfully Added to Database: <br>`;
			setTimeout(displayResults.bind(null, elToAppendTo, msg), 1000)
		}

		function appendIdFormForAssoc(dbType){
			const elToAppendTo = document.getElementById('super-admin-create-update-delete').lastElementChild
			const recordId = document.getElementById(`${id}`).value;
			const formData = {id: 'js-super-admin-CRUD-instance-id', labelValue:`ID of ${dbType.toUpperCase()} record to DELETE `, el: elToAppendTo, action: 'delete', searchType: 'id', dbType, callback: adminFetch.findRecordToDelete}
			const newElToAppendTo = document.getElementById('super-admin-create-update-delete')
			let msg;
			setTimeout(function(){
				if (storage.getStorageItem('result') == false) {
					updateOrCreateStorage('result', 'No Matches Found!');
				} else {
					updateOrCreateStorage('result', 'Matching Instances Found!');
				}
				displayResults(newElToAppendTo, msg)
				confirmRecordToDelete(dbType, id, newElToAppendTo)
			}, 1000)
			buildFindInstanceForm(formData)
		}

		function buildFindInstanceForm(formData) {
			const breakEl = document.createElement('br')
			const instAtts = {id: formData['id'], value: formData['labelValue']}
			const instInputField = buildFormField(instAtts)
			const buttonAtts = { id: 'js-super-admin-CRUD-button', value: 'SELECT RECORD', searchType: formData['searchType'], dbType: formData['dbType'], callback: formData['callback'], formId: formData['id'] }
			const instButton = buildCRUDSearchButton(buttonAtts)
			const formElArray = [breakEl, breakEl, instInputField, breakEl, instButton, breakEl]
			formElArray.forEach(el => formData['el'].appendChild(el))
		}

		function confirmRecordToDelete(dbType, id, elToAppendTo){
			if (id === 'js-super-admin-CRUD-instance-id')  {
				document.removeEventListener('click', removeResultsOnClick);
				const labelValue = 'Please Re-Enter Record Id to Confirm Delete '
				const inputAtts = {id: 'js-super-admin-crud-record-delete', value: labelValue}
				const confirmField = buildFormField(inputAtts);
				const confirmDeleteButton = document.createElement('button')
				const cancelDeleteButton = document.createElement('button')
				confirmDeleteButton.id = 'js-super-admin-CRUD-approve-delete';
				cancelDeleteButton.id = 'js-super-admin-CRUD-cancel-delete';
				confirmDeleteButton.innerText = 'Confirm Delete';
				cancelDeleteButton.innerText = 'Cancel Delete';
				const confirmEls = [confirmField, confirmDeleteButton, cancelDeleteButton]
				confirmEls.forEach(el => elToAppendTo.appendChild(el))
				cancelDeleteButton.addEventListener('click', resetCRUDForm)
				confirmDeleteButton.addEventListener('click', confirmDeleteAction.bind(null, dbType, elToAppendTo))

				function confirmDeleteAction(dbType, elToAppendTo){
					const id = document.getElementById('js-super-admin-CRUD-instance-id').value
					const confirmID = document.getElementById('js-super-admin-crud-record-delete').value
					if (dbType === 'entries') {
						alert('Entries Are Permanent Records and Can NOT be deleted!')
					} else if (confirmID === id) {
						confirm('Are you sure you want to delete this record?');
						adminFetch.buildDeletePostReq(dbType, id)
						const msg = storage.getStorageItem('result');
						displayResults(elToAppendTo, msg)
					} else {
						alert("ID numbers do not match. Confirmation Failed. Try Again.")
					}
					setTimeout(resetCRUDForm, 4000);
				}
			}
		}

		function resetCRUDForm() {
			const crudForm = document.getElementById('super-admin-create-update-delete')
			crudForm.innerHTML = '<br>';
			const crudButton = document.getElementById('js-super-admin-modify-menu')
			crudButton.innerText = 'DISPLAY FORM';
		}

		function buildFormField(atts) {
			/* atts should include id, value */
			const breakEl = document.createElement('br')
			const labelEl = document.createElement('label')
			const inputEl = document.createElement('input')
			labelEl.innerText = `${atts['value']}: `;
			inputEl.id = atts['id'];
			const elArray = [inputEl, breakEl]
			elArray.forEach(el => labelEl.appendChild(el))
			return labelEl
		}

		function buildCRUDSearchButton(atts) {
			/* atts should include id, value, dbType and a callback function */
			const buttonEl = document.createElement('input')
			buttonEl.type = 'submit'
			buttonEl.id = atts['id']
			buttonEl.value = atts['value']
			buttonEl.addEventListener('click', function(event){
				if (document.getElementById("js-super-admin-CRUD-instance-id").value !== "") {
					event.preventDefault();
					atts['callback'](atts['dbType'], atts['formId'], atts['searchType']);
					buttonEl.remove();
				} else {
					alert('Enter search value!')
				}
			});
			return buttonEl;
		}

		function displayResults(elToAppendTo, msg) {
			let resultsEl = document.getElementById( 'js-admin-CRUD-results')
			if (resultsEl === null && storage.getStorageItem('result') !== false ) {
				resultsEl = document.createElement('div')
				resultsEl.id = 'js-admin-CRUD-results';
				const obj = createDisplayObj();
				elToAppendTo.appendChild(resultsEl);
				msg += obj
				resultsEl.innerHTML = msg
			} else {
				let msgEl = document.createElement('div');
				msgEl.innerText = msg
				elToAppendTo.appendChild(msgEl);
			}
			/*
			document.addEventListener('click', removeResultsOnClick)
			document.addEventListener('click', resetCRUDForm) */
		}

		function createDisplayObj() {
			const results = storage.getStorageItem('result');
			let resultsObj = results.map((el) => {
				let objArray = ['<br>'];
				for (let [key, value] of Object.entries(el)) {
					let objHTML = `<br>`
					objHTML +=`${key}: ${value}`
					objArray.push(objHTML);
				}
				console.log(objArray)
				if (objArray.length > 1) objArray = objArray.join(' ');
				return objArray += '<br>'
			})
			resultsObj = resultsObj.join(' ');
			return resultsObj
		}

		function removeResultsOnClick() {
			/*
			let displayedResults = document.getElementById('js-admin-CRUD-results')
			if (displayedResults != undefined)
				displayedResults.remove();
			*/
		}
	}

	function checkAdminAuth() {
		let role;
		sessionStorage['adminRole'] === 'super' ? role = 'super' : role = 'admin';
		return role;
	}

	export { launchAdminInterface, checkAdminAuth }

/* DELETE NOTES build delete record type by id post request, don't allow for delete of categories with associated businesses, make sure if a business is deleted ALL reviews, maps, images, and listing are also execute DeleteByID
business controller action, listing controller action and category controller action will be different than deleting an image, review, map,
deleting review must also update overall review */
