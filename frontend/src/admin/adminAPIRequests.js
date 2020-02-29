static searchEntries(event) {
	const propertyToSearch = adminInterface.getRadioVal(event);
	const searchVal = event.target.parentNode[8].value;
	const method = 'POST'
	const url = 'http://localhost:3000/entries/search'
	const data = { property: propertyToSearch, search_val: searchVal }
	const callbackFunction = adminInterface.buildEntries;
	adminInterface.dynamFormReq(method, url, data, callbackFunction);
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
	const callback = adminInterface.dynamFormResp;
	adminInterface.dynamFormReq(method, url, data, callback)
}

static getAttributes(dbType, callback = adminInterface.dynamFormResp){
	const url = `http://localhost:3000/${dbType}/attributes`
	adminInterface.dynamGetReq(url, callback)
}


static findRecordToDelete(dbType, id){
	const recordId = document.getElementById(`${id}`).value;
	globalResult = [];
	const url = `http://localhost:3000/${dbType}/${recordId}`
	const callback = adminInterface.dynamFormResp;
	adminInterface.dynamGetReq(url, callback)
	const elToAppendTo = document.getElementById('super-admin-create-update-delete')
	let msg;
	setTimeout(function(){
		globalResult.length < 1? msg = 'No Matches Found!' : msg = 'Matching Instances Found!'
		adminInterface.displayResults(elToAppendTo, msg)
		adminInterface.confirmRecordToDelete(dbType, id, elToAppendTo)
	}, 1000)
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
	const callback = adminInterface.dynamFormResp;
	adminInterface.dynamFormReq(method, url, data, callback)
	const elToAppendTo = document.getElementById('super-admin-create-update-delete')
	let msg;
	globalResult.length < 1 ? msg = 'No Records Match Your Query' : msg = 'Matching Associated Records'

	setTimeout(adminInterface.displayResults.bind(null, elToAppendTo, msg), 500)
	setTimeout(adminInterface.appendIdFormForAssoc.bind(null,dbType), 1000)
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
		.then(json => adminInterface.dynamFormResp(json))
	}
	catch(err) {
		alert('Error. See console for further details!');
		console.log(err.message);
	}
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
		.then(json => adminInterface.dynamFormResp(json))
	}
	catch(err) {
		alert('Error. See console for further details!');
		console.log(err.message);
	}
}

static postEntryUpdate(data){
	adminInterface.dynamFormReq(method: 'POST', url: 'http://localhost:3000/entries/update', data: data, callback: adminInterface.dynamFormResp)
}

static dynamGetReq(url, callback){
	try {
		fetch(url)
		.then(resp => resp.json())
		.then(json => callback(json))
	}
	catch(err) {
		alert('Error. See console for further details!');
		console.log(err.message);
	}
}

static dynamFormReq(params) {
	const configObj = {
		method: params['method'],
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
	},
	body: JSON.stringify(params['data'])
	};
	try {
		fetch(params['url'], configObj)
		.then(resp => {
			return resp.json();
		})
		.then(json => params['callback'](json))
	}
	catch(err) {
		alert('Error. See console for further details!');
		console.log(err.message);
	}
}

function dynamFormResp(data){
	data === null ? globalResult[0] = 'Error Processing Request' : globalResult[0] = data;
	console.log(globalResult[0])
	return globalResult[0];
}
