export default class Business {
	constructor(id, name, categories, overallRating, address, phoneNumber, website) {
		this.id = id;
		this.name = name;
		this.categories = categories;
		this.overallRating = overallRating;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.website = website;
	}

	renderBusListing(LANGUAGE) {
		if (LANGUAGE == 'en'){
			let rating;
			this.overallRating === 0 ? rating = 'Not Yet Rated' : rating = `Overall Rating: ${this.overallRating}`
			const listingHTML = `<h3 id='listing-bus-name'> ${this.name}</h3>
			Categories:	${this.categories} <br>
			${rating}<br>
			<br>${this.address}
			<br>${this.phoneNumber}
			<br><a href='${this.website}'>${this.website}</a><br><br>`
			return listingHTML
		} else {
			let rating;
			this.overallRating === 0 ? rating = 'Aún Ao Calificado' : rating = `Calificación general: ${this.overallRating}`
			const listingHTML = `<h3 id='listing-bus-name'> ${this.name}</h3>
			Categorias:	${this.categories} <br>
			${rating}<br>
			<br>${this.address}
			<br>${this.phoneNumber}
			<br><a href='${this.website}'>${this.website}</a><br><br>`
			return listingHTML
		}
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
}
