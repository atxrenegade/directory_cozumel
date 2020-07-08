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
		if (LANGUAGE == 'eng'){
			let rating;
			this.overallRating === 0 ? rating = 'Not Yet Rated' : rating = `<b>Overall Rating:</b> ${this.overallRating}`
			const listingHTML = `<div class='listing-div'><h3 id='listing-bus-name'> ${this.name}</h3>
			<b>${this.categories}</b><br>
			${rating}<br>
			<br>${this.address}
			<br>${this.phoneNumber}
			<br><a href='${this.website}'>${this.website}</a><br><br></div>`
			return listingHTML
		} else {
			let rating;
			this.overallRating === 0 ? rating = 'Aún Ao Calificado' : rating = `<b>Calificación general:</b>  ${this.overallRating}`
			const listingHTML = `<h3 id='listing-bus-name'> ${this.name}</h3>
			<b>${this.categories[1]}</b> <br>
			${rating}<br>
			<br>${this.address}
			<br>${this.phoneNumber}
			<br><a href='${this.website}'>${this.website}</a><br><br>`
			return listingHTML
		}
		return listingHTML;
	}

	renderIndexBusListing(LANGUAGE) {
		if (LANGUAGE == 'eng'){
			let rating;
			this.overallRating === 0 ? rating = 'Not Yet Rated' : rating = `<b>Overall Rating:</b> ${this.overallRating}`
			const listingHTML = `<div class='listing-div'><h3 id='listing-bus-name'> ${this.name}</h3>
			<b>${this.categories}</b><br>
			${rating}<br>
			<br>${this.address}
			<br>${this.phoneNumber}
			<br><a href='${this.website}'>${this.website}</a><br><button id='js-bus-${this.id}-more' class='index-listing-buttons'>Details</button><br></div>`
			return listingHTML
		} else {
			let rating;
			this.overallRating === 0 ? rating = 'Aún Ao Calificado' : rating = `<b>Calificación general:</b>  ${this.overallRating}`
			const listingHTML = `<h3 id='listing-bus-name'> ${this.name}</h3>
			<b>${this.categories[0].nombre}</b> <br>
			${rating}<br>
			<br>${this.address}
			<br>${this.phoneNumber}
			<br><a href='${this.website}'>${this.website}</a><br><br>`
			return listingHTML
		}
		return listingHTML;
	}

	static buildBusObj(data) {
			const business = new Business(data.id, data.name, data.categories[0].name, data.listing.overall_rating, data.listing.address, data.listing.phone_number, data.listing.website);
			return business
		}
}
