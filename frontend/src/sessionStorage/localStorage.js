// localStorage Functions

function initializeStorage(){
	var typeArray = ['cats', 'attributes', 'entries', 'response', 'reply'];
	typeArray.forEach( el => updateOrCreateStorage(el, ''));
}

function updateOrCreateStorage(type, data){
	localStorage.setItem(type, JSON.stringify(data));
}

function getStorageItem(type){
	return JSON.parse(localStorage.getItem(type));
}

export { initializeStorage, updateOrCreateStorage, getStorageItem };
