
function validateNewBus() {
  var attsArray = [checkTelephone(userInputArr[1]), checkWebsite(userInputArr[5]), checkEmail(userInputArr[5])];
  if (userInput[i] != null) {
    attsArray.push(checkMessage(userInput[i]))
  }

  if (userInput[i] != null) {
    attsArray.push(checkHours(userInput[i]))
  }
  return attsArray.filter(el => el !== true);
}

function validateNewReview(userInputArr) {
  var attsArray = [checkRating(userInputArr[1]), checkEmail(userInputArr[4])];
  return attsArray.filter(el => el !== true);
}

function validateNewImage(userInputArr) {
  var attsArray = [checkURL(userInputArr[1]), checkEmail(userInputArr[5])];
  return attsArray.filter(el => el !== true);
}

function validateNewFlag(userInputArr) {
  return (checkEmail(userInputArr[4]);
}


function validateNewEdit(userInputArr) {
  return (checkEmail(userInputArr[4]);
}


function checkEmail(userInput) {
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return userInput.match(regex) != null ? true : 'Email Address';
}

function checkTele(userInput) {
  var regex = /^\d{3}-\d{3}-\d{4}$/
  return userInput.match(regex) != null ? true : 'Phone Number';
}

function checkURL(userInput) {
  var regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  return userInput.match(regex) != null ? true : 'URL';
}

function checkRating(userInput) {
  return (parseInt(userInput, 10) > 0) && (parseInt(userInput, 10) < 6) ? true : 'Rating';
}

function checkDate(userInput) {
  var regex = /^((0?[1-9]|1[012])[-/.](0?[1-9]|[12][0-9]|3[01])[-/.](19|20)?[0-9]{2})*/
  return userInput.match(regex) != null ? true : 'Date';
}

function checkMessage(userInput) {
  return userInput.length < 1000 ? true : 'Message';
}

function checkHours(userInput) {

}

function validateTermsCond(checkboxValue) {
  //send alert with checkbox in eng or span
  //and link to terms and conditions
}

