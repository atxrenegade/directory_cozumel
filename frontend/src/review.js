class Review {
	constructor(busID, rating, content, contributor, date, id){
		this.busID = busID;
		this.rating = rating;
		this.content = content;
		this.contributor = contributor;
		this.date = new Date();
		this.id = id;
	}
}
