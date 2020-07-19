export default class Business {
	constructor(id, name, categories, overallRating, address, phoneNumber, website, sustainableBusiness) {
		this.id = id;
		this.name = name;
		this.categories = categories;
		this.overallRating = overallRating;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.website = website;
		this.sustainableBusiness = sustainableBusiness;
	}

	renderBusListing(LANGUAGE) {
		var listingHTML;
		if (LANGUAGE == 'eng'){
			let rating;
			this.overallRating === 0 ? rating = 'Not Yet Rated' : rating = `<b>Overall Rating:</b> ${this.overallRating}`
			listingHTML = `<div id='back-button-div'><button id='listing-back-button'><<< Back</button></div><div class='listing-div'><h3 id='listing-bus-name'> ${this.name}</h3>
			<b>${this.categories[0].name}</b><br>
			${rating}<br>
			<br>${this.address}
			<br>${this.phoneNumber}
			<br><a href='${this.website}'>${this.website}</a><br>`;
		} else {
			let rating;
			this.overallRating === 0 ? rating = 'Aún Ao Calificado' : rating = `<b>Calificación general:</b>  ${this.overallRating}`
			listingHTML = `<div id='back-button-div'><button id='listing-back-button'><<< Regresso</button></div><div class='listing-div'><h3 id='listing-bus-name'> ${this.name}</h3>
			<b>${this.categories[0].nombre}</b> <br>
			${rating}<br>
			<br>${this.address}
			<br>${this.phoneNumber}
			<br><a href='${this.website}'>${this.website}</a><br>`;
		}
		if (this.sustainableBusiness == true) {
			var sustainable = this.renderSustainable(LANGUAGE);
			listingHTML += sustainable;
		}
		return listingHTML += `</div >`;
	}

	renderIndexBusListing(LANGUAGE) {
		var listingHTML;
		if (LANGUAGE == 'eng'){
			let rating;
			this.overallRating === 0 ? rating = 'Not Yet Rated' : rating = `<b>Overall Rating:</b> ${this.overallRating}`
			listingHTML = `<div class='listing-div'><h3 id='listing-bus-name'> ${this.name}</h3>
			<b>${this.categories[0].name}</b><br>
			${rating}<br>
			<br>${this.address}
			<br>${this.phoneNumber}
			<br><a href='${this.website}'>${this.website}</a><br><button id='js-bus-${this.id}-more' class='index-listing-buttons'>Details</button><br>`
		} else {
			let rating;
			this.overallRating === 0 ? rating = 'Aún Ao Calificado' : rating = `<b>Calificación general:</b>  ${this.overallRating}`
			listingHTML = `<div class='listing-div'><h3 id='listing-bus-name'> ${this.name}</h3>
			<b>${this.categories[0].nombre}</b><br>
			${rating}<br>
			<br>${this.address}
			<br>${this.phoneNumber}
			<br><a href='${this.website}'>${this.website}</a><br><button id='js-bus-${this.id}-more' class='index-listing-buttons'>Detalles</button><br>`
		}
		if (this.sustainableBusiness == true) {
			var sustainable = this.renderSustainable(LANGUAGE);
			listingHTML += sustainable;
		}
		return listingHTML += `</div >`;
	}

	renderSustainable(LANGUAGE){
		var sustainable;
		if (LANGUAGE == 'eng'){
			sustainable = `<br><img src="./assets/images/icons8-sustainability-50.png"  class="sustainable"><br>Sustainable Business<br><br>`;
		} else {
			sustainable = `<br><img src="./assets/images/icons8-sustainability-50.png"  class="sustainable"><br>Negocio Sustentable<br><br>`;
		}
		debugger;
		return sustainable;
	}

	static buildBusObj(data) {
			const business = new Business(data.id, data.name, data.categories, data.listing.overall_rating, data.listing.address, data.listing.phone_number, data.listing.website, data.listing.sustainable_business);
			return business
		}
}
