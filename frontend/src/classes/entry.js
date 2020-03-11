let allEntries = [];

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

		// where do I define my class array variable for allEntries
		Entry.allEntries(this)
	}

	static allEntries(entry){
		// let allEntries = []
    // where do I initiate this array value that it is not reset everytime the method is called, if I use two methods a setter and a getter how does the second access the variable value since they dont share the same scope.
		if (entry !== undefined) allEntries.push(entry)
		return allEntries;
	}

	static allEntriesReset() {
		allEntries = [];
	}
}
