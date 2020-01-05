window.onload = function() {
	mykey = config.MY_KEY;
	ALL = [];
	CATS = [];
	ENTRIES = [];
	LAT = 20.42;
	LNG = -86.92;


	/* searchbar elements */
	let searchByName = document.getElementById('js-search-by-name');
	let searchByCategory = document.getElementById('js-search-by-category');
	let nameRadioSelect = document.getElementById('js-radio-by-name');
	let categoryRadioSelect = document.getElementById('js-radio-by-category');
	let searchCategoryMenu = document.getElementById('js-search-category-menu');
	let searchNameField = document.getElementById('js-search-name-text-field');
	let categoriesNames = [];

	/* checkbox elements */
	let reviewCheckBox = document.getElementById('js-add-review-checkbox');
	let imageCheckBox = document.getElementById('js-add-image-checkbox');
	let flagCheckBox = document.getElementById('js-flag-business-checkbox');
	let editCheckBox = document.getElementById('js-edit-business-checkbox');

	/* business listing elements */
	let businessListings = document.getElementById('js-business-show');
	let detailedListingMenu = document.getElementById('js-detailed-listing-menu');

	/* add business form elements */
	let newBusinessButton = document.getElementById('js-add-button');
	let newBusCatSelect = document.getElementById('js-new-bus-select');

	/* admin hidden button element */
	let hiddenAdminButton = document.getElementById('js-admin-hidden-button');

	/* admin login panel elements */
	let adminPanel = document.getElementById('js-admin-panel-container');
	let adminMenu = document.getElementById('js-admin-menu-container');
	let adminPanelLogin = document.getElementById('js-admin-login-button');
	let adminUsernameField = document.getElementById('js-admin-username')
	let adminPasswordField = document.getElementById('js-admin-password')
	let adminPanelLogout = document.getElementById('js-admin-logout-button')
	let adminPanelForm = document.getElementById('js-admin-login')
	let adminUserInfo = document.getElementById('js-admin-user-info')
	/* admin index table elements */
	let indexTable = document.getElementById('admin-entry-table')
	/* admin details table elements */
	let detailsTable = document.getElementById('entry-details-tables')
	let backButton = document.getElementById('admin-back-button')
	let rejectButton = document.getElementById('admin-reject-button')
	let addNotesButton = document.getElementById('admin-notes-button')
	let newNotesSubmitButton = document.getElementById('admin-submit-notes-field')
	let notesForm = document.getElementById('admin-notes-form')
	let timeDateEl = document.getElementById('admin-login-date')

	/* container elements */
	let sponsListContainer = document.getElementById('sponsored-listing-container')
	let adsContainer = document.getElementById('ads-container')
	let searchBarContainer = document.getElementById('js-searchbar-container')
	let listingsContainer = document.getElementById('listings-container')
	let newBusContainer = document.getElementById('js-new-business-container')
	let mapContainer = document.getElementById('js-map')
	let businessDetails = document.getElementById('js-business-listing-details')
	/* Form Submit Elements */
	let newBusForm = document.getElementById('js-new-bus-form');
	let newReviewForm = document.getElementById('js-new-review-form');

	/* Search Bar Toggle Functions */
	function toggleCategoryMenu() {
		listingsContainer.style.display = 'none';
		searchByName.style.display = 'none';
		searchByCategory.style.display = 'block';
		/* prevent redundant calls to api */
		if (CATS.length === 0) {
				collectCategories();
		};
		renderCategoriesMenu();
	}

	function toggleNameMenu() {
		searchNameField.value = '';
		listingsContainer.style.display = 'none';
		searchByName.style.display = 'block';
		searchByCategory.style.display = 'none';
	}

	/* search by name functions */
	function retrieveSearchNameResults(){
		detailedListingMenu.style.display = 'none';
		listingsContainer.style.display = 'block';
		postSearchByName(searchNameField.value);
		searchNameField.value = '';
	}

	function retrieveSearchCategoryResults() {
		detailedListingMenu.style.display = 'none';
		listingsContainer.style.display = 'block';
		let category = document.getElementById('js-category-select').value
		let results = postSearchByCategory(category);
	}

	/* Listings Checkbox Toggle Forms Functions */
	function toggleReviewForm() {
		$('#js-add-review-form-container').toggle();
	}

	function toggleImageForm() {
		$('#js-add-image-form-container').toggle();
	}

	function toggleEditForm() {
		$('#js-suggest-edit-form-container').toggle();
	}

	function toggleFlagForm() {
		$('#js-flag-business-form-container').toggle();
	}

	function toggleNewBusinessForm() {
		$('#js-add-business-form-container').toggle();
		if (CATS.length === 0) {
					collectCategories();
			};
			renderNewBusCatSelect();
	}

	/* API REQUESTS */
	/* Search Bar API request functions */
	function collectCategories() {
		try {
			url = 'http://localhost:3000/categories'
			fetch(url)
			.then(resp => resp.json())
			.then(json => storeCategories(json))
		}
		catch(err) {
			console.log(error.message);
		}
	}

	function postSearchByName(name) {
		let data = {'name': name}
		let configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		fetch('http://localhost:3000/index_by_name', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(json => returnResults(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	function postSearchByCategory(category){
		let data = {'category_name': category}
		let configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		fetch('http://localhost:3000/index_by_category', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(json => returnResults(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	function postRetrieveObject(name){
		let data = {'name': name}
		let configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		fetch('http://localhost:3000/business', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(json => returnDetailedResults(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	function postForm(data) {
		console.log(data)
		let configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		fetch('http://localhost:3000/entries/new', configObj)
			.then(resp => {
				return resp.json();
		})
			.then(json => console.log(json)
		)
	}
	catch(err) {
			alert('Post request failed see console for further details!');
			console.log(error.message);
		}
	}

	/* ADMIN API FUNCTIONS  */
	function indexPendingEntries() {
		try {
			url = 'http://localhost:3000/entries'
			fetch(url)
			.then(resp => resp.json())
			.then(json => buildEntries(json))
		}
		catch(err) {
			console.log(error.message);
		}
	}

	/* Search Results functions */
	function storeCategories(data){
		let categoryObjects = Array.from(data);
		CATS = categoryObjects.map((el) => {
			return el["name"]
		})
	}

	function returnResults(data){
		data = Array.from(data)
		if (data[0] == undefined) {
			appendErrorMsg("NOT FOUND");
		} else {
			renderIndex(data)
		}
	}

	function returnDetailedResults(data){
		let busObj = buildBusObj(data);
		if (busObj != undefined) {
			renderDetailedBusListing(busObj[0]);
			renderMap(busObj[1]);
			let imgs = busObj[2].flat();
			let reviews = busObj[3].flat();
			imgs.forEach(el => renderImage(el))
			reviews.forEach(el => renderReview(el))
		}
	}

	function appendErrorMsg(msg){
		businessListings.innerHTML = '';
		let errorMessage = document.createElement('h4');
		errorMessage.innerHTML = `${msg}`
		businessListings.appendChild(errorMessage);
	}

	/* Instance builder functions */
	function checkDuplicate(busName) {
		let allNames = ALL.map(el => el.name)
		let duplicate = allNames.includes(busName)
		return duplicate;
	}

	function buildBusObj(data) {
		let duplicate = checkDuplicate(data["name"]);
		if (duplicate == false) {
			let busObjArray = [];
			let id = data["id"];
			let name = data["name"]
			let categories = Object.values((data["categories"][0]))
			let overallRating = data["listing"]["overall_rating"];
			let address = data["listing"]["address"];
			let phoneNumber = data["listing"]["phone_number"];
			let website = data["listing"]["website"];
			let business = new Business(id, name, categories, overallRating, address, phoneNumber, website);
			let map = mapBuilder(data["map"]);
			let imagesCollection = imagesBuilder(data["images"]);
			let reviewsCollection = reviewsBuilder(data["reviews"]);
			busObjArray.push(business, map, imagesCollection, reviewsCollection)
		 return busObjArray;
	 	}
	}

	function mapBuilder(mapData) {
		let lat = mapData['lat'];
		let lng = mapData['lng'];
		let newMap = new GoogleMap(lat, lng);
		return newMap;
	}

	function imagesBuilder(imagesData){
		let imageCollection = []
		imagesData.map((el) => {
			let contributor = el["contributor"];
			let date = el["date"];
			let description = el["description"];
			let url = el["url"];
			let newImage = new Image(contributor, date, description, url);
			imageCollection.push(newImage);
		})
		return imageCollection;
	}

	function reviewsBuilder(reviewsData){
		let reviewsCollection = []
		reviewsData.map(el => {
			let content = el['content'];
			let contributor = el["contributor"];
			let date = new Date();
			let rating = el["rating"];
			let newReview = new Review(rating, content, contributor, date)
			reviewsCollection.push(newReview);
		})
		return reviewsCollection;
	}

	/* Render functions */
	function renderCategoriesMenu() {
		if (searchCategoryMenu.children.length === 0 ){
			let catMenu = document.createElement('div');
			let html = '<select id= "js-category-select">';
			let cats = CATS.map((el) => {
				return `<option value='${el}'> ${el} </option>`;
			})
			html += cats + '</select>';
			catMenu.innerHTML = html;
			searchCategoryMenu.appendChild(catMenu)
		}
	}

	function renderDetailedBusListing(busObj){
		businessListings.innerHTML = '';
		detailedListingMenu.style.display = 'block';
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `<h3 id='listing-bus-name'>   ${busObj.name}</h3><p>Rating: ${busObj.overallRating}<br>Categories: ${busObj.categories}<br>${busObj.address}<br>${busObj.phoneNumber}<br><a href='${busObj.website}'>${busObj.website}</a><br></p>`;
		businessListings.appendChild(newDiv);
	}

	function renderIndex(resultsList){
		businessListings.innerHTML = '';
		resultsList.forEach(busObj => renderBus(busObj));
	}

	function renderBus(busObj){
		let newDiv = document.createElement('div');
		let button =
		newDiv.innerHTML = `<input type='button' class='js-bus-select' value='${busObj.name}'>`;
		businessListings.appendChild(newDiv);
		let buttonCollection = document.querySelectorAll('input.js-bus-select')
		buttonCollection.forEach((busButton) => {
			busButton.addEventListener('click', bus => {
				let name = bus.target.value
				postRetrieveObject(name);
			})
		})
	}

	function renderMap(mapObj){
		mapContainer.style.display = 'block';
		mapObj.initMap(mapObj.lat, mapObj.lng);
	}

	function renderImage(imgObj){
		businessDetails.style.display = "block";
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `<img src="${imgObj.url}"></img><br><p>${imgObj.contributor}<br>${imgObj.date}<br>${imgObj.description}<br><br></<p>`;
		businessDetails.appendChild(newDiv);
	}

	function renderReview(reviewObj){
		businessDetails.style.display = "block";
		let newDiv = document.createElement('div');
		newDiv.innerHTML = `<p>${reviewObj.content}<br>Rating: ${reviewObj.rating}<br>${reviewObj.contributor}<br>${reviewObj.date}</p>`;
		businessDetails.appendChild(newDiv);
	}

	/* New Bus Form Select */
	function renderNewBusCatSelect(){
		if (CATS.length == 0){
			collectCategories();
		}
		let catMenu = document.createElement('div');
		let html = '<select id= "cat-select" multiple>';
		let cats = CATS.map((el) => {
			return `<option value='${el}'> ${el} </option>`;
		})
		html += cats + '</select>';
		catMenu.innerHTML = html;
		newBusCatSelect.appendChild(catMenu)
	};

	/* Form Post functions */
	function createPostData(event, busName) {
		let data = Array.from(event.target.elements)
		let dataArray = []
		data = data.forEach(el => {
			dataArray.push([el["id"], el["value"]])
		})
		dataArray.pop
		dataArray.push(["name", busName]);
		postForm(dataArray);
	}

	function getBusNameForAssoForm(event){
		let busName = ''
		/* checks for new business form vs. forms for reviews, image, update, or flag exisiting */
		if (event.target[0].id === 'new-bus'){
			busName = document.getElementById('bus-name').value;
		} else {
			busName = document.getElementById('listing-bus-name').innerText;
		}
		return busName;
	}








	/* Admin Panel functions */
	function toggleAdminLogIn() {
		$('#js-admin-login-container').toggle();
	}

	function showAdminView(username, password) {
		logInAdmin(username, password);
		if (loggedIn() === true) {
			sponsListContainer.style.display = "none";
			adsContainer.style.display = "none";
			searchBarContainer.style.display = "none";
			listingsContainer.style.display = "none";
			newBusContainer.style.display = "none";
			adminPanel.style.display = "block";
			adminMenu.style.display = "block";
			hiddenAdminButton.style.display = "none";
			adminPanelLogin.style.display = "none";
			adminPanelLogout.style.display = "block";
			adminPanelForm.style.display = "none";
			adminUserInfo.style.display = "block";
			appendCurrentDateTime();
			generatePendingEntryTable();
		} else {
			alert('You are not authorized to access admininstrative tasks!')
		}
	}

	function logInAdmin(username, password) {
		/* login admin user upon secure authentication and authorization)*/
		loggedIn();
	}

	function loggedIn() {
		return true;
	}

	function generatePendingEntryTable(){
		indexPendingEntries();
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
						indexTable.style.display = 'none';
						detailsTable.style.display = 'block';
						generateDetailedEntryTable(event);
					}
				})
			})
		}, 800);
	}

	function buildEntries(entries){
		entries.forEach(el => {
			id = el['id'];
			entryType = el['entry_type'];
			busId = el['bus_id'];
			busName = el['bus_name'];
			dateCreated = el['date'];
			contributor = el['contributor'];
			contributorEmail = el['contributor_email'];
			dataObject = el['data_object'];
			status = el['status'];
			resolvedDate = el['resolved_date'];
			adminId = el['admin_id'];
			notes = el['notes'];

			newEntry = new Entry(id, entryType, busId, busName, dateCreated, contributor, contributorEmail, dataObject, status, resolvedDate, adminId, notes)
		})
	}


	function generateDetailedEntryTable(event){
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

	function rejectEntry(event){
		let entryId = document.getElementById('detailed-entry-table-1').lastChild.firstChild.textContent
		let adminId = getAdminId();
		let resolvedDate = new Date();
		let status = "rejected"
		data = {id: entryId, resolved_date: resolvedDate, admin_id: adminId, status: status, }
		postEntryUpdate(data);
		displayRejected(adminId, resolvedDate, status);
	}

	function getAdminId(){
		/* refactor when login functionality is added */
		let adminId = document.getElementById('admin-number').nextSibling.textContent.split("\n")[0].split(" ")[1]
		return adminId;
	}

	function postEntryUpdate(data) {
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

	function entryUpdateSuccess() {
		let updateSuccess = document.createElement('h4');
		updateSuccess.innerText = "Entry Successfully Updated"
		detailsTable.appendChild('updateSuccess');
	}

	function displayRejected(adminId, resolvedDate, status) {
		let adminIdEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[0];
		let resolvedDateEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[2];
		let statusEl = document.getElementById('detailed-entry-table-3').firstElementChild.childNodes[1];
		let cellDataArray = [[adminIdEl, adminId], [resolvedDateEl, resolvedDate],[statusEl, status]]
		cellDataArray.forEach( el => updateCell(el[0], el[1]))
	}

	function showNotesForm(){
		notesForm.style.display = 'block';
	}

	function addNotes() {
		let id = document.getElementById('detailed-entry-table-1').lastChild.children[0].innerText
		let entryId = parseInt(id, 10);
		let notes = document.getElementById('js-entry-notes').value
		let adminId = document.getElementById('detailed-entry-table-3').lastChild.firstChild.textContent
		data = { id: entryId, admin_id: adminId, notes: notes}
		postEntryUpdate(data);
		let noteCell = document.getElementById('detailed-entry-table-3').lastChild.lastChild
		updateCell(noteCell, notes)
		notesForm.style.display = 'none';
		document.getElementById('js-entry-notes').value = '';
	}

	function updateCell(cell, tableData){
		cell.innerText = tableData;
	}

	function appendCurrentDateTime(){
		let timeDate = document.createElement('span')
		timeDate.innerText = new Date;
		timeDateEl.appendChild(timeDate)
	}

	/* EVENT LISTENERS */

	/* Search Bar Listeners */
	nameRadioSelect.addEventListener("click", toggleNameMenu);
	categoryRadioSelect.addEventListener("click", toggleCategoryMenu);

	document.getElementById('js-by-category-button').addEventListener('click', retrieveSearchCategoryResults);

	document.getElementById('js-by-name-button').addEventListener('click', retrieveSearchNameResults)

	/* Business Listings Checkbox Listeners */
	reviewCheckBox.addEventListener("change", toggleReviewForm);
	imageCheckBox.addEventListener("change", toggleImageForm);
	flagCheckBox.addEventListener("change", toggleFlagForm);
	editCheckBox.addEventListener("change", toggleEditForm);

	/* New Business Form Listener */
	newBusinessButton.addEventListener("click", toggleNewBusinessForm);

 /* Form Submit Listeners */
 function formSubmitted(event) {
		event.target.reset();
		let submittedEl = document.createElement('p');
		submittedEl.className = "succMsg"
		submittedEl.innerHTML = "Successfully submitted!";
		event.target.style.display = "none";
		detailedListingMenu.appendChild(submittedEl)
 }

	/* Form Event Listeners */
	document.addEventListener( "submit", function ( event ) {
		event.preventDefault();
		let busName = getBusNameForAssoForm(event);
		createPostData(event, busName);
		formSubmitted(event);
	});

	/* remove form success message */
	document.addEventListener( 'click', function (event) {
		[].forEach.call(document.querySelectorAll('.succMsg'),function(e){
		  e.parentNode.removeChild(e);
		});
	})

	/* Admin Panel Listeners */
	hiddenAdminButton.addEventListener("click", toggleAdminLogIn);
	adminPanelLogin.addEventListener("click", showAdminView);
	rejectButton.addEventListener("click", function(event) {
		rejectEntry(event);
	})
	addNotesButton.addEventListener("click", showNotesForm);
	newNotesSubmitButton.addEventListener("click", addNotes)
	backButton.addEventListener("click", function() {
		let indexBody = document.getElementById('index-entry-table-body');
		indexBody.innerHTML = "";
		ENTRIES = [];
		generatePendingEntryTable();
		detailsTable.style.display = "none";
		indexTable.style.display = "block";
})


	/* Clear Form to set initial state */
	function resetPage() {
	  reviewCheckBox.checked = false;
		imageCheckBox.checked = false;
		flagCheckBox.checked = false;
		editCheckBox.checked = false;
		nameRadioSelect.checked = true;
		categoryRadioSelect.checked = false;
		listingsContainer.style.display = 'none';
		detailedListingMenu.style.display = 'none';
		mapContainer.style.display = "none";
		businessDetails.style.display = "none";
		let elements = document.querySelectorAll('input[type="text"]');
		Array.from(elements).forEach(el => el.value = '')
		/* clear admin forms and fields */
		indexTable.style.display = 'block';
		detailsTable.style.display = 'none';
		document.getElementById('admin-notes-form').style.display = 'none';
	document.getElementById('js-entry-notes').value = '';

		/* clear global variables */
		ALL = [];
		CATS = [];
		ENTRIES = [];

		/* repopulate categories for drop down menu */
		collectCategories();
	}
	resetPage();
}
