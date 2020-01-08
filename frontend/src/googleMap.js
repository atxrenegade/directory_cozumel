class GoogleMap {
	constructor(lat, lng) {
		this.lat = lat;
		this.lng = lng;
	}

	initMap(lat, lng){
		let options = {
			 center: {lat: lat, lng: lng},
			 zoom:11
		 }

		let map = new google.maps.Map(document.getElementById('js-map'), options);

		/*
			let marker = new google.maps.Marker({
			position:({lat: lat, lng: lng }),
			map:map,
			icon: 'http://maps.google.com/mapfiles/kml/paddle/red-stars.png'
		});

		return map;
		*/
	}

	renderMap(){
		this.initMap(this.lat, this.lng);
	}

	static mapBuilder(mapData) {
		let lat = mapData['lat'];
		let lng = mapData['lng'];
		let newMap = new GoogleMap(lat, lng);
		return newMap;
	}
}
