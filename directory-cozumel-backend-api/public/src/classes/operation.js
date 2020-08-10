export default class Operation {
	constructor(currentStatus, businessHours, openingDate, occupancyRate, reservationRequired, notes, notasEsp, userUpdated){
		this.currentStatus = currentStatus;
		this.businessHours = businessHours.split('^')
		this.openingDate = openingDate;
		this.occupancyRate = occupancyRate;
		this.reservationRequired = reservationRequired;
		this.notes = notes;
		this.notas = notasEsp;
		this.userUpdated = userUpdated;
	}

	renderOperations(LANGUAGE){
		var status;
		var reservation;
		var operationHTML = '';

		if (LANGUAGE == 'eng'){
			var status = (this.currentStatus == true) ? '  Yes' : '  No';
			var reservation = (this.reservationRequired == true) ? ' Yes' : ' No';
			var reopening = (this.currentStatus == true) ? 'Open Now' : this.reopeningDate;
			var occupancyRate = (this.occupancyRate == true) ? `{this.occupancyRate}%` : "<br>Not Applicable";
			var tableHTML = `<div class='operation'><p class='listing-content-1'><h5 style='letter-spacing:.5em;'>Business Hours (CoVid)</h5>
				<table class='business-hours-table'>
					<tr>
						<th>Monday</th>
						<td>${this.businessHours[0]}</td>
					</tr>
					<tr>
						<th>Tuesday</th>
						<td>${this.businessHours[1]}</td>
					</tr>
					<tr>
						<th>Wednesday</th>
						<td>${this.businessHours[2]}</td>
					</tr>
					<tr>
						<th>Thursday</th>
						<td>${this.businessHours[3]}</td>
					</tr>
					<tr>
						<th>Friday</th>
						<td>${this.businessHours[4]}</td>
					</tr>
					<tr>
						<th>Saturday</th>
						<td>${this.businessHours[5]}</td>
					</tr>
					<tr>
						<th>Sunday</th>
						<td>${this.businessHours[6]}</td>
					</tr>
				</table>
      </p></div>`
			var operationDetailsHTML =  `<h5>Post CoVid UPDATES:</h5><p class='listing-content-2'><br><b>Open For Business: </b>${status}<br><b>Estimated Reopening Date: </b>${reopening}<br><b>Operating Occupancy Rate: </b> ${occupancyRate}<br><b>Reservation or Appointment Required?</b>		${reservation}<br><b>Last Updated: </b> ${this.userUpdated}</p><br>`
			operationHTML += tableHTML;
			operationHTML += operationDetailsHTML;
			if (this.note !== null) { operationHTML += `<p class='listing-content-2' id='content-notes'><b>${this.notes}</b></p></div><br>` }
			return operationHTML;
		} else {
			var status = (this.currentStatus == true) ? '  Si' : '  No';
			var reservation = (this.reservationRequired == true) ? '  Si' : '  No';
			var reopening = (this.currentStatus == true) ? '<br>¡Ya Abrimos!' : this.reopeningDate;
			var occupancyRate = (this.occupancyRate !== null) ? `${this.occupancyRate}%` : "<br>No Se Aplica";
			var tableHTML = `<div class='operation'><p class='listing-content-1'><h5 style='letter-spacing:.5em;'>Horas en Operación(CoVid)</h5>
				<table class='business-hours-table'>
					<tr>
						<th>lunes</th>
						<td>${this.translateBusinessHours(this.businessHours[0])}</td>
					</tr>
					<tr>
						<th>martes</th>
						<td>${this.translateBusinessHours(this.businessHours[1])}</td>
					</tr>
					<tr>
						<th>miércoles</th>
						<td>${this.translateBusinessHours(this.businessHours[2])}</td>
					</tr>
					<tr>
						<th>jueves</th>
						<td>${this.translateBusinessHours(this.businessHours[3])}</td>
					</tr>
					<tr>
						<th>viernes</th>
						<td>${this.translateBusinessHours(this.businessHours[4])}</td>
					</tr>
					<tr>
						<th>sábado</th>
						<td>${this.translateBusinessHours(this.businessHours[5])}</td>
					</tr>
					<tr>
						<th>domingo</th>
						<td>${this.translateBusinessHours(this.businessHours[6])}</td>
					</tr>
				</table>
			</p></div>`
			var operationDetailsHTML = `<h5>Actualizaciones Posteriores A Covid:</h5><br><p class='listing-content-2'><b>¿Abierto para negocios?</b>	${status}<br><b>Fecha Estimada De Reapertura: </b>${reopening}<br><b>Tasa de Ocupación Operativa: </b> ${occupancyRate}<br><b>¿Se Requiere Reserva o Cita?</b>${reservation}<br><b>Última Actualización: </b> ${this.userUpdated}</p>`
			operationHTML += tableHTML;
			operationHTML += operationDetailsHTML;
			if (this.notas == null) {
				if (this.note !== null) { operationHTML += `<p class='listing-content-2' id='content-notes'><b>${this.notes}</b></p><br></div>` }
			} else {
				operationHTML += `<p class='listing-content-2' id='content-notes'><b>${this.notas}</b></p><br></div>`
			}	
			return operationHTML;
		}
	}

	translateBusinessHours(hours){
		var translatedHours;
		hours == 'closed'? translatedHours = 'cerrado' : translatedHours = hours;
		return translatedHours;
	}

	static operationBuilder(operationData, formattedDate){
		let currentStatus = operationData['current_status'];
		let businessHours = operationData['business_hours'];
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
		let notasEsp = operationData['notas_en_espanol']
		let newOperation = new Operation(currentStatus, businessHours, openingDate, occupancyRate, reservationRequired, notes, notasEsp, userUpdated)
		return newOperation;
	}
}
