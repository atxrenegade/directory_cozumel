class adminInterface {
	static launchAdminInterface(){
		/* admin index table elements */
		let adminLoginContainer = document.getElementById('js-admin-login-container')
		let adminTableContainer = document.getElementById('js-admin-panel-container')
		let indexTable = document.getElementById('admin-entry-table')
		/* admin details table elements */
		let detailsTable = document.getElementById('entry-details-tables')
		let smResolvedIndexButton = document.getElementById('admin-resolved-index-button')
		let smPendingIndexButton = document.getElementById('admin-pending-index-button')

		let rejectButton = document.getElementById('admin-reject-button')
		let approveButton = document.getElementById('admin-approve-button')
		let addNotesButton = document.getElementById('admin-notes-button')
		let newNotesSubmitButton = document.getElementById('admin-submit-notes-field')
		let notesForm = document.getElementById('admin-notes-form')
		let superAdminMenuButton = document.getElementById('js-admin-show-super-admin')
		let bigPendingIndexButton = document.getElementById('admin-show-pending-button')
		let bigResolvedIndexButton = document.getElementById('admin-show-resolved-button')
		let adminSearchButton = document.getElementById('js-admin-search-entries')
		let superAdminCRUDMenu = document.getElementById('js-super-admin-modify-menu')
		let adminLogoutButton = document.getElementById('js-admin-logout-button')

		adminTableContainer.style.display = 'none';
		let adminLoginDate = document.getElementById('admin-login-date');
		adminInterface.appendCurrentDateTime(adminLoginDate);
		adminLoginContainer.classList.add('admin');

		/* Admin panel menu buttons */
		bigPendingIndexButton.addEventListener('click', function() {
			adminInterface.indexButtonAction('pending');
		})

		bigResolvedIndexButton.addEventListener('click', function() {
			adminInterface.indexButtonAction('resolved');
		})

		adminSearchButton.addEventListener('click', function(){
			event.preventDefault();
			let adminTableContainer = document.getElementById('js-admin-panel-container');
			adminTableContainer.style.display = 'block';
			let entries = adminInterface.searchEntries(event);
			setTimeout(`adminInterface.renderIndex('SEARCH')`, 1800);
		})

		/* Super Admin Menu Button */
		superAdminMenuButton.addEventListener('click', function() {
			let el = document.getElementById('js-admin-super-admin-open');
			adminInterface.toggleElement(el);
		})

		/* Detailed Entry Panel Buttons */
		addNotesButton.addEventListener('click', adminInterface.showNotesForm);
		newNotesSubmitButton.addEventListener('click', adminInterface.addNotes);

		rejectButton.addEventListener('click', function(event) {
			adminInterface.rejectEntry(event);
		})

		approveButton.addEventListener('click', function(event) {
			adminInterface.approveEntry(event);
		})

		smPendingIndexButton.addEventListener('click', function() {
			adminInterface.indexButtonAction('pending');
		})

		smResolvedIndexButton.addEventListener('click', function() {
			adminInterface.indexButtonAction('resolved');
		})

		superAdminCRUDMenu.addEventListener('click', function() {
			event.preventDefault();
			if (superAdminCRUDMenu.innerText === 'DISPLAY FORM') {
				let radVals = adminInterface.getRadioVal(event);
				let elToAppendTo = document.getElementById('super-admin-create-update-delete')
				adminInterface.buildCRUDforms(radVals, event, elToAppendTo)
				superAdminCRUDMenu.innerText = 'HIDE FORM';
			} else if (superAdminCRUDMenu.innerText === 'HIDE FORM'){
				superAdminCRUDMenu.innerText = 'DISPLAY FORM';
				document.getElementById('super-admin-create-update-delete').innerHTML = '';
			} else {
				console.log('Button error!')
			}
		})

		adminLogoutButton.addEventListener('click', function(){
			/* clear session has and user values*/
			 location.reload(true)
		});
	}

	static buildCRUDforms(radVals, event, elToAppendTo){
		let formAction = radVals[0];
		let dbType = radVals[1];
		ATTRIBUTES = [];
		let formData;

		switch (formAction) {
			case 'create':
				adminInterface.getAttributes(dbType, adminInterface.buildAttsArray)
				setTimeout(adminInterface.buildNewForm.bind(null, formAction, dbType, elToAppendTo)
				, 800)
				break;
			case 'update':
				adminInterface.buildFindInstanceForm(formData);
				break;
			case 'delete':

				if (dbType === 'categories' || dbType === 'entries') {
					formData = {id: 'js-super-admin-CRUD-instance', labelValue:`ID of ${dbType.toUpperCase()} record to ${formAction.toUpperCase()} `, el: elToAppendTo, action: formAction, searchType: 'id', dbType: dbType, callback: adminInterface.findRecordToDelete}
					adminInterface.buildFindInstanceForm(formData);
				} else {
					let callback = adminInterface.searchIdByName
					formData = {id: 'js-super-admin-CRUD-instance', labelValue:`ASSOCIATED BUSINESS NAME of ${dbType.toUpperCase()} record to UPDATE or DELETE`, el: elToAppendTo, action: formAction,  searchType: 'businesses', dbType: dbType, callback: callback}
					adminInterface.buildFindInstanceForm(formData);

					/* create new post request to search and return all ids */
					/* adminInterface.collectRecords(db_type, business_id) */					/* search all databb records matching this business_id */
					/* Display to DOM */
					/* adminInterface.buildFindInstanceForm(formData); */
				}
				break;
			default:
				error: 'Action not understood!'
		}
	}

	static indexButtonAction(status){
		let entries = adminInterface.buildEntriesIndexPostReq(`${status}`);
		setTimeout(`adminInterface.renderIndex('${status}')`, 1800);
	}

	static toggleElement(el) {
		if (el.style.display === 'none') {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	}

	static displayIndex(){
		let adminTableContainer = document.getElementById('js-admin-panel-container')
		let indexBody = document.getElementById('index-entry-table-body');
		let indexTable = document.getElementById('admin-entry-table');
		let detailsTable = document.getElementById('entry-details-tables');
		indexBody.innerHTML = '';
		detailsTable.style.display = 'none';
		indexTable.style.display = 'block';
		adminTableContainer.style.display = 'block';
	}

	static getAdminId(){
		/* refactor when login functionality is added */
		let adminId = document.getElementById('admin-number').nextSibling.textContent.split('\n')[0].split(' ')[1]
		return adminId;
	}

	static getFormattedDateTime() {
		let date = new Date();
		let localDate = date.toDateString()
		let time = date.toLocaleTimeString();
		let formattedDateTime = localDate + " " + time;
		return formattedDateTime;
	}

	static appendCurrentDateTime(elToAppendTo){
		let timeDateEl = document.createElement('span');
		let timeDate = adminInterface.getFormattedDateTime();
		timeDateEl.innerText = timeDate;
		elToAppendTo.appendChild(timeDateEl);
	}

	static checkAdminAuth() {
		/* build out after auth and athentication completed */
		/* returns 'super' or 'jr' */
		return 'super'
	}

	static buildEntriesIndexPostReq(searchType) {
		let authType = adminInterface.checkAdminAuth();
		let method = 'POST'
		let data = { search_type: searchType, auth_type: authType }
		let url = `http://localhost:3000/entries/index`
		let callback = adminInterface.buildEntries;
		adminInterface.dynamFormReq(method, url, data, callback);
	}

	static getRadioVal(event){
		let radioTarget = event.target.parentNode.elements
		let radios = Array.from(radioTarget);
		let radValues = [];
		for (let i = 0, len = radios.length; i < len; i++){
      if (radios[i].checked) {
        let checked = radios[i].value;
				radValues.push(checked);
			}
  	}
		return radValues
	}

	static searchEntries(event) {
		let propertyToSearch = adminInterface.getRadioVal(event);
		let searchVal = event.target.parentNode[8].value;
		let method = 'POST'
		let url = 'http://localhost:3000/entries/search'
		let data = { property: propertyToSearch, search_val: searchVal }
		let callbackFunction = adminInterface.buildEntries;
		adminInterface.dynamFormReq(method, url, data, callbackFunction);
	}

	static renderIndex(indexType) {
		adminInterface.displayIndex();
		adminInterface.generateEntryTable(indexType);
	}

	static generateEntryTable(indexType){
		document.getElementById('detailed-entry-table-1').innerHTML = '';
		document.getElementById('detailed-entry-table-2').innerHTML = '';
		document.getElementById('detailed-entry-table-3').innerHTML = '';
		/* adminInterface.indexEntries(indexType) */
		if (ENTRIES.length > 0) {
			let indexBody = document.getElementById('index-entry-table-body');
			indexBody.innerHTML = '';
			let i = 0;
			ENTRIES.forEach(function(el, indexType) {
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
				let button = adminInterface.buildAdminButton(el.id);
				cell9.appendChild(button)
				i += 1;
			})
		}	else {
			let noEntries = document.createElement('p')
			noEntries.innerHTML = `No ${indexType.toUpperCase()} results at this time!`
			noEntries.setAttribute('id', 'admin-no-entry-message')
			let adminTable = document.getElementById('admin-entry-table');
			adminTable.appendChild(noEntries);
			document.addEventListener('click', function(){
				let noEntries = document.getElementById('admin-no-entry-message')
				if (noEntries !== null){
					document.getElementById('admin-entry-table').removeChild(noEntries)
					document.getElementById('js-admin-panel-container').style.display = 'none';
				}
			})
		}
	}

	static buildAdminButton(id){
		let newButton = document.createElement('input');
		newButton.setAttribute('id', `admin_entry_${id}`);
		newButton.setAttribute('type', 'button');
		newButton.setAttribute('class', 'admin-details-button');
		newButton.setAttribute('value', 'Review');
		newButton.setAttribute('onclick', 'adminInterface.displayDetails()');
		return newButton;
	}

	static displayDetails() {
		let indexTable = document.getElementById('admin-entry-table');
		let detailsTable = document.getElementById('entry-details-tables');
		indexTable.style.display = 'none';
		detailsTable.style.display = 'block';
		adminInterface.generateDetailedEntryTable(event);
	}

	static buildEntries(entries){
		ENTRIES = [];
		entries.forEach(el => {
			let id = el['id'];
			let entryType = el['entry_type'];
			let busId = el['business_id'];
			let busName = el['business_name'];
			let dateCreated = el['date'];
			let contributor = el['contributor'];
			let contributorEmail = el['contributor_email'];
			let dataObject = el['data_object'];
			let status = el['status'];
			let resolvedDate = el['resolved_date'];
			let adminId = el['admin_id'];
			let notes = el['notes'];
			let newEntry = new Entry(id, entryType, busId, busName, dateCreated, contributor, contributorEmail, dataObject, status, resolvedDate, adminId, notes)
		})
	}

	static generateDetailedEntryTable(event){
		let id = event.target.parentNode.parentElement.firstChild.textContent
		let entry = ENTRIES.find(entry => entry.id === parseInt(id, 10));
		let entryTable1 = document.getElementById('detailed-entry-table-1')
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
		let entryTable2 = document.getElementById('detailed-entry-table-2')
		let row2 = entryTable2.insertRow(0);
		let cell6 = row2.insertCell(0);
		let cell7 = row2.insertCell(1);
		let cell8 = row2.insertCell(2);
		cell6.innerHTML = entry.contributor;
		cell7.innerHTML = entry.contributorEmail;
		cell8.innerHTML = entry.dataObject;
		let entryTable3 = document.getElementById('detailed-entry-table-3')
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

	static showNotesForm(){
		let notesForm = document.getElementById('admin-notes-form')
		notesForm.style.display = 'block';
	}

	static addNotes() {
		let id = document.getElementById('detailed-entry-table-1').lastChild.children[0].innerText
		let entryId = parseInt(id, 10);
		let notes = document.getElementById('js-entry-notes').value
		let adminId = document.getElementById('detailed-entry-table-3').lastChild.firstChild.textContent
		let date = adminInterface.getFormattedDateTime();
		let note = document.getElementById('detailed-entry-table-3').lastChild.lastChild.innerText
		let newNote = `[${date.toString()}]:[AdminId:${adminId}]:[${notes}]`
		let allNotes = `${note}***`+ ` ${newNote}`;
		let data = { id: entryId, admin_id: adminId, notes: allNotes }
		adminInterface.postEntryUpdate(data);
		let noteCell = document.getElementById('detailed-entry-table-3').lastChild.lastChild
		adminInterface.updateCell(noteCell, allNotes)
		let notesForm = document.getElementById('admin-notes-form')
		notesForm.style.display = 'none';
		document.getElementById('js-entry-notes').value = '';
	}

	static updateCell(cell, tableData) {
		cell.innerText = tableData;
	}

	static rejectEntry(event) {
		let data = adminInterface.getEntryData('rejected', event)
		adminInterface.postEntryUpdate(data);
		setTimeout(function() {
			if (RESPONSE_MSG === 'Entry Successfully Updated'){
				adminInterface.displayResolved(data['admin_id'], data['resolved_date'], data['status']);
				document.getElementById('admin-approve-button').style.display = 'none';
				document.getElementById('admin-reject-button').style.display = 'none';
			} else {
				console.log(RESPONSE_MSG)
			}
		}, 1500)
	}

	static approveEntry(event) {
		let data = adminInterface.getEntryData('approved', event)
		adminInterface.postDatabaseObject(data)
		setTimeout(function(){
			if (RESPONSE_MSG === 'Object Saved'){
				adminInterface.postEntryUpdate(data)
				setTimeout(function(){
					if (RESPONSE_MSG === 'Entry Successfully Updated') {
					adminInterface.displayResolved(data['admin_id'], data['resolved_date'], data['status']);
					document.getElementById('admin-approve-button').style.display = 'none';
					document.getElementById('admin-reject-button').style.display = 'none';
				} else {
					console.log(RESPONSE_MSG)
				}
			}, 1500)} else {
				console.log(RESPONSE_MSG)
			}
		}, 1500)
	}

	static postDatabaseObject(data) {
		let configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
		};
		try {
			fetch('http://localhost:3000/entries/build_object', configObj)
				.then(resp => {
					return resp.json();
			})
			.then(json => RESPONSE_MSG = json['msg']
			)
		}
		catch(err) {
			alert('Update failed see console for further details!');
			RESPONSE_MSG = error.message;
		}
	}

	static getEntryData(status, event){
		let adminId = adminInterface.getAdminId();
		let resolvedDate = adminInterface.getFormattedDateTime();
		let entryId = document.getElementById('detailed-entry-table-1').lastChild.firstChild.textContent;
		let data;
		if (status === 'approved') {
			let objectEl = document.getElementById('detailed-entry-table-2')
			let dataObject = objectEl.lastElementChild.lastElementChild.textContent;
			data = {id: entryId, resolved_date: resolvedDate, admin_id: adminId, data_object: dataObject, status: status}
		} else {
			data = {id: entryId, resolved_date: resolvedDate, admin_id: adminId,  status: status}
		}
		return data;
	}

	static displayResolved(adminId, resolvedDate, status) {
		let adminIdEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[0];
		let resolvedDateEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[2];
		let statusEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[1];
		let cellDataArray = [[adminIdEl, adminId], [resolvedDateEl, resolvedDate],[statusEl, status]]
		cellDataArray.forEach( el => adminInterface.updateCell(el[0], el[1]))
	}

	static postEntryUpdate(data) {
		let configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		fetch('http://localhost:3000/entries/update', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(function(json) {
				RESPONSE_MSG = json['msg']
			}
		)
	}
	catch(err) {
			alert('Update failed see console for further details!');
			RESPONSE_MSG = json['msg'];
		}
	}

	static entryUpdateSuccess() {
		let updateSuccess = document.createElement('h4');
		updateSuccess.innerText = 'Entry Successfully Updated'
		detailsTable.appendChild('updateSuccess');
	}

	/* Dynamic Admin Forms Creation */

	static buildNewForm(action, dbType, elToAppendTo) {
		let formEl = document.createElement('form');
		let formFieldSet = document.createElement('fieldset');
		let formLegend = document.createElement('legend');
		let formElements;
		formLegend.innerHTML = `${action.toUpperCase()} ${dbType.toUpperCase()}`
		elToAppendTo.appendChild(formEl);
		formEl.appendChild(formFieldSet);
		formFieldSet.appendChild(formLegend);
		ATTRIBUTES.forEach(attribute => {
			let attLabel = document.createElement('label')
			let attInput = document.createElement('input')
			let labelText = document.createTextNode(`${attribute}: `)
			attLabel.setAttribute('value', attribute)
			attLabel.appendChild(labelText);
			attInput.setAttribute('id', `${action}-${dbType}-${attribute}`.toLowerCase());
			attInput.setAttribute('name', `${attribute.replace(/\s/g, '-')}`.toLowerCase());
			attInput.setAttribute('type', 'text')
			let breakEl = document.createElement('br')
			let formElements = [attLabel, attInput, breakEl]
			formElements.forEach(el => formFieldSet.appendChild(el));
		})
			let breakEl = document.createElement('br')
			let formButton = document.createElement('input')
			formButton.setAttribute('id', `${action}-${dbType}-button`.toLowerCase());
			formButton.setAttribute('value', 'Submit');
			formButton.setAttribute('type', 'button')

			let buttonArray = [breakEl, formButton]
			buttonArray.forEach(el => formFieldSet.appendChild(el));
			formButton.addEventListener('click', function(event){
				let attributesObj = adminInterface.buildObjFromFormInput(event);
				adminInterface.processSuperCreateForm(action, dbType, attributesObj, event)
				elToAppendTo.removeChild(formEl);
				document.getElementById('js-super-admin-modify-menu').innerText = 'DISPLAY FORM'
				document.getElementById('js-super-admin-modify-records-menu').style.display = 'block';
			})
	}

	static buildObjFromFormInput(event){
		let collection = Array.from(event.target.parentElement.children)
		let valObj = {}
		valObj = collection.map(function(el) { return [el.name, el.value] })
		valObj = valObj.filter(function(val) { return val[0] !== undefined })
		let newAttArray = valObj.slice(0, -1)
		let attObj = {};
		let i;
		let len = newAttArray.length;
 		for (i = 0 ; i < len; i++){
			let attKey = newAttArray[i][0].toLowerCase();
			let attVal = newAttArray[i][1];
			attObj[attKey] = attVal;
		}
		return attObj;
	}

	static processSuperCreateForm(action, dbModel, attsObj, event){
		adminInterface.buildCreatePostReq(action, dbModel, attsObj, event)
		let elToAppendTo = event.target.parentElement.parentNode.parentNode;
		let msg = `Successfully Added to Database: <br>`;
		setTimeout(adminInterface.displayResults.bind(null, elToAppendTo, msg), 1500)
	}

	static buildCreatePostReq(action, dbModel, attsObj, event){
		let method = 'POST'
		let url = `http://localhost:3000/${dbModel.toLowerCase()}`
		let callback = adminInterface.dynamFormResp;
		adminInterface.dynamFormReq(method, url, attsObj, callback)
	}

	static buildUpdatePostReq(action, dbModel, attsObj, event){
		let url = `http://localhost:3000/${dbModel.toLowerCase()}/${instance}`
		let data = { id: instance, attributes: attsObj }
		let method = 'PUT'
		adminInterface.dynamFormReq(method, url, data)
	}

	static buildDeletePostReq(dbModel, recordID){
		let method = 'DELETE'
		let url = `http://localhost:3000/${dbModel.toLowerCase()}/${recordID}`
		let data = { id: recordID }
		let callback = adminInterface.returnResult;
		adminInterface.dynamFormReq(method, url, data, callback)
	}

	static dynamFormReq(method, url, data, callback) {
		let configObj = {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
		};
		try {
			fetch(url, configObj)
				.then(resp => {
					return resp.json();
			})
				.then(json => callback(json)
			)
		}
		catch(err) {
			alert('Error. See console for further details!');
			console.log(err.message);
		}
	}

	static dynamFormResp(data){
		if (data == undefined) {
			RESULT = 'Error Processing Request';
		} else {
			RESULT = data;
			console.log(data)
		}
	}

	static getAttributes(dbType, callback = adminInterface.dynamFormResp){
		let url = `http://localhost:3000/${dbType}/attributes`
		adminInterface.dynamGetReq(url, callback)
	}

	static returnResult(data) {
		RESULT = data;
	}

	static dynamGetReq(url, callback){
		try {
			fetch(url)
			.then(resp => resp.json())
			.then(json => callback(json))
		}
		catch(err) {
			console.log(error.message);
		}
	}

	static buildAttsArray(data){
		ATTRIBUTES = data.map(el => { return el.replace(/_/g, ' ') })
	}


	static searchIdByName(dbType, id, searchType) {
		let name = document.getElementById(`${id}`).value
		let method = 'POST'
		let url = `http://localhost:3000/${searchType.toLowerCase()}/index_by_name`
		let callback = adminInterface.dynamFormResp
		let data = {name: name}
		adminInterface.dynamFormReq(method, url, data, callback)
		setTimeout(adminInterface.getAssociatedRecords.bind(null, dbType), 1500)
	}

	static getAssociatedRecords(dbType){
		debugger;
		let businessId = RESULT[0].id
		let method = 'POST'
		let data = {business_id: businessId}
		let url = `http://localhost:3000/${dbType}/index_associated`
		let callback = adminInterface.returnResult;
		adminInterface.dynamFormReq(method, url, data, callback)
		let elToAppendTo = document.getElementById('super-admin-create-update-delete')
		let msg;
		RESULT === null ? msg = 'No Records Match Your Query' : msg = 'Matching Associated Records'
		setTimeout(adminInterface.displayResults.bind(null, elToAppendTo, msg), 1500)
	}

	static buildFindInstanceForm(formData) {
		let breakEl = document.createElement('br')
		let instAtts = {id: formData['id'], value: formData['labelValue']}
		let instInputField = adminInterface.buildFormField(instAtts)
		let buttonAtts = { id: 'js-super-admin-CRUD-button', value: 'SEARCH RECORDS', searchType: formData['searchType'], dbType: formData['dbType'], callback: formData['callback'], formId: formData['id'] }
		let instButton = adminInterface.buildCRUDSearchButton(buttonAtts)
		let formElArray = [breakEl, breakEl, instInputField, breakEl, instButton, breakEl]
		formElArray.forEach(el => formData['el'].appendChild(el))
	}

	static findRecordToDelete(dbType, id){
		let recordId = document.getElementById(`${id}`).value
		RESULT = null;
		let url = `http://localhost:3000/${dbType}/${id}`
		let callback = adminInterface.returnResult
		adminInterface.dynamGetReq(url, callback)
		let elToAppendTo = document.getElementById('super-admin-create-update-delete')
		let msg;
		setTimeout(function(){
			RESULT === null ? msg = 'No Matches Found!' : msg = 'Matching Instances Found!'
			adminInterface.displayResults(elToAppendTo, msg)
			adminInterface.confirmRecordToDelete(dbType, id, elToAppendTo)
		}, 1500)
	}

	static confirmRecordToDelete(dbType, id, elToAppendTo){
		if (RESULT !== null) {
			document.removeEventListener('click', adminInterface.removeResultsOnClick);
			let labelValue = 'Please Re-Enter Record Id to Confirm Delete '
			let inputAtts = {id: 'js-super-admin-crud-record-delete', value: labelValue}
			let confirmField = adminInterface.buildFormField(inputAtts);
			let confirmDeleteButton = document.createElement('button')
			let cancelDeleteButton = document.createElement('button')
			confirmDeleteButton.id = 'js-super-admin-CRUD-approve-delete';
			cancelDeleteButton.id = 'js-super-admin-CRUD-cancel-delete';
			confirmDeleteButton.innerText = 'Confirm Delete';
			cancelDeleteButton.innerText = 'Cancel Delete';
			let confirmEls = [confirmField, confirmDeleteButton, cancelDeleteButton]
			confirmEls.forEach(el => elToAppendTo.appendChild(el))
			cancelDeleteButton.addEventListener('click', adminInterface.resetCRUDForm)
			confirmDeleteButton.addEventListener('click', confirmDeleteAction.bind(null, dbType, elToAppendTo))

			function confirmDeleteAction(dbType, elToAppendTo){
				let id = document.getElementById('js-super-admin-CRUD-instance').value
				let confirmID = document.getElementById('js-super-admin-crud-record-delete').value
				if (dbType === 'entries') {
					alert('Entries Are Permanent Records and Can NOT be deleted!')
				} else if (confirmID === id) {
					confirm('Are you sure you want to delete this record?');
					adminInterface.buildDeletePostReq(dbType, id)
					let msg = RESULT
					adminInterface.displayResults(elToAppendTo, msg)
				} else {
					alert("ID numbers do not match. Confirmation Failed. Try Again.")
				}
				setTimeout(adminInterface.resetCRUDForm, 3000);
			}

		}
	}

	/* DELETE NOTES build delete record type by id post request, don't allow for delete of
	categories with associated businesses, make sure if a business is deleted ALL reviews, maps, images, and listing are also executeDeleteByID
	business controller action, listing controller action and category controller action will be different than deleting an image, review, map,
	deleting review must also update overall review */

	static resetCRUDForm(elToAppendTo, msg){
		let crudForm = document.getElementById('super-admin-create-update-delete')
		crudForm.innerHTML = '<br>';
		let crudButton = document.getElementById('js-super-admin-modify-menu')
		crudButton.innerText = 'DISPLAY FORM';
	}

	static buildFormField(atts){
		/* atts should include id, value */
		let breakEl = document.createElement('br')
		let labelEl = document.createElement('label')
		let inputEl = document.createElement('input')
		labelEl.innerText = `${atts['value']}: `;
		inputEl.id = atts['id'];
		let elArray = [inputEl, breakEl]
		elArray.forEach(el => labelEl.appendChild(el))
		return labelEl
	}

	static buildCRUDSearchButton(atts) {
		/* atts should include id, value, dbType and a callback function */
		let buttonEl = document.createElement('input')
		buttonEl.type = 'submit'
		buttonEl.id = atts['id']
		buttonEl.value = atts['value']
		buttonEl.addEventListener('click', function(event){
			event.preventDefault();
			atts['callback'](atts['dbType'], atts['formId'], atts['searchType']);
			buttonEl.remove();
		});
		return buttonEl;
	}

	static displayResults(elToAppendTo, msg) {
		let resultsEl = document.createElement('div')
		resultsEl.id = 'js-admin-CRUD-results';
		elToAppendTo.appendChild(resultsEl);
		if (RESULT !== null || msg !== 'No Matches Found!') {
			let obj = adminInterface.createDisplayObj();
			msg += obj
			document.addEventListener('click', adminInterface.removeResultsOnClick)
		} else {
			document.addEventListener('click', adminInterface.resetCRUDForm)
		}
		resultsEl.innerHTML = msg
	}

	static createDisplayObj(){
		let objHTML = `<br>`
		for (let [key, value] of Object.entries(RESULT)) {
			objHTML +=`${key}: ${value}`
			objHTML += `<br>`
			}
		return objHTML;
	}

	static removeResultsOnClick(){
		let displayedResults = document.getElementById('js-admin-CRUD-results')
		if (displayedResults != undefined)
			displayedResults.remove();
	}

	static resetAdmin() {
		let indexTable = document.getElementById('admin-entry-table');
		let detailsTable = document.getElementById('entry-details-tables');
		let adminTableContainer = document.getElementById('js-admin-panel-container')
		adminTableContainer.style.display = 'none';
		indexTable.style.display = 'none';
		detailsTable.style.display = 'none';
		document.getElementById('admin-notes-form').style.display = 'none';
	  document.getElementById('js-entry-notes').value = '';
		document.getElementById('js-admin-super-admin-open').style.display = 'none';
	}
}
