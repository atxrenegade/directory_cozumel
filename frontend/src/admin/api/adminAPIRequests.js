class AdminAPIRequests{
	static buildEntriesIndexPostReq(searchType) {
		const data = { search_type: searchType, auth_type: adminInterface.checkAdminAuth() }
		let params = { method: 'POST' , url: 'http://localhost:3000/entries/index', data: data, callback: adminInterface.buildEntries }
		adminInterface.dynamPostReq(params)
	}

	static postDatabaseObject(data) {
		const params = { method: 'POST' , url: 'http://localhost:3000/entries/build_object', data: data, callback: adminInterface.dynamFormResp }
		adminInterface.dynamPostReq(params);
	}

	static searchEntries(event) {
		const propertyToSearch = adminInterface.getRadioVal(event);
		const searchVal = event.target.parentNode[8].value;
		const params = {method: 'POST', url: 'http://localhost:3000/entries/search', data: { property: propertyToSearch, search_val: searchVal }, callback: adminInterface.buildEntries}
		adminInterface.dynamPostReq(params);
	}

	static buildCreatePostReq(action, dbModel, attsObj, event){
		const params = { method: 'POST', url: `http://localhost:3000/${dbModel.toLowerCase()}`, data: attsObject, callback: adminInterface.dynamFormResp }
		adminInterface.dynamPostReq(params)
	}

	static buildUpdatePostReq(action, dbModel, attsObj, event){
		const params = { method: 'PUT', url: `http://localhost:3000/${dbModel.toLowerCase()}/${instance}`, data: { id: instance, attributes: attsObj }, callback: adminInterface.dynamFormResp }
		adminInterface.dynamPostReq(params)
	}

	static buildDeletePostReq(dbModel, recordID) {
		const params = { method: 'DELETE', url: `http://localhost:3000/${dbModel.toLowerCase()}/${recordID}`, data: { id: recordID }, callback: adminInterface.dynamFormResp }
		adminInterface.dynamPostReq(params)
	}

	static getAttributes(dbType){
		const params = { url: `http://localhost:3000/${dbType}/attributes`, callback: adminInterface.buildAttsArray}
		adminInterface.dynamGetReq(params)
	}

	static searchIdByName(dbType, id, searchType) {
		const name = document.getElementById(`${id}`).value
		const params = { method: 'POST', url: `http://localhost:3000/${searchType.toLowerCase()}/index_by_name`, data: { name: name }, callback: adminInterface.dynamFormResp }
		adminInterface.dynamPostReq(params)
		setTimeout(adminInterface.getAssociatedRecords.bind(null, dbType), 1000)
	}

	static getAssociatedRecords(dbType){
		const params = { method: 'POST', url:`http://localhost:3000/${dbType}/index_associated`, data: { business_id: globalResult[0][0]['id']}, callback: adminInterface.dynamFormResp }
		adminInterface.dynamPostReq(params);
		const elToAppendTo = document.getElementById('super-admin-create-update-delete')
		debugger;
		let msg;
		globalResult.length < 1 ? msg = 'No Records Match Your Query' : msg = 'Matching Associated Records'
		setTimeout(adminInterface.displayResults.bind(null, elToAppendTo, msg), 500)
		setTimeout(adminInterface.appendIdFormForAssoc.bind(null, dbType), 1000)
	}

	static findRecordToDelete(dbType, id){
		const recordId = document.getElementById(`${id}`).value;
		globalResult = [];
		const params = { url: `http://localhost:3000/${dbType}/${recordId}`, callback: adminInterface.dynamFormResp }
		adminInterface.dynamGetReq(params)
		const elToAppendTo = document.getElementById('super-admin-create-update-delete')
		let msg;
		setTimeout(function(){
			globalResult.length < 1? msg = 'No Matches Found!' : msg = 'Matching Instances Found!'
			adminInterface.displayResults(elToAppendTo, msg)
			adminInterface.confirmRecordToDelete(dbType, id, elToAppendTo)
		}, 1000)
	}

	static postEntryUpdate(data) {
		const params = { method: 'POST', url: 'http://localhost:3000/entries/update', data: data , callback: adminInterface.dynamFormResp }
		adminInterface.dynamPostReq(params)
	}

	static dynamPostReq(params) {
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

	static dynamGetReq(params){
		try {
			fetch(params['url'])
			.then(resp => resp.json())
			.then(json => params['callback'](json))
		}
		catch(err) {
			alert('Error. See console for further details!');
			console.log(err.message);
		}
	}

	static dynamFormResp(data){
		(data === null) ? globalResult[0]['msg'] = 'Error Processing Request' : globalResult[0] = data;
		console.log(globalResult[0]['msg'])
		return globalResult;
	}
}
