let allBusinesses = [];

class Business {
	constructor(id, name, categories, overallRating, address, phoneNumber, website) {
		this.id = id;
		this.name = name;
		this.categories = categories;
		this.overallRating = overallRating;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.website = website;
		//how can I recreate this as class variable storing all instances?
		Business.allBusinesses(this);
	}

	renderBusListing(){
		let rating;
		this.overallRating === 0 ? rating = 'not yet rated' : rating = `Overall Rating: ${this.overallRating}`
		const listingHTML = `<h3 id='listing-bus-name'> ${this.name}</h3>
		Categories:	${this.categories} <br>
		${rating}<br>
		<br>${this.address}
		<br>${this.phoneNumber}
		<br><a href='${this.website}'>${this.website}</a><br><br>`
		return listingHTML;
	}

	static buildBusObj(data) {
			const id = data['id'];
			const name = data['name']
			const categories = Object.values((data['categories'][0]))
			const overallRating = data['listing']['overall_rating'];
			const address = data['listing']['address'];
			const phoneNumber = data['listing']['phone_number'];
			const website = data['listing']['website'];
			const business = new Business(id, name, categories, overallRating, address, phoneNumber, website);
			return business
		}

		static allBusinesses(business){
			 // where do I initiate this array value that it is not reset everytime the method is called, if I use two methods a setter and a getter how does the second access the variable value since they dont share the same scope.
			// let allBusinesses = [];
			if (business !== undefined) allBusinesses.push(business)
			return allBusinesses;
		}

		static allBusinessesReset() {
			allBusinesses = [];
		}
}
