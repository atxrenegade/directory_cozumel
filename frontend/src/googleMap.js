class GoogleMap {
	constructor(lat, lng) {
		this.lat = lat;
		this.lng = lng;
	}

	initMap(){
		let map = new google.maps.Map(document.getElementById('js-google-maps-container'), {
			center: {lat: this.lat, lng: this.lng},
			zoom: 8
		});
	}
}
