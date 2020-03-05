class AppStorage {
	constructor(){
		this.cats = [];
		this.attributes = [];
		this.response;
		this.result = [];
	}

	updateCats(data) {
		let catsArray = []
		data.forEach(el => catsArray.push(el))
		this.cats = catsArray;
	}

	updateAttributes(data) {
		let attributesArray = []
		data.forEach(el => attributesArray.push(el))
		this.attributes = attributesArray;
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
