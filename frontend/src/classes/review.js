export default class Review {
	constructor(rating, content, contributor, date){
		this.rating = rating;
		this.content = content;
		this.contributor = contributor;
		this.date = date;
	}

	renderReview(LANGUAGE, formatDate){
		var formattedDate = formatDate((this.date).toISOString());
		var translatedText;
		LANGUAGE == 'eng' ? translatedText = 'Rating:' : translatedText = 'Clasificación:'
		return `<p class='review'>${translatedText} ${this.rating}<br>${this.content}<br>${this.contributor}<br>${formattedDate}<br></p>`
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
