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
		<script src="https://maps.googleapis.com/maps/api/js?key=" + mykey + "&callback=initMap"
		async defer></script>
	}
}
