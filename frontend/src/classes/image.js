export default class Image {
	constructor(contributor, date, description, url) {
		this.contributor = contributor;
		this.date = date;
		this.description = description;
		this.url = url;
	}

	renderImage(){
		return `<figure><img src='${this.url}' alt='missing'></img><figcaption>${this.description}<br>${this.date}<br>${this.contributor}<br><br></figcaption></figure>`
	}

	static imagesBuilder(imagesData){
		let imageCollection = []
		imagesData.map((el) => {
			let contributor = el['contributor'];
			let date = el['date'];
			let description = el['description'];
			let url = el['url'];
			let newImage = new Image(contributor, date, description, url);
			imageCollection.push(newImage);
		})
		return imageCollection;
	}
}
