// localStorage Functions

// response => user, result => admin

function initializeStorage(){
	var typeArray = ['cats', 'attributes', 'entries', 'response', 'result'];
	typeArray.forEach( el => updateOrCreateStorage(el, 'empty'));
}

function updateOrCreateStorage(type, data){
	localStorage.setItem(type, JSON.stringify(data));
}

function getStorageItem(type){
	return JSON.parse(localStorage.getItem(type));
}

export { initializeStorage, updateOrCreateStorage, getStorageItem };
