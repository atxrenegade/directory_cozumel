class adminInterface {
	static launchAdminInterface(){
		/* admin index table elements */
		let adminTableContainer = document.getElementById('js-admin-panel-container')
		let indexTable = document.getElementById('admin-entry-table')
		/* admin details table elements */
		let detailsTable = document.getElementById('entry-details-tables')
		let backButton = document.getElementById('admin-back-button')
		let rejectButton = document.getElementById('admin-reject-button')
		let approveButton = document.getElementById('admin-approve-button')
		let addNotesButton = document.getElementById('admin-notes-button')
		let newNotesSubmitButton = document.getElementById('admin-submit-notes-field')
		let notesForm = document.getElementById('admin-notes-form')
		let superAdminMenuButton = document.getElementById('js-admin-show-super-admin')
		let pendingIndexButton = document.getElementById('admin-show-pending-button')
		let resolvedIndexButton = document.getElementById('admin-show-resolved-button')
		let adminEntrySearch = document.getElementById('js-search-admin-entries')
		let searchPendingButton = document.getElementById('admin-search-pending-button')
		let searchResolvedButton = document.getElementById('admin-search-resolved-button')

		adminEntrySearch.style.display = 'none';
		adminTableContainer.style.display = 'none';
		adminInterface.appendCurrentDateTime();

		/* Admin panel menu buttons */
		pendingIndexButton.addEventListener('click', function() {
			adminInterface.indexEntries('pending')
			adminInterface.renderIndex();
		})

		resolvedIndexButton.addEventListener('click', function() {
			adminInterface.indexEntries('resolved')
			adminInterface.renderIndex();
		})

		searchResolvedButton.addEventListener('click', function() {
			adminInterface.displayAdminSearchForm('resolved')
		})

		searchPendingButton.addEventListener('click', function() {
			adminInterface.displayAdminSearchForm('pending')
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

		backButton.addEventListener('click', function() {
			/* check for pending or resolved */
			let cellData = document.getElementById('detailed-entry-table-3').lastChild.children[1].innerHTML
			let indexType;
			cellData === 'pending' ?  indexType = 'pending' : indexType = 'resolved'
			adminInterface.indexEntries(indexType);
			adminInterface.renderIndex();
		})
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
		let adminEntrySearch = document.getElementById('js-search-admin-entries')
		indexBody.innerHTML = '';
		adminEntrySearch.style.display = 'none';
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

	static displayAdminSearchForm(type){
		let adminTableContainer = document.getElementById('js-admin-panel-container');
		let adminEntrySearch = document.getElementById('js-search-admin-entries');
		adminTableContainer.style.display = 'none';
		adminEntrySearch.style.display = 'block';
		let button = document.getElementById('jr-admin-search');
		button.innerHTML  = `Search ${type.toUpperCase()}`
		button.addEventListener('click', () => {
			event.preventDefault();
			adminInterface.searchEntries(type, event)
			adminInterface.renderIndex();
		})
	}

	static getRadioVal(event){
		let radioTarget = event.target.parentNode.elements
		let radios = Array.from(radioTarget);
		let radValue;
		for (let i = 0, len = radios.length; i < len; i++){
      if (radios[i].checked) {
        radValue = radios[i].value;
				return radValue;
			}
  	}
	}

	static searchEntries(type, event) {
		let propertyToSearch  = adminInterface.getRadioVal(event);
		let searchVal = event.target.parentNode[6].value;
		let data = { query_type: type, property: propertyToSearch, search_val: searchVal }
		let returnedJson = adminInterface.postSearchRequest(data);
	}

	static indexEntries(type) {
		let url = `http://localhost:3000/entries/${type}`
		try {
			fetch(url)
			.then(resp => resp.json())
			.then(json => adminInterface.buildEntries(json))
		}
		catch(err) {
			console.log(error.message);
		}
	}

	static renderIndex(type) {
		adminInterface.displayIndex();
		adminInterface.generateEntryTable();
	}

	static postSearchRequest(data) {
		let configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		fetch('http://localhost:3000/entries/search', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(json => adminInterface.buildEntries(json)
		)
	}
	catch(err) {
			alert('Update failed see console for further details!');
			console.log(error.message);
		}
	}

	static generateEntryTable(){
		document.getElementById('detailed-entry-table-1').innerHTML = '';
		document.getElementById('detailed-entry-table-2').innerHTML = '';
		document.getElementById('detailed-entry-table-3').innerHTML = '';
		/* adminInterface.indexEntries(type) */
		setTimeout(function(){
			let indexBody = document.getElementById('index-entry-table-body');
			indexBody.innerHTML = '';
			let i = 0;
			ENTRIES.forEach(el => {
				let row = indexBody.insertRow(i);
				/* how can I dynamiccaly create table cells using for loop?
				for (let k = 0; k < 9; k++) {
  				let cell${k + 1} = row.insertCell(${k})
				}*/
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
		}, 800);
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
		let data = { id: entryId, admin_id: adminId, notes: notes}
		adminInterface.postEntryUpdate(data);
		let noteCell = document.getElementById('detailed-entry-table-3').lastChild.lastChild
		adminInterface.updateCell(noteCell, notes)
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
	}

	static approveEntry(event) {
		let data = adminInterface.resolveEntry('approved', event)
		let id = {id: data.id}
		adminInterface.postDatabaseObject(data)
		adminInterface.postEntryUpdate(data)
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
