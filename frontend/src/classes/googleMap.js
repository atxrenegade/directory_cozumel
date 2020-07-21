export default class GoogleMap {
	constructor(lat, lng, query_string) {
		this.lat = lat;
		this.lng = lng;
		this.queryString = query_string;
	}

	renderMap(key) {
		var url = `https://www.google.com/maps/embed/v1/search?key=${key}&q=${this.lat},${this.lng}&zoom=16`
		return '<div class="map-tile"><iframe src=' + url +  'width:"600" height="450" frameborder="0" style="border:0;" allowfullscreen></iframe></div>'
	}
	
	static mapBuilder(mapData) {
		return new GoogleMap(mapData['lat'], mapData['lng'], mapData['query_string']);
	}
}
