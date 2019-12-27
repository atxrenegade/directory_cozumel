class Entry {
	constructor(id, entryType, busId, dateCreated, contributor, contributorEmail, dataArray, status, resolvedDate, adminId, notes) {
		this.id = id;
		this.entryType = entryType;
		this.busId = busId;
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
