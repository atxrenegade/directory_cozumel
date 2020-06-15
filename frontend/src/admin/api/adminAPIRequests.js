// ADMIN API requests
	function buildEntries(entries) {
		let entryObjs = entries.forEach((el) => {
			new Entry(el['id'], el['entry_type'], el['business_id'], el['business_name'], el['date'], el['contributor'], el['contributor_email'], el['data_object'], el['status'], el['resolved_date'], el['admin_id'], el['notes'])
		})
		Entry.all(entryObjs);
	}

	function buildAttsArray(data){
		let attributes = data.map(el => {return el.replace(/_/g, ' ') })
		storage.updateAttributes(attributes)
	}

	function buildEntriesIndexPostReq(searchType, authType) {
		const data = { searchType, authType }
		let params = { method: 'POST' , url: 'http://localhost:3000/entries/index', data, callback: buildEntries }
		dynamPostReq(params)
	}

	function postDatabaseObject(data) {
		const params = { method: 'POST' , url: 'http://localhost:3000/entries/build_object', data, callback: storage.updateResult }
		dynamPostReq(params);
	}

	function searchEntries(event, propertyToSearch, searchVal) {
		const params = {method: 'POST', url: 'http://localhost:3000/entries/search', data: { property: propertyToSearch, searchVal }, callback: buildEntries }
		dynamPostReq(params);
	}

	function buildCreatePostReq(action, dbModel, attsObj, event){
		const params = { method: 'POST', url: `http://localhost:3000/${dbModel.toLowerCase()}`, data: attsObj, callback: storage.updateResult }
		dynamPostReq(params)
	}

	function buildUpdatePostReq(action, dbModel, attsObj, event){
		const params = { method: 'PUT', url: `http://localhost:3000/${dbModel.toLowerCase()}/${instance}`, data: { id: instance, attributes: attsObj }, callback: storage.updateResult };
		dynamPostReq(params);
	}

	function buildDeletePostReq(dbModel, recordID) {
		const params = { method: 'DELETE', url: `http://localhost:3000/${dbModel.toLowerCase()}/${recordID}`, data: { id: recordID }, callback: storage.updateResult };
		dynamPostReq(params);
	}

	function getAttributes(dbType) {
		const params = { url: `http://localhost:3000/${dbType}/attributes`, callback: buildAttsArray };
		dynamGetReq(params);
	}

	function searchIdByName(dbType, id, searchType) {
		const name = document.getElementById(`${id}`).value
		const params = { method: 'POST', url: `http://localhost:3000/${searchType.toLowerCase()}/index_by_name`, data: { name }, callback: storage.updateResult }
		dynamPostReq(params)
	}

	function getAssociatedRecords(dbType, business_id){
		const params = { method: 'POST', url:`http://localhost:3000/${dbType}/index_associated`, data: { business_id, callback: storage.updateResult } }
		dynamPostReq(params);
	}

	function findRecordToDelete(recordId, dbType){
		const params = { url: `http://localhost:3000/${dbType}/${recordId}`, callback: storage.updateResult }
		dynamGetReq(params)
	}

	function postEntryUpdate(data) {
		const params = { method: 'POST', url: 'http://localhost:3000/entries/update', data , callback: storage.updateResult }
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

	export { buildEntries, buildAttsArray,  buildEntriesIndexPostReq, postDatabaseObject, searchEntries, buildCreatePostReq, buildDeletePostReq, getAttributes, getAssociatedRecords, searchIdByName, buildUpdatePostReq, findRecordToDelete, postEntryUpdate, dynamPostReq, dynamGetReq
	}
