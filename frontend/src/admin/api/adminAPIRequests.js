	// ADMIN API requests
	function adminAPIRequests(storage, Entry) {
		const responseCallback = storage.updateOrCreateStorage;

		return {
			buildEntries: function buildEntries(entries) {
				let entryObjs = [];
				entries.forEach((el) => {
					let entry  = new Entry(el['id'], el['entry_type'], el['business_id'], el['business_name'], el['date'], el['contributor'], el['contributor_email'], el['data_object'], el['status'], el['resolved_date'], el['admin_id'], el['notes'])
					entryObjs.push(entry);
				})
				storage.updateOrCreateStorage('entries', entryObjs)
			},

			buildAttsArray: function buildAttsArray(data){
				let attributes = data.map(el => {return el.replace(/_/g, ' ') })
				storage.updateOrCreateStorage(attributes);
			},

			buildEntriesIndexPostReq: function buildEntriesIndexPostReq(searchType, authType) {
				const data = { searchType, authType }
				let params = { method: 'POST' , url: 'http://localhost:3000/entries/index', data, callback: this.buildEntries }
				this.dynamPostReq(params)
			},

			postDatabaseObject: function postDatabaseObject(data) {
				const params = { method: 'POST' , url: 'http://localhost:3000/entries/build_object', data, callback: responseCallback('response', data) }
				this.dynamPostReq(params);
			},

			searchEntries: function searchEntries(event, propertyToSearch, searchVal) {
				const params = {method: 'POST', url: 'http://localhost:3000/entries/search', data: { property: propertyToSearch, searchVal }, callback: this.buildEntries }
				this.dynamPostReq(params);
			},

			buildCreatePostReq: function buildCreatePostReq(action, dbModel, attsObj, event){
				const params = { method: 'POST', url: `http://localhost:3000/${dbModel.toLowerCase()}`, data: attsObj, callback: responseCallback('response', data) }
				this.dynamPostReq(params)
			},

			buildUpdatePostReq: function buildUpdatePostReq(action, dbModel, attsObj, event){
				const params = { method: 'PUT', url: `http://localhost:3000/${dbModel.toLowerCase()}/${instance}`, data: { id: instance, attributes: attsObj }, repsonseCallback };
				this.dynamPostReq(params);
			},

			buildDeletePostReq: function buildDeletePostReq(dbModel, recordID) {
				const params = { method: 'DELETE', url: `http://localhost:3000/${dbModel.toLowerCase()}/${recordID}`, data: { id: recordID }, callback: responseCallback('response', data) };
				this.dynamPostReq(params);
			},

			getAttributes: function getAttributes(dbType) {
				const params = { url: `http://localhost:3000/${dbType}/attributes`, callback: this.buildAttsArray };
				this.dynamGetReq(params);
			},

			searchIdByName: function searchIdByName(dbType, id, searchType) {
				const name = document.getElementById(`${id}`).value
				const params = { method: 'POST', url: `http://localhost:3000/${searchType.toLowerCase()}/index_by_name`, data: { name }, callback: responseCallback('response', data) }
				this.dynamPostReq(params)
			},

			getAssociatedRecords: function getAssociatedRecords(dbType, business_id){
				const params = { method: 'POST', url:`http://localhost:3000/${dbType}/index_associated`, data: { business_id, callback: responseCallback('response', data) } }
				this.dynamPostReq(params);
			},

			findRecordToDelete: function findRecordToDelete(recordId, dbType){
				const params = { url: `http://localhost:3000/${dbType}/${recordId}`, callback: responseCallback('response', data) }
				this.dynamGetReq(params)
			},

			postEntryUpdate: function postEntryUpdate(data) {
				const params = { method: 'POST', url: 'http://localhost:3000/entries/update', data , callback: responseCallback('response', data) }
				this.dynamPostReq(params)
			},

			dynamPostReq: function dynamPostReq(params) {
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
			},

			dynamGetReq: function dynamGetReq(params){
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
		}
	}

	export { adminAPIRequests };
