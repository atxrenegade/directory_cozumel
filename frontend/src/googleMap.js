class GoogleMap {
	constructor(lat, lng) {
		this.lat = lat;
		this.lng = lng;
	}

	initMap(lat, lng){
		let options = {
			 center: {lat: LAT, lng: LNG},
			 zoom:11
		 }

		let map = new google.maps.Map(document.getElementById('js-map'), options);

		let marker = new google.maps.Marker({
			position:({lat: lat, lng: lng }),
			map:map,
			icon: 'http://maps.google.com/mapfiles/kml/paddle/red-stars.png'
		});
	}

	static mapBuilder(mapData) {
		let lat = mapData['lat'];
		let lng = mapData['lng'];
		let newMap = new GoogleMap(lat, lng);
		return newMap;
	}
}
