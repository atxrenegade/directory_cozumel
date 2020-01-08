class Business {
	constructor(id, name, categories, overallRating, address, phoneNumber, website) {
		this.id = id;
		this.name = name;
		this.categories = categories;
		this.overallRating = overallRating;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.website = website;
		ALL.push(this);
	}


	renderBusListing(){
		let listingHTML = `<h3 id='listing-bus-name'> ${this.name}</h3><p>Rating: ${this.overallRating}<br>Categories: ${this.categories}<br>${this.address}<br>${this.phoneNumber}<br><a href='${this.website}'>${this.website}</a><br></p>`
		return listingHTML;
	}


	static buildBusObj(data) {
			let id = data["id"];
			let name = data["name"]
			let categories = Object.values((data["categories"][0]))
			let overallRating = data["listing"]["overall_rating"];
			let address = data["listing"]["address"];
			let phoneNumber = data["listing"]["phone_number"];
			let website = data["listing"]["website"];
			let business = new Business(id, name, categories, overallRating, address, phoneNumber, website);
			return business
		}
}
