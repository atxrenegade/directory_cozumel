export default class Operation {
	constructor(currentStatus, weekdayHours, weekendHours, openingDate, occupancyRate, reservationRequired, notes, lastUpdated){
		this.currentStatus = currentStatus;
		this.weekdayHours = weekdayHours;
		this.weekendHours = weekendHours;
		this.openingDate = openingDate;
		this.occupancyRate = occupancyRate;
		this.reservationRequired = reservationRequired;
		this.notes = notes;
		this.lastUpdate = lastUpdated;
	}

	renderOperations(LANGUAGE){
		var status;
		var reservation;
		var operation;

		if (LANGUAGE == 'eng'){
			var status = (this.currentStatus == true) ? 'Yes' : 'No';
			var reservation = (this.reservationRequired == true) ? 'Yes' : 'No';
			var reopening = (this.currentStatus == true) ? 'Open Now' : this.reopeningDate;
			operation =  `<div class='operation'><h5>Hours Of Operation: (CoVid)</h5><p class='listing-content-1'><b>M:</b>	  ${this.weekdayHours[0]}<br><b>Tu:</b>		${this.weekdayHours[1]}<br><b>W:</b>		${this.weekdayHours[2]}<br><b>Th:</b>		${this.weekdayHours[3]}<br><b>F:</b>		${ this.weekdayHours[4]}<br><b>Sat:</b>		${this.weekendHours[0]}<br><b>Sun:</b>		${this.weekendHours[1]}<br></p><h5>Post CoVid UPDATES:</h5><p class='listing-content-2'><b>Open For Business: </b>${status}<br><b>Estimated Reopening Date: </b>${reopening}<br><b>Operating Occupancy Rate: </b> ${this.occupancyRate}%<br><b>Reservation Required?</b>		${reservation}<br><b>Last Updated: </b> ${this.lastUpdate}</p>`
			if (this.note !== null){ return operation + `<p class='listing-content-2'><b>${this.notes}</b></p></div>` }
			return operation;
		} else {
			var status = (this.currentStatus == true) ? 'Si' : 'No';
			var reservation = (this.reservationRequired == true) ? 'Si' : 'No';
			var reopening = (this.currentStatus == true) ? '¡Ya Abrimos!' : this.reopeningDate;
			operation =  `<h5>COVID Horas De Operación:</h5><b>L:</b>	  ${this.weekdayHours[0]}<br><b>M:</b>		${this.weekdayHours[1]}<br><b>M:</b>		${this.weekdayHours[2]}<br><b>J:</b>		${this.weekdayHours[3]}<br><b>V:</b>		${ this.weekdayHours[4]}<br><b>S:</b>		${this.weekendHours[0]}<br><b>D:</b>		${this.weekendHours[1]}<br><br><h5>Actualizaciones Posteriores A Covid:</h5><b>¿Abierto para negocios?</b>	${status}<br><b>Fecha Estimada De Reapertura: </b>${reopening}<br><b>Operating Occupancy Rate: </b> ${this.occupancyRate}%<br><b>¿Se requiere reserva?</b>		${reservation}<br><b>Última Actualización: </b> ${this.lastUpdate}</p><br>`
			if (this.note != null){ return operation + `<p>${notes}</p><br>` }
			return operation;
		}
		return operation;
	}

	static operationBuilder(operationData){
		let currentStatus = operationData['current_status'];
		let weekdayHours = JSON.parse(operationData.weekday_hours);
		let weekendHours = JSON.parse(operationData.weekend_hours);
		let openingDate = operationData['opening_date'];
		let occupancyRate = operationData['occupancy_rate'];
		let reservationRequired = operationData['reservation_required'];
		let lastUpdated = operationData['updated_at']
		let notes = operationData['notes'];
		let newOperation = new Operation(currentStatus, weekdayHours, weekendHours, openingDate, occupancyRate, reservationRequired, notes, lastUpdated)
		return newOperation;
	}
}
