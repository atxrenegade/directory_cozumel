class Entry {
	constructor(id, entryType, busId, busName, dateCreated, contributor, contributorEmail, dataArray, status, resolvedDate, adminId, notes) {
		debugger;
		this.id = id;
		this.entryType = entryType;
		this.busId = busId;
		this.busName = busName;
		this.dateCreated = dateCreated;
		this.contributor = contributor;
		this.contributorEmail = contributorEmail;
		this.dataArray = dataArray;
		this.status = status;
		this.resolvedDate = resolvedDate;
		this.adminId = adminId;
		this.notes = notes;
		ENTRIES.push(this)
	}
}
