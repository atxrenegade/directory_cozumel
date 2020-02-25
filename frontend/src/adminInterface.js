class adminInterface {
	static launchAdminInterface() {

		/* admin index table elements */
		const adminLoginContainer = document.getElementById('js-admin-login-container')
		const adminTableContainer = document.getElementById('js-admin-panel-container')
		const indexTable = document.getElementById('admin-entry-table')
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
		const adminSearchButton = document.getElementById('js-admin-search-entries')

		/* super admin CRUD panel elements */
		const superAdminCRUDMenu = document.getElementById('js-super-admin-modify-menu')

		/* admin login/logout elements */
		const adminLogoutButton = document.getElementById('js-admin-logout-button')
		const adminLoginDate = document.getElementById('admin-login-date');

		/* setup Admin Interface */
		adminTableContainer.style.display = 'none';
		adminInterface.appendCurrentDateTime(adminLoginDate);
		adminLoginContainer.classList.add('admin');

		/* Event Listeners */
		/* Admin panel menu buttons */
		bigPendingIndexButton.addEventListener('click', function() {
			adminInterface.indexButtonAction('pending');
		})

		bigResolvedIndexButton.addEventListener('click', function() {
			adminInterface.indexButtonAction('resolved');
		})

		adminSearchButton.addEventListener('click', function(){
			event.preventDefault();
			const adminTableContainer = document.getElementById('js-admin-panel-container');
			adminTableContainer.style.display = 'block';
			const entries = adminInterface.searchEntries(event);
			setTimeout(`adminInterface.renderIndex('SEARCH')`, 1800);
		})

		/* Super Admin Menu Toggle Button */
		superAdminMenuButton.addEventListener('click', function() {
			const el = document.getElementById('js-admin-super-admin-open');
			adminInterface.toggleElement(el);
		})

		createAdminButton.addEventListener('click', function(){ alert('Coming Soon!')})

		editAdminButton.addEventListener('click', function(){ alert('Coming Soon!')})

		deleteAdminButton.addEventListener('click', function(){ alert('Coming Soon!')})

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
				const radVals = adminInterface.getRadioVal(event);
				const elToAppendTo = document.getElementById('super-admin-create-update-delete')
				adminInterface.buildCRUDforms(event, radVals, elToAppendTo)
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

 /* ADMIN INTERFACE METHODS */
	static buildCRUDforms(event, radVals, elToAppendTo){
		const formAction = radVals[0];
		const dbType = radVals[1];
		globalAttributes = [];
		let formData;

		switch (formAction) {
			case 'create':
				adminInterface.getAttributes(dbType, adminInterface.buildAttsArray)
				setTimeout(adminInterface.buildNewForm.bind(null, formAction, dbType, elToAppendTo)
				, 800)
				break;
			case 'update':
				setTimeout(adminInterface.resetCRUDForm, 300);
				alert('Work In Progress!')
				break;
			case 'delete':
				adminInterface.buildCRUDDelete(event, formAction, dbType, elToAppendTo)
				break;
			default:
				error: 'Action not understood!'
		}
	}

	static buildCRUDDelete(event, formAction, dbType, elToAppendTo){
		/* create new post request to search and return all ids */
		/* adminInterface.collectRecords(db_type, business_id) */
		/* search all databb records matching this business_id */
		/* Display to DOM */
		/* adminInterface.buildFindInstanceForm(formData); */
		/* check for event.target.children > 0 */
		let formData;
		if (dbType === 'categories' || dbType === 'entries') {
			formData = {id: 'js-super-admin-CRUD-instance-id', labelValue:`ID of ${dbType.toUpperCase()} record to ${formAction.toUpperCase()} `, el: elToAppendTo, action: formAction, searchType: 'id', dbType: dbType, callback: adminInterface.findRecordToDelete}
		} else {
			const callback = adminInterface.searchIdByName;
			formData = {id: 'js-super-admin-CRUD-instance-name', labelValue:`ASSOCIATED BUSINESS NAME of ${dbType.toUpperCase()} record to UPDATE or DELETE`, el: elToAppendTo, action: formAction,  searchType: 'businesses', dbType: dbType, callback: callback}
		}
		adminInterface.buildFindInstanceForm(formData);
	}

	static indexButtonAction(status){
		const entries = adminInterface.buildEntriesIndexPostReq(`${status}`);
		setTimeout(`adminInterface.renderIndex('${status}')`, 1800);
	}

	static toggleElement(el) {
		el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none'
	}

	static displayIndex(){
		const adminTableContainer = document.getElementById('js-admin-panel-container')
		const indexBody = document.getElementById('index-entry-table-body');
		const indexTable = document.getElementById('admin-entry-table');
		const detailsTable = document.getElementById('entry-details-tables');
		indexBody.innerHTML = '';
		detailsTable.style.display = 'none';
		indexTable.style.display = 'block';
		adminTableContainer.style.display = 'block';
	}

	static getAdminId(){
		/* refactor when login functionality is added */
		const adminId = document.getElementById('admin-number').nextSibling.textContent.split('\n')[0].split(' ')[1]
		return adminId;
	}

	static getFormattedDateTime() {
		const date = new Date();
		const localDate = date.toDateString()
		const time = date.toLocaleTimeString();
		const formattedDateTime = localDate + " " + time;
		return formattedDateTime;
	}

	static appendCurrentDateTime(elToAppendTo){
		let timeDateEl = document.createElement('span');
		const timeDate = adminInterface.getFormattedDateTime();
		timeDateEl.innerText = timeDate;
		elToAppendTo.appendChild(timeDateEl);
	}

	static checkAdminAuth() {
		/* build out after auth and athentication completed */
		/* returns 'super' or 'jr' */
		return 'super'
	}

	static buildEntriesIndexPostReq(searchType) {
		const authType = adminInterface.checkAdminAuth();
		const method = 'POST'
		const data = { search_type: searchType, auth_type: authType }
		const url = `http://localhost:3000/entries/index`
		const callback = adminInterface.buildEntries;
		adminInterface.dynamFormReq(method, url, data, callback);
	}

	static getRadioVal(event){
		const radioTarget = event.target.parentNode.elements
		const radios = Array.from(radioTarget);
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
		const propertyToSearch = adminInterface.getRadioVal(event);
		const searchVal = event.target.parentNode[8].value;
		const method = 'POST'
		const url = 'http://localhost:3000/entries/search'
		const data = { property: propertyToSearch, search_val: searchVal }
		const callbackFunction = adminInterface.buildEntries;
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
		if (globalEntries.length > 0) {
			const indexBody = document.getElementById('index-entry-table-body');
			indexBody.innerHTML = '';
			let i = 0;
			globalEntries.forEach(function(el, indexType) {
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
				const button = adminInterface.buildAdminButton(el.id);
				cell9.appendChild(button)
				i += 1;
			})
		}	else {
			const noEntries = document.createElement('p')
			noEntries.innerHTML = `No ${indexType.toUpperCase()} results at this time!`
			noEntries.setAttribute('id', 'admin-no-entry-message')
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

	static buildAdminButton(id){
		const newButton = document.createElement('input');
		newButton.setAttribute('id', `admin_entry_${id}`);
		newButton.setAttribute('type', 'button');
		newButton.setAttribute('class', 'admin-details-button');
		newButton.setAttribute('value', 'Review');
		newButton.setAttribute('onclick', 'adminInterface.displayDetails()');
		return newButton;
	}

	static displayDetails() {
		const indexTable = document.getElementById('admin-entry-table');
		const detailsTable = document.getElementById('entry-details-tables');
		indexTable.style.display = 'none';
		detailsTable.style.display = 'block';
		adminInterface.generateDetailedEntryTable(event);
	}

	static buildEntries(entries){
		globalEntries = [];
		entries.forEach(el => {
			const id = el['id'];
			const entryType = el['entry_type'];
			const busId = el['business_id'];
			const busName = el['business_name'];
			const dateCreated = el['date'];
			const contributor = el['contributor'];
			const contributorEmail = el['contributor_email'];
			const dataObject = el['data_object'];
			const status = el['status'];
			const resolvedDate = el['resolved_date'];
			const adminId = el['admin_id'];
			const notes = el['notes'];
			const newEntry = new Entry(id, entryType, busId, busName, dateCreated, contributor, contributorEmail, dataObject, status, resolvedDate, adminId, notes)
		})
	}

	static generateDetailedEntryTable(event){
		const id = event.target.parentNode.parentElement.firstChild.textContent
		const entry = globalEntries.find(entry => entry.id === parseInt(id, 10));
		const entryTable1 = document.getElementById('detailed-entry-table-1')
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

	static showNotesForm(){
		const notesForm = document.getElementById('admin-notes-form')
		notesForm.style.display = 'block';
	}

	static addNotes() {
		const id = document.getElementById('detailed-entry-table-1').lastChild.children[0].innerText
		const entryId = parseInt(id, 10);
		const notes = document.getElementById('js-entry-notes').value
		const adminId = document.getElementById('detailed-entry-table-3').lastChild.firstChild.textContent
		const date = adminInterface.getFormattedDateTime();
		const note = document.getElementById('detailed-entry-table-3').lastChild.lastChild.innerText
		const newNote = `[${date.toString()}]:[AdminId:${adminId}]:[${notes}]`
		const allNotes = `${note}***`+ ` ${newNote}`;
		const data = { id: entryId, admin_id: adminId, notes: allNotes }
		adminInterface.postEntryUpdate(data);
		const noteCell = document.getElementById('detailed-entry-table-3').lastChild.lastChild
		adminInterface.updateCell(noteCell, allNotes)
		const notesForm = document.getElementById('admin-notes-form')
		notesForm.style.display = 'none';
		document.getElementById('js-entry-notes').value = '';
	}

	static updateCell(cell, tableData) {
		cell.innerText = tableData;
	}

	static rejectEntry(event) {
		const data = adminInterface.getEntryData('rejected', event)
		adminInterface.postEntryUpdate(data);
		setTimeout(function() {
			if (globalResponse === 'Entry Successfully Updated'){
				adminInterface.displayResolved(data['admin_id'], data['resolved_date'], data['status']);
				document.getElementById('admin-approve-button').style.display = 'none';
				document.getElementById('admin-reject-button').style.display = 'none';
			} else {
				console.log(globalResponse)
			}
		}, 1500)
	}

	static approveEntry(event) {
		const data = adminInterface.getEntryData('approved', event)
		adminInterface.postDatabaseObject(data)
		setTimeout(function(){
			if (globalResponse === 'Object Saved'){
				adminInterface.postEntryUpdate(data)
				setTimeout(function(){
					if (globalResponse === 'Entry Successfully Updated') {
					adminInterface.displayResolved(data['admin_id'], data['resolved_date'], data['status']);
					document.getElementById('admin-approve-button').style.display = 'none';
					document.getElementById('admin-reject-button').style.display = 'none';
				} else {
					console.log(globalResponse)
				}
			}, 1500)} else {
				console.log(globalResponse)
			}
		}, 1500)
	}

	static postDatabaseObject(data) {
		const configObj = {
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
			.then(json => globalResponse = json['msg']
			)
		}
		catch(err) {
			alert('Update failed see console for further details!');
			globalResponse = err.message;
		}
	}

	static getEntryData(status, event){
		const adminId = adminInterface.getAdminId();
		const resolvedDate = adminInterface.getFormattedDateTime();
		const entryId = document.getElementById('detailed-entry-table-1').lastChild.firstChild.textContent;
		let data;
		if (status === 'approved') {
			const objectEl = document.getElementById('detailed-entry-table-2')
			const dataObject = objectEl.lastElementChild.lastElementChild.textContent;
			data = {id: entryId, resolved_date: resolvedDate, admin_id: adminId, data_object: dataObject, status: status}
		} else {
			data = {id: entryId, resolved_date: resolvedDate, admin_id: adminId,  status: status}
		}
		return data;
	}

	static displayResolved(adminId, resolvedDate, status) {
		const adminIdEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[0];
		const resolvedDateEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[2];
		const statusEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[1];
		const cellDataArray = [[adminIdEl, adminId], [resolvedDateEl, resolvedDate],[statusEl, status]]
		cellDataArray.forEach( el => adminInterface.updateCell(el[0], el[1]))
	}

	static postEntryUpdate(data) {
		const configObj = {
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
				globalResponse = json['msg']
			}
		)
	}
	catch(err) {
			alert('Update failed see console for further details!');
			globalResponse = json['msg'];
		}
	}

	static entryUpdateSuccess() {
		const updateSuccess = document.createElement('h4');
		updateSuccess.innerText = 'Entry Successfully Updated'
		detailsTable.appendChild('updateSuccess');
	}

	/* Dynamic Admin Forms Creation */
	static buildNewForm(action, dbType, elToAppendTo) {
		const formEl = document.createElement('form');
		const formFieldSet = document.createElement('fieldset');
		const formLegend = document.createElement('legend');
		let formElements;
		formLegend.innerHTML = `${action.toUpperCase()} ${dbType.toUpperCase()}`
		elToAppendTo.appendChild(formEl);
		formEl.appendChild(formFieldSet);
		formFieldSet.appendChild(formLegend);
		globalAttributes.forEach(attribute => {
			const attLabel = document.createElement('label')
			const attInput = document.createElement('input')
			const labelText = document.createTextNode(`${attribute}: `)
			attLabel.setAttribute('value', attribute)
			attLabel.appendChild(labelText);
			attInput.setAttribute('id', `${action}-${dbType}-${attribute}`.toLowerCase());
			attInput.setAttribute('name', `${attribute.replace(/\s/g, '-')}`.toLowerCase());
			attInput.setAttribute('type', 'text')
			const breakEl = document.createElement('br')
			const formElements = [attLabel, attInput, breakEl]
			formElements.forEach(el => formFieldSet.appendChild(el));
		})
		const breakEl = document.createElement('br')
		const formButton = document.createElement('input')
		formButton.setAttribute('id', `${action}-${dbType}-button`.toLowerCase());
		formButton.setAttribute('value', 'Submit');
		formButton.setAttribute('type', 'button')

		const buttonArray = [breakEl, formButton]
		buttonArray.forEach(el => formFieldSet.appendChild(el));
		formButton.addEventListener('click', function(event){
			const attributesObj = adminInterface.buildObjFromFormInput(event);
			adminInterface.processSuperCreateForm(action, dbType, attributesObj, event)
			elToAppendTo.removeChild(formEl);
			document.getElementById('js-super-admin-modify-menu').innerText = 'DISPLAY FORM'
			document.getElementById('js-super-admin-modify-records-menu').style.display = 'block';
		})
	}

	static buildObjFromFormInput(event){
		const collection = Array.from(event.target.parentElement.children)
		const valObj = {}
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

	static processSuperCreateForm(action, dbModel, attsObj, event){
		adminInterface.buildCreatePostReq(action, dbModel, attsObj, event)
		const elToAppendTo = event.target.parentElement.parentNode.parentNode;
		const msg = `Successfully Added to Database: <br>`;
		setTimeout(adminInterface.displayResults.bind(null, elToAppendTo, msg), 1500)
	}

	static buildCreatePostReq(action, dbModel, attsObj, event){
		const method = 'POST'
		const url = `http://localhost:3000/${dbModel.toLowerCase()}`
		const callback = adminInterface.dynamFormResp;
		adminInterface.dynamFormReq(method, url, attsObj, callback)
	}

	static buildUpdatePostReq(action, dbModel, attsObj, event){
		const url = `http://localhost:3000/${dbModel.toLowerCase()}/${instance}`
		const data = { id: instance, attributes: attsObj }
		const method = 'PUT'
		adminInterface.dynamFormReq(method, url, data)
	}

	static buildDeletePostReq(dbModel, recordID){
		const method = 'DELETE'
		const url = `http://localhost:3000/${dbModel.toLowerCase()}/${recordID}`
		const data = { id: recordID }
		const callback = adminInterface.returnResult;
		adminInterface.dynamFormReq(method, url, data, callback)
	}

	static dynamFormReq(method, url, data, callback) {
		const configObj = {
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
			globalResult[0] = 'Error Processing Request';
		} else {
			globalResult[0] = data;
			console.log(data)
		}
	}

	static getAttributes(dbType, callback = adminInterface.dynamFormResp){
		const url = `http://localhost:3000/${dbType}/attributes`
		adminInterface.dynamGetReq(url, callback)
	}

	static returnResult(data) {
		globalResult[0] = data;
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
		globalAttributes = data.map(el => {return el.replace(/_/g, ' ') })
	}

	static searchIdByName(dbType, id, searchType) {
		const name = document.getElementById(`${id}`).value
		const method = 'POST'
		const url = `http://localhost:3000/${searchType.toLowerCase()}/index_by_name`
		const callback = adminInterface.dynamFormResp
		const data = {name: name}
		adminInterface.dynamFormReq(method, url, data, callback)
		setTimeout(adminInterface.getAssociatedRecords.bind(null, dbType), 1500)
	}

	static getAssociatedRecords(dbType){
		const businessId = globalResult[0][0]['id']
		const method = 'POST'
		const data = {business_id: businessId}
		const url = `http://localhost:3000/${dbType}/index_associated`
		const callback = adminInterface.returnResult;
		adminInterface.dynamFormReq(method, url, data, callback)
		const elToAppendTo = document.getElementById('super-admin-create-update-delete')
		let msg;
		globalResult.length < 1 ? msg = 'No Records Match Your Query' : msg = 'Matching Associated Records'

		setTimeout(adminInterface.displayResults.bind(null, elToAppendTo, msg), 500)
		setTimeout(adminInterface.appendIdFormForAssoc.bind(null,dbType), 1000)
	}

	static appendIdFormForAssoc(dbType){
		const elToAppendTo = document.getElementById('super-admin-create-update-delete').lastElementChild
		const formData = {id: 'js-super-admin-CRUD-instance-id', labelValue:`ID of ${dbType.toUpperCase()} record to DELETE `, el: elToAppendTo, action: 'delete', searchType: 'id', dbType: dbType, callback: adminInterface.findRecordToDelete}
		adminInterface.buildFindInstanceForm(formData)
	}

	static buildFindInstanceForm(formData) {
		const breakEl = document.createElement('br')
		const instAtts = {id: formData['id'], value: formData['labelValue']}
		const instInputField = adminInterface.buildFormField(instAtts)
		const buttonAtts = { id: 'js-super-admin-CRUD-button', value: 'SELECT RECORD', searchType: formData['searchType'], dbType: formData['dbType'], callback: formData['callback'], formId: formData['id'] }
		const instButton = adminInterface.buildCRUDSearchButton(buttonAtts)
		const formElArray = [breakEl, breakEl, instInputField, breakEl, instButton, breakEl]
		formElArray.forEach(el => formData['el'].appendChild(el))
	}

	static findRecordToDelete(dbType, id){
		const recordId = document.getElementById(`${id}`).value
		globalResult = [];
		const url = `http://localhost:3000/${dbType}/${recordId}`
		const callback = adminInterface.returnResult
		adminInterface.dynamGetReq(url, callback)
		const elToAppendTo = document.getElementById('super-admin-create-update-delete')
		let msg;
		setTimeout(function(){
			globalResult.length < 1? msg = 'No Matches Found!' : msg = 'Matching Instances Found!'
			adminInterface.displayResults(elToAppendTo, msg)
			adminInterface.confirmRecordToDelete(dbType, id, elToAppendTo)
		}, 1000)
	}

	static confirmRecordToDelete(dbType, id, elToAppendTo){
		if (id === 'js-super-admin-CRUD-instance-id')  {
			document.removeEventListener('click', adminInterface.removeResultsOnClick);
			const labelValue = 'Please Re-Enter Record Id to Confirm Delete '
			const inputAtts = {id: 'js-super-admin-crud-record-delete', value: labelValue}
			const confirmField = adminInterface.buildFormField(inputAtts);
			const confirmDeleteButton = document.createElement('button')
			const cancelDeleteButton = document.createElement('button')
			confirmDeleteButton.id = 'js-super-admin-CRUD-approve-delete';
			cancelDeleteButton.id = 'js-super-admin-CRUD-cancel-delete';
			confirmDeleteButton.innerText = 'Confirm Delete';
			cancelDeleteButton.innerText = 'Cancel Delete';
			const confirmEls = [confirmField, confirmDeleteButton, cancelDeleteButton]
			confirmEls.forEach(el => elToAppendTo.appendChild(el))
			cancelDeleteButton.addEventListener('click', adminInterface.resetCRUDForm)
			confirmDeleteButton.addEventListener('click', confirmDeleteAction.bind(null, dbType, elToAppendTo))

			function confirmDeleteAction(dbType, elToAppendTo){
				const id = document.getElementById('js-super-admin-CRUD-instance-id').value
				const confirmID = document.getElementById('js-super-admin-crud-record-delete').value
				if (dbType === 'entries') {
					alert('Entries Are Permanent Records and Can NOT be deleted!')
				} else if (confirmID === id) {
					confirm('Are you sure you want to delete this record?');
					adminInterface.buildDeletePostReq(dbType, id)
					const msg = globalResult[0]
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

	static resetCRUDForm(){
		const crudForm = document.getElementById('super-admin-create-update-delete')
		crudForm.innerHTML = '<br>';
		const crudButton = document.getElementById('js-super-admin-modify-menu')
		crudButton.innerText = 'DISPLAY FORM';
	}

	static buildFormField(atts){
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

	static buildCRUDSearchButton(atts) {
		/* atts should include id, value, dbType and a callback function */
		const buttonEl = document.createElement('input')
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
		/* debug this so it stops redisplaying the same return values */
		let resultsEl = document.getElementById( 'js-admin-CRUD-results')
		if (resultsEl === undefined || globalResult.length > 0 ) {
			resultsEl = document.createElement('div')
			resultsEl.id = 'js-admin-CRUD-results';
			const obj = adminInterface.createDisplayObj();
			elToAppendTo.appendChild(resultsEl);
			msg += obj
			document.addEventListener('click', adminInterface.removeResultsOnClick)
			resultsEl.innerHTML = msg
		} else {
			/* document.addEventListener('click', adminInterface.resetCRUDForm) */
		}

	}

	static createDisplayObj(){
		const results = globalResult.flat()
		let resultsObj = results.map((el) => {
			let objArray = ['<br>'];
			for (let [key, value] of Object.entries(el)) {
				let objHTML = `<br>`
				objHTML +=`${key}: ${value}`
				objArray.push(objHTML);
			}
			console.log(objArray)
			if (objArray.length > 1) {
				objArray = objArray.join(' ');
			}
			return objArray += '<br>'
		})
		resultsObj = resultsObj.join(' ');
		return resultsObj
	}

	static removeResultsOnClick(){
		/*
		let displayedResults = document.getElementById('js-admin-CRUD-results')
		if (displayedResults != undefined)
			displayedResults.remove();
		*/
	}

	static resetAdmin() {
		const superAdminPanel = 	document.getElementById('js-admin-super-admin-open')
		const indexTable = document.getElementById('admin-entry-table');
		const detailsTable = document.getElementById('entry-details-tables');
		const adminTableContainer = document.getElementById('js-admin-panel-container')
		const adminNotesForm = document.getElementById('admin-notes-form')
		const entryNotes = document.getElementById('js-entry-notes')

		superAdminPanel.style.display = 'none';
		adminTableContainer.style.display = 'none';
		indexTable.style.display = 'none';
		detailsTable.style.display = 'none';
		adminNotesForm.style.display = 'none';
	  entryNotes.value = '';
	}
}
