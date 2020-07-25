export default class Business {
	constructor(id, name, categories, overallRating, address, phoneNumber, website, sustainableBusiness, verified, verifiedDate, updatedAt) {
		this.id = id;
		this.name = name;
		this.categories = categories;
		this.overallRating = overallRating;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.website = website;
		this.sustainableBusiness = sustainableBusiness;
		this.verified = verified;
		verifiedDate == null || verifiedDate == undefined ? this.verifiedDate = updatedAt : this.verifiedDate = verifiedDate;
	}

	
	renderBusListing(LANGUAGE, formatDate, type) {
		var listingHTML = '';
		if (type == 'details') {
			var backButtonHTML = this.renderBackButton(LANGUAGE)
			listingHTML += backButtonHTML;
		}

		listingHTML += this.renderListing(LANGUAGE);

		if (this.sustainableBusiness == true) {
			var sustainableHTML = this.renderSustainable(LANGUAGE);
			listingHTML += sustainableHTML;
		}

		if (this.verified == true) {
			var verifiedHTML = this.renderVerified(LANGUAGE, formatDate)
			listingHTML += verifiedHTML;
		}

		if (type == 'index') {
			var detailsButtonHTML = this.renderDetailsButton(LANGUAGE)
			listingHTML += detailsButtonHTML;
		}

		return listingHTML += `</div >`;
	}

	
	renderBackButton(LANGUAGE) {
		var translatedText;
		LANGUAGE == 'eng' ? translatedText = 'Back' : translatedText =  'Regresso';
		return `<div id='back-button-div'><button id='listing-back-button'><<< ${translatedText} </button></div>`
	}

	renderListing(LANGUAGE) {
		var ratingText;
		var categoryText;
		if (LANGUAGE == 'eng') {
			this.overallRating === 0 ? ratingText = 'Not Yet Rated' : ratingText = `<b>Overall Rating:</b> ${this.overallRating}`;
			categoryText = this.categories[0].name;

		} else {
			this.overallRating === 0 ? ratingText = 'Aún Ao Calificado' : ratingText = `<b>Calificación general:</b>  ${this.overallRating}`;
			categoryText = this.categories[0].nombre;
		}

		return `<div class='listing-div'><h3 id='listing-bus-name'> ${this.name}</h3>
			<b>${categoryText}</b><br>
			${ratingText}<br>
			<br><span id='listing-phone-number'>${this.phoneNumber}</span>
			<br>${this.address}
			<br><a href='${this.website}'>${this.website}</a><br>`
	}


	renderVerified(LANGUAGE, formatDate){
		var translatedText;
		LANGUAGE == 'eng' ? translatedText = 'Verified:' : translatedText =  'Verificado:';
		var date = formatDate(this.verifiedDate);
		return`<img id="verified" src="./assets/images/verified_business.png">${translatedText}<br>${date}</img></br><br>`;
	}

	renderSustainable(LANGUAGE){
		var translatedText;
		LANGUAGE == 'eng' ? translatedText = 'Sustainable<br>Business' : translatedText = 'Negocio<br>Sustentable'
		return `<br><img src="./assets/images/sustainable_business.png"  class="sustainable"><br>${translatedText}<br><br>`;
	}

	renderDetailsButton(LANGUAGE){
		var translatedText;
		LANGUAGE == 'eng' ? translatedText = 'Details' : translatedText = 'Detalles';
		return `<button id='js-bus-${this.id}-more' class='index-listing-buttons'>${translatedText}</button><br><br>`
	}

	static buildBusObj(data) {
			const business = new Business(data.id, data.name, data.categories, data.listing.overall_rating, data.listing.address, data.listing.phone_number, data.listing.website, data.listing.sustainable_business, data.listing.verified, data.listing.verified_date, data.listing.updated_at);
			return business
		}
}
