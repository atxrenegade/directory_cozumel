function createStorage(type, data){
	var type = [];
	localStorage.setItem(type, JSON.stringify(data));
}

function getStorage(type){
	return JSON.parse(localStorage.getItem(type));
}

function updateStorage(type, data){
	// do I even need this, wont it be the same as update storage?
}



// attributes, entries, response, reply, cats
