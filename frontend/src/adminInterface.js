class adminInterface {
	static launchAdminInterface(){
		/* admin index table elements */
		let indexTable = document.getElementById('admin-entry-table')
		/* admin details table elements */
		let detailsTable = document.getElementById('entry-details-tables')
		let backButton = document.getElementById('admin-back-button')
		let rejectButton = document.getElementById('admin-reject-button')
		let addNotesButton = document.getElementById('admin-notes-button')
		let newNotesSubmitButton = document.getElementById('admin-submit-notes-field')
		let notesForm = document.getElementById('admin-notes-form')

		adminInterface.appendCurrentDateTime();
		adminInterface.generatePendingEntryTable();
		addNotesButton.addEventListener("click", adminInterface.showNotesForm);
		newNotesSubmitButton.addEventListener("click", adminInterface.addNotes);
		backButton.addEventListener("click", adminInterface.returnToIndex);
		rejectButton.addEventListener("click", function(event) {
			adminInterface.rejectEntry(event);
		})
	}

	static returnToIndex(){
		let indexBody = document.getElementById('index-entry-table-body');
			let indexTable = document.getElementById('admin-entry-table');
		let detailsTable = document.getElementById('entry-details-tables');
		indexBody.innerHTML = "";
		ENTRIES = [];
		detailsTable.style.display = "none";
		indexTable.style.display = "block";
		adminInterface.generatePendingEntryTable();
	}

	static getAdminId(){
		/* refactor when login functionality is added */
		let adminId = document.getElementById('admin-number').nextSibling.textContent.split("\n")[0].split(" ")[1]
		return adminId;
	}

	static appendCurrentDateTime(){
		let timeDateEl = document.getElementById('admin-login-date')
		let timeDate = document.createElement('span')
		timeDate.innerText = new Date;
		timeDateEl.appendChild(timeDate)
	}

	static indexPendingEntries() {
		try {
			url = 'http://localhost:3000/entries'
			fetch(url)
			.then(resp => resp.json())
			.then(json => adminInterface.buildEntries(json))
		}
		catch(err) {
			console.log(error.message);
		}
	}

	static generatePendingEntryTable(){
		adminInterface.indexPendingEntries();
		setTimeout(function(){
			let indexBody = document.getElementById('index-entry-table-body');
			let i = 0;
			ENTRIES.forEach(el => {
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
				cell9.innerHTML = "<button class='admin-entry-show-details'> Review </button>"
				i += 1;
			})
		}, 800);
		setTimeout(function(){
			let detailedEntryButtons = document.querySelectorAll('button.admin-entry-show-details')
			detailedEntryButtons.forEach(button => {
				document.addEventListener('click', event => {
					if (document.getElementById('detailed-entry-table-1').children.length === 0) {
						let indexTable = document.getElementById('admin-entry-table');
						let detailsTable = document.getElementById('entry-details-tables');
						indexTable.style.display = 'none';
						detailsTable.style.display = 'block';
						adminInterface.generateDetailedEntryTable(event);
					}
				})
			})
		}, 800);
	}

	static buildEntries(entries){
		entries.forEach(el => {
			let id = el['id'];
			let entryType = el['entry_type'];
			let busId = el['bus_id'];
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

	static updateCell(cell, tableData){
		cell.innerText = tableData;
	}

	static rejectEntry(event){
		let entryId = document.getElementById('detailed-entry-table-1').lastChild.firstChild.textContent
		let adminId = adminInterface.getAdminId();
		let resolvedDate = new Date();
		let status = "rejected"
		let data = {id: entryId, resolved_date: resolvedDate, admin_id: adminId, status: status, }
		adminInterface.postEntryUpdate(data);
		adminInterface.displayRejected(adminId, resolvedDate, status);
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

	static displayRejected(adminId, resolvedDate, status) {
		let adminIdEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[0];
		let resolvedDateEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[2];
		let statusEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[1];
		let cellDataArray = [[adminIdEl, adminId], [resolvedDateEl, resolvedDate],[statusEl, status]]
		cellDataArray.forEach( el => adminInterface.updateCell(el[0], el[1]))
	}

	static entryUpdateSuccess() {
		let updateSuccess = document.createElement('h4');
		updateSuccess.innerText = "Entry Successfully Updated"
		detailsTable.appendChild('updateSuccess');
	}

	static resetAdmin(){
		let indexTable = document.getElementById('admin-entry-table');
		let detailsTable = document.getElementById('entry-details-tables');
		indexTable.style.display = 'block';
		detailsTable.style.display = 'none';
		document.getElementById('admin-notes-form').style.display = 'none';
	  document.getElementById('js-entry-notes').value = '';
	}
}
