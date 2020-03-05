class Entry {
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
		//am I duplicating functionality by using a storage class and a class variable for the same collection of instances
		// where do I define my class array variable for allEntries
		allEntries.push(this)
	}

	static allEntries(){
		// should this be a regular or tatic function?
		return allEntries
	}
}
