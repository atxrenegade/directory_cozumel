export default class Entry {
	constructor(id, entryType, busId, busName, dateCreated, contributor, contributorEmail, dataObject, status, resolvedDate, adminId, notes) {
		this.id = id;
		this.entryType = entryType;
		this.busId = busId;
		this.busName = busName;
		this.dateCreated = dateCreated;
		this.contributor = contributor;
		this.contributorEmail = contributorEmail;
		this.dataObject = dataObject;
		this.status = status;
		this.resolvedDate = resolvedDate;
		this.adminId = adminId;
		this.notes = notes;
	}

	static all(entryData){ //debug
		var all = [];
		if (entryData !== undefined) all.push(entryData)
		Entry.all = all.flat();
	}
}

Entry.all = []; //debug;

/* load value not affecting inaccessibility to Entry.all variable from external files */
