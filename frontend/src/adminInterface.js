class adminInterface {
	static launchAdminInterface(){
		/* admin index table elements */
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

		adminTableContainer.style.display = 'none';
		adminInterface.appendCurrentDateTime();

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
			let radVals = adminInterface.getRadioVal(event);
			adminInterface.buildCRUDforms(radVals, event)
		})
	}

	static buildCRUDforms(radVals, event){
		let formAction = radVals[0];
		let dbType = radVals[1];
		let elToAppendTo = event.target.parentElement.parentNode.parentNode;
		ATTRIBUTES = [];

		switch (formAction) {
			case 'create':
				document.getElementById('super-admin-create-update-delete').innerHTML = '';
				document.getElementById('js-super-admin-modify-records-menu').style.display = 'none';
				adminInterface.getAttributes(dbType, adminInterface.buildAttsArray)
				setTimeout(function(){adminInterface.buildNewForm(formAction, dbType, event)}, 500)
				break;
			case 'update':
				adminInterface.displayGetInstanceForm(elToAppendTo, formAction, dbType);
				break;
			case 'delete':
				break;
			default:
				error: 'Action not understood!'
		}
	}

	static indexButtonAction(status){
		let entries = adminInterface.buildIndexPostReq(`${status}`);
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

	static appendCurrentDateTime(){
		let timeDateEl = document.getElementById('admin-login-date');
		let timeDate = document.createElement('span');
		timeDate.innerText = new Date;
		timeDateEl.appendChild(timeDate);
	}

	static checkAdminAuth() {
		/* build out after auth and athentication completed */
		/* returns 'super' or 'jr' */
		return 'super'
	}

	static buildIndexPostReq(searchType) {
		let authType = adminInterface.checkAdminAuth();
		let method = 'POST'
		let data = { search_type: searchType, auth_type: authType }
		let url = `http://localhost:3000/entries`
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
			let busName = el['bus_name'];
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
		let date = new Date
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
		let data = adminInterface.resolveEntry('rejected', event)
		adminInterface.postEntryUpdate(data);
		document.getElementById('admin-approve-button').style.display = 'none';
		document.getElementById('admin-reject-button').style.display = 'none';
	}

	static approveEntry(event) {
		let data = adminInterface.resolveEntry('approved', event)
		let id = {id: data.id}
		adminInterface.postDatabaseObject(data)
		adminInterface.postEntryUpdate(data)
		document.getElementById('admin-approve-button').style.display = 'none';
		document.getElementById('admin-reject-button').style.display = 'none';
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
			fetch('http://localhost:3000/entries/new_object', configObj)
				.then(resp => {
					return resp.json();
			})
				.then(json => console.log(json)
			)
		}
		catch(err) {
			alert('Update failed see console for further details!');
			console.log(error.message);
		}
	}

	static resolveEntry(status, event){
		let entryId = document.getElementById('detailed-entry-table-1').lastChild.firstChild.textContent
		let adminId = adminInterface.getAdminId();
		let resolvedDate = new Date().toString();
		let data = {id: entryId, resolved_date: resolvedDate, admin_id: adminId, status: status}
		adminInterface.displayResolved(adminId, resolvedDate, status);
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
			.then(json => console.log(json)
		)
	}
	catch(err) {
			alert('Update failed see console for further details!');
			console.log(error.message);
		}
	}

	static entryUpdateSuccess() {
		let updateSuccess = document.createElement('h4');
		updateSuccess.innerText = 'Entry Successfully Updated'
		detailsTable.appendChild('updateSuccess');
	}

	/* Dynamic Admin Forms Creation */

	static buildNewForm(action, dbType, event) {
		let elToAppendTo = event.target.parentElement.parentElement.parentElement.lastElementChild
		let formEl = document.createElement('form');
		let formElements;
		let formTitle = document.createElement('p');
		formTitle.innerHTML = `${action.toUpperCase()} ${dbType.toUpperCase()}`
		elToAppendTo.appendChild(formEl);
		formEl.appendChild(formTitle);

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
			formElements.forEach(el => formEl.appendChild(el));
		})
			let breakEl = document.createElement('br')
			let formButton = document.createElement('input')
			formButton.setAttribute('id', `${action}-${dbType}-button`.toLowerCase());
			formButton.setAttribute('value', 'Submit');
			formButton.setAttribute('type', 'button')
			let backButton = document.createElement('input')
			backButton.setAttribute('id', 'super-admin-back-to-db-menu');
			backButton.setAttribute('value', 'Back To MENU');
			backButton.setAttribute('type', 'button')
			let buttonArray = [breakEl, formButton, backButton]
			buttonArray.forEach(el => formEl.appendChild(el));
			formButton.addEventListener('click', function(event){
				let attributesObj = adminInterface.buildObjFromFormInput(event);
				adminInterface.processCRUDForm(action, dbType, attributesObj, event)
				elToAppendTo.removeChild(formEl);
				document.getElementById('js-super-admin-modify-records-menu').style.display = 'block';

			})
			backButton.addEventListener('click', function(){
					elToAppendTo.removeChild(formEl);
					document.getElementById('js-super-admin-modify-records-menu').style.display = 'block';

			})
	}

	static buildObjFromFormInput(event){
		let collection = Array.from(event.target.parentElement.children)
		let valObj = {}
		valObj = collection.map(function(el) { return [el.name, el.value] })
		valObj = valObj.filter(function(val) { return val[0] !== undefined })
		let newAttArray = valObj.slice(0, -2)
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

	static processCRUDForm(action, dbModel, attsObj, event){
		/* type = Business, Entry, Map, Review, Category, Images, Listing, Admin */
		/* action = Create, Update, Delete */
		/* instance = any valid instance of type */
		if (action === 'create') {
			adminInterface.buildCreatePostReq(action, dbModel, attsObj, event)

			let elToAppendTo = event.target.parentElement.parentNode.parentNode;
		 	adminInterface.displayResults(elToAppendTo);
			/* clear success message and details on click */
		} else if	(action === 'update'){
			/* return instance to update from database */
			/* create new instance from attributes and exisitng values */

		}	else if (action === 'delete') {
			let instance = adminInterface.identifyInstance(dbModel, attsObj)

		} else {
			console.log('Error this record type does not exist')
		}
		/* display results*/
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

	static buildDeletePostReq(action, dbModel, attsObj, event){
		let method = 'DELETE'
		let url = `http://localhost:3000/${dbModel.toLowerCase()}/${instance}`
		data = { id: id }
		adminInterface.dynamFormReq(method, url, data)
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
			alert('Update failed see console for further details!');
			console.log(error.message);
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

	static getInstance(event, dbType){
		let id = event.target.previousElementSibling.lastElementChild.value
		debugger;
		let url = `http://localhost:3000/maps/${id}/edit`
		let callback = adminInterface.returnResult
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

/***
	static getInstanceId(dbModel, attsObj){
		let id;
		if ('name' in attsObj) {
			let name = attsObj["name"]
			id = adminInterface.searchIdByName(dbModel, name)
		} else if ('id' in attsObj){
			id = attsObj["id"]
		} else {
			id = 'no match for this instance'
		}
		return id;
	}
****/
	static searchIdByName(dbType, name) {
		try {
			/* use query string using name in url */
			url = `http://localhost:3000/${dbType}/by_name`
			fetch(url)
			.then(resp => resp.json())
			.then(json => console.log(json))
		}
		catch(err) {
			console.log(error.message);
		}
	}

	static displayGetInstanceForm(elToAppendTo, actionType, dbType){
		let breakEl = document.createElement('br')
		let instAtts = {id: 'js-super-admin-CRUD-instance', name: 'js-super-admin-CRUD-instance-name', value:`ID of ${dbType.toUpperCase()} record to UPDATE or DELETE`}
		let buttonAtts = { id: 'js-super-admin-CRUD-button', name: 'js-super-admin-CRUD-name', value: 'Search Records'}
		let instInput = adminInterface.buildFormField(instAtts, dbType)
		let instButton = adminInterface.buildButton(buttonAtts, dbType)
		let elArray = [breakEl, instInput, instButton]
		elArray.forEach(el => elToAppendTo.appendChild(el))
	}

	static buildFormField(atts, dbType){
		/* atts should include id, name, value */
		let labelEl = document.createElement('label')
		let inputEl = document.createElement('input')
		labelEl.innerText = `${atts['value']}: `;
		inputEl.setAttribute('id', atts['id']);
		inputEl.setAttribute('name', atts['name']);
		labelEl.appendChild(inputEl)
		return labelEl
	}

	static buildButton(atts, dbType) {
		/* atts should include id, name, value, and a callback function */
		let buttonEl = document.createElement('input')
		buttonEl.setAttribute('type', 'submit')
		buttonEl.setAttribute('id', atts['id'])
		buttonEl.setAttribute('name', atts['name'])
		buttonEl.setAttribute('value', atts['value'])
		buttonEl.addEventListener('click', function(event){
			event.preventDefault();
			adminInterface.getInstance(event, dbType)
		});
		return buttonEl;
	}

	static displayResults(elToAppendTo){
		let resultsEl = document.createElement('div')
		if (RESULT !== null) {
			let msg = `Successfully Added to Database: <br>`;
			let obj = adminInterface.createDisplayObj();
			msg += obj
			resultsEl.innerHTML = msg
		} else {
			resultsEl = `Admin Operation Error. Object not persisted to database.`
		}
		debugger;
		elToAppendTo.appendChild(resultsEl);
	}

	static createDisplayObj(){
		let objHTML = ``
		for (let [key, value] of Object.entries(RESULT)) {
			objHTML +=`${key}: ${value}`
			objHTML += `<br>`
			}
		return objHTML;
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
