export default class Review {
	constructor(rating, content, contributor, contributorEmail, date, id){
		this.rating = rating;
		this.content = content;
		this.contributor = contributor;
		this.contributorEmail = contributorEmail;
		this.date = new Date();
		this.id = id;
	}
}
