class appStorage {
	constructor(){
		this.cats = [];
		this.entries = [];
		this.attributes = [];
		this.allBusinesses = [];
		this.response;
		this.result = [];
		this.admin;
	}

	set cats(data) {
		let catsArray = []
		data.forEach(el => catsArray.push(el))
		this.cats = catsArray;
	}

	set entries(data) {
		data.forEach(el => this.entries.push(el))
	}

	set attributes(data) {
		data.forEach(el => attributes.push(el))
	}

	set allBusinesses(data) {
		data.forEach(el => allBusinesses.push(el))
	}

	set response(data) {
		this.response = data
	}

	set result(data) {
		data.forEach(el => result.push(el))
	}

	set admin(data) {
		this.admin = data;
	}
}
