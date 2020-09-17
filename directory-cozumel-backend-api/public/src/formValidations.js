
function validateNewBus(userInputArr) {
  debugger;
  var attsArray = [checkEmail(userInputArr[1].value), checkTele(userInputArr[4].value), checkURL(userInputArr[5].value), ];
  return checkValArr(attsArray)
}

function validateNewOp(userInputArr) {
  debugger;
  var attsArray;
  if (userInput[17].value != null) {
    attsArray.push(checkMessage(userInputArr[17].value)) 
  }

  if (userInput[18].value != null) {
    attsArray.push(checkHours(userInputArr[18].value))
  }

  if (userInput[13].value != null) {
    attsArray.push(checkDate(userInputArr[13].value))
  }
  return checkValArr(attsArray);
}

function validateNewReview(userInputArr) {
  var attsArray = [checkRating(userInputArr[i]), checkEmail(userInputArr[i].value)];
  return checkValArr(attsArray);
}

function validateNewImage(userInputArr) {
  var attsArray = [checkURL(userInputArr[i]), checkEmail(userInputArr[i].value)];
  return checkValArr(attsArray);
}

function validateNewFlag(userInputArr) {
  var attsArray = [checkEmail(userInputArr[i].value)];
  return checkValArr(attsArray);
}


function validateNewEdit(userInputArr) {
  debugger;
  var attsArray = [checkEmail(userInputArr[i].value)];
  return checkValArr(attsArray);
}

function checkValArr(attsArr){
  var fieldVals = attsArr.filter(el => el !== true);
  if (fieldVals.length > 0) {
    return createValErrMsg(fieldVals);
  }
}

function checkEmail(userInput) {
  debugger;
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return userInput.match(regex) != null ? true : 'Email Address';
}

function checkTele(userInput) {
  debugger;
  var regex = /^\d{3}-\d{3}-\d{4}$/
  return userInput.match(regex) != null ? true : 'Phone Number';
}

function checkURL(userInput) {
  debugger;
  var regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  return userInput.match(regex) != null ? true : 'URL';
}

function checkRating(userInput) {
  debugger;
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
  return true;
}

function validateTermsCond(checkboxValue) {
  //send alert with checkbox in eng or span
  //and link to terms and conditions
}

function createValErrMsg(fieldVals){
  return fieldVals;
  //if english
  //return "Please correct errors: " 
  //if spanish 
  // translateFieldArr
  // return "Please correct errors: "
}

function translateFieldArr(attributes){
  //if LANGUAGE = 'esp' {
    //attributes.map(att) {
    //if (att == 'Rating')( return att = '');
    //if (att == 'Phone Number') ( return att = '')
    //if (att == 'Email Address') ( return att = '')
    // if (att == 'Hours') ( return att = '')
    // if (att == 'Message') ( return att = '')
    //if (att == 'Date') ( return att = '')
    // }
    //}
}

export {validateNewBus, validateNewReview, validateTermsCond, validateNewImage, validateNewFlag, validateNewEdit, validateNewOp, validateTermsCond, createValErrMsg };
