function appStorage(){

	this.setCats = function(data) {
		sessionStorage.setItem('cats', data);
	}

	this.getCats = function(data) {
		return sessionStorage['cats'];
	}

	this.setEntries = function(data) {
		sessionStorage.setItem('entries', data);
	}

	this.getEntries = function(data) {
		return sessionStorage['entries'];
	}

	this.setAttributes = function(data) {
		sessionStorage.setItem('attributes', data);
	}

	this.getAttributes = function(data) {
		return sessionStorage['attributes'];
	}

	this.setAllBusinesses = function(data) {
		sessionStorage.setItem('AllBusinesses', data);
	}

	this.getAllBusinesses = function(data) {
		return sessionStorage['AllBusinesses'];
	}

	this.setResponse = function(data) {
		sessionStorage.setItem('response', data);
	}

	this.getResponse = function(data) {
		return sessionStorage['response'];
	}

	this.setResult = function(data) {
		sessionStorage.setItem('result', data);
	}

	this.getResult = function(data) {
		return sessionStorage['result'];
	}

	this.setAdmin = function(data) {
		sessionStorage.setItem('admin', data);
	}

	this.getAdmin = function(data) {
		return sessionStorage['admin'];
	}
}

module.exports = appStorage;
