export default class Operation{
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
		return 'Here is the operations test info.'
	}
}
