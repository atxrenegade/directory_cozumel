export default class Operation {
	constructor(currentStatus, businessHours, openingDate, occupancyRate, reservationRequired, notes, userUpdated){
		this.currentStatus = currentStatus;
		this.businessHours = businessHours
		this.openingDate = openingDate;
		this.occupancyRate = occupancyRate;
		this.reservationRequired = reservationRequired;
		this.notes = notes;
		this.userUpdated = userUpdated;
	}

	renderOperations(LANGUAGE){
		var status;
		var reservation;
		var operation;

		if (LANGUAGE == 'eng'){
			var status = (this.currentStatus == true) ? 'Yes' : 'No';
			var reservation = (this.reservationRequired == true) ? 'Yes' : 'No';
			var reopening = (this.currentStatus == true) ? 'Open Now' : this.reopeningDate;
			operation =  `<div class='operation'><h5>Hours Of Operation: (CoVid)</h5><p class='listing-content-1'><b>M:</b>	  ${this.businessHours[0]}<br><b>Tu:</b>		${this.businessHours[1]}<br><b>W:</b>		${this.businessHours[2]}<br><b>Th:</b>		${this.businessHours[3]}<br><b>F:</b>		${ this.businessHours[4]}<br><b>Sat:</b>		${this.businessHours[5]}<br><b>Sun:</b>		${this.businessHours[6]}<br></p><h5>Post CoVid UPDATES:</h5><p class='listing-content-2'><b>Open For Business: </b>${status}<br><b>Estimated Reopening Date: </b>${reopening}<br><b>Operating Occupancy Rate: </b> ${this.occupancyRate}%<br><b>Reservation Required?</b>		${reservation}<br><b>Last Updated: </b> ${this.userUpdated}</p>`
			if (this.note !== null){ return operation + `<p class='listing-content-2'><b>${this.notes}</b></p></div>` }
			return operation;
		} else {
			var status = (this.currentStatus == true) ? 'Si' : 'No';
			var reservation = (this.reservationRequired == true) ? 'Si' : 'No';
			var reopening = (this.currentStatus == true) ? '¡Ya Abrimos!' : this.reopeningDate;
			operation = `<div class='operation'><h5> Horas De Operación: (CoVid)</h5><p class='listing-content-1'><b>L:</b>	  ${this.businessHours[0]}<br><b>M:</b>		${this.businessHours[1]}<br><b>M:</b>		${this.businessHours[2]}<br><b>J:</b>		${this.businessHours[3]}<br><b>V:</b>		${this.businessHours[4]}<br><b>S:</b>		${this.businessHours[5]}<br><b>D:</b>		${this.businessHours[6]}<br><br><h5>Actualizaciones Posteriores A Covid:</h5><p class='listing-content-2'><b>¿Abierto para negocios?</b>	${status}<br><b>Fecha Estimada De Reapertura: </b>${reopening}<br><b>Operating Occupancy Rate: </b> ${this.occupancyRate}%<br><b>¿Se requiere reserva?</b>		${reservation}<br><b>Última Actualización: </b> ${this.userUpdated}</p><br>`
			if (this.note != null){ return operation + `<p class='listing-content-2'><b>${notes}</b></p></div>` }
			return operation;
		}
		return operation;
	}

	static operationBuilder(operationData, formattedDate){
		let currentStatus = operationData['current_status'];
		let businessHours = JSON.parse(operationData.business_hours);
		let openingDate = operationData['opening_date'];
		let occupancyRate = operationData['occupancy_rate'];
		let reservationRequired = operationData['reservation_required'];
		var userUpdated;
		if (operationData['user_updated'] == null){
			userUpdated = formattedDate;
		} else {
			userUpdated = operationData['user_updated']
		}	
		let notes = operationData['notes'];
		let newOperation = new Operation(currentStatus, businessHours, openingDate, occupancyRate, reservationRequired, notes, userUpdated)
		return newOperation;
	}
}
