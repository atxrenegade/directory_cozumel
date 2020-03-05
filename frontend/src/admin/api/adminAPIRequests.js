//API requests
// Do I turn all of my callbacks in static functions to call outside of the class instance, I do not want to initate a new instance every time I reference an api calback function
	function buildEntriesIndexPostReq(searchType, authType, callback) {
		const data = { search_type: searchType, auth_type: authType }
		let params = { method: 'POST' , url: 'http://localhost:3000/entries/index', data: data, callback: callback }
		dynamPostReq(params)
	}

	function postDatabaseObject(data, callback) {
		const params = { method: 'POST' , url: 'http://localhost:3000/entries/build_object', data: data, callback: callback }
		dynamPostReq(params);
	}

	function searchEntries(event, propertyToSearch, searchVal, callback) {
		const params = {method: 'POST', url: 'http://localhost:3000/entries/search', data: { property: propertyToSearch, search_val: searchVal }, callback: callback}
		dynamPostReq(params);
	}

	function buildCreatePostReq(action, dbModel, attsObj, event){
		const params = { method: 'POST', url: `http://localhost:3000/${dbModel.toLowerCase()}`, data: attsObject, callback: dynamFormResp }
		dynamPostReq(params)
	}

	function buildUpdatePostReq(action, dbModel, attsObj, event){
		const params = { method: 'PUT', url: `http://localhost:3000/${dbModel.toLowerCase()}/${instance}`, data: { id: instance, attributes: attsObj }, callback: dynamFormResp };
		dynamPostReq(params);
	}

	function buildDeletePostReq(dbModel, recordID) {
		const params = { method: 'DELETE', url: `http://localhost:3000/${dbModel.toLowerCase()}/${recordID}`, data: { id: recordID }, callback: dynamFormResp };
		dynamPostReq(params);
	}

	function getAttributes(dbType, callback){
		const params = { url: `http://localhost:3000/${dbType}/attributes`, callback: callback};
		dynamGetReq(params);
	}

	function searchIdByName(dbType, id, searchType) {
		const name = document.getElementById(`${id}`).value
		const params = { method: 'POST', url: `http://localhost:3000/${searchType.toLowerCase()}/index_by_name`, data: { name: name }, callback: dynamFormResp }
		dynamPostReq(params)
	}

	function getAssociatedRecords(dbType){
		const params = { method: 'POST', url:`http://localhost:3000/${dbType}/index_associated`, data: { business_id: globalResult[0][0]['id']}, callback: dynamFormResp }
		dynamPostReq(params);
	}

	function findRecordToDelete(recordId, dbType){
		const params = { url: `http://localhost:3000/${dbType}/${recordId}`, callback: dynamFormResp }
		dynamGetReq(params)
	}

	function postEntryUpdate(data) {
		const params = { method: 'POST', url: 'http://localhost:3000/entries/update', data: data , callback: dynamFormResp }
		dynamPostReq(params)
	}

	function dynamPostReq(params) {
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

	function dynamGetReq(params){
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

	function dynamFormResp(data){
		(data === null) ? storage.setResult({'msg':'Error Processing Request'}) :
		storage.setResult(data)
		console.log(storage.result)
		return storage.result;
	}
