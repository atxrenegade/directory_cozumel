export default class Review {
	constructor(rating, content, contributor, date){
		this.rating = rating;
		this.content = content;
		this.contributor = contributor;
		this.date = date;
	}

	renderReview(){
		return `<p>${this.content}<br>Rating: ${this.rating}<br>${this.contributor}<br>${this.date}</p>`
	}

	static reviewsBuilder(reviewsData){
		let reviewsCollection = []
		reviewsData.map(el => {
			let content = el['content'];
			let contributor = el['contributor'];
			let date = new Date();
			let rating = el['rating'];
			let newReview = new Review(rating, content, contributor, date)
			reviewsCollection.push(newReview);
		})
		return reviewsCollection;
	}
}
