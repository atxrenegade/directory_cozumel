class AppStorage {
	constructor(){
		this.cats = [];
		this.entries = [];
		this.attributes = [];
		this.allBusinesses = [];
		this.response;
		this.result = [];
	}

	updateCats(data) {
		let catsArray = []
		data.forEach(el => catsArray.push(el))
		this.cats = catsArray;
	}

	updateEntries(data) {
		let entriesArray = []
		data.forEach(el => entriesArray.push(el))
		this.entries = entriesArray;
	}

	updateAttributes(data) {
		let attributesArray = []
		data.forEach(el => attributesArray.push(el))
		this.attributes = attributesArray;
	}

	updateAllBusinesses(data) {
		let allBusinessesArray = []
		data.forEach(el => allBusinessesArray.push(el))
		this.allBusinesses = allBusinessesArray;
	}

	updateResponse(data) {
		this.response = data;
	}

	updateResult(data) {
		let resultArray = []
		data.forEach(el => resultArray.push(el))
		this.result = resultArray;
	}
}
