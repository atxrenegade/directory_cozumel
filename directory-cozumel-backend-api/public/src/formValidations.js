function validateNewBus(userInputArr) {
  var attsArray = [checkEmail(userInputArr[1].value), checkTele(userInputArr[4].value), checkURL(userInputArr[5].value) ];
  return checkValArr(attsArray)
}

function validateNewOp(userInputArr) {
  var attsArray = [];
 
  if (userInputArr[13].value != null) {
    attsArray.push(checkDate(userInputArr[13].value))
  }

  if (userInputArr[14].value != null) {
    attsArray.push(checkPercentage(userInputArr[14].value))
  }

  if (userInputArr[18].value != null) {
    var hoursArr = [userInputArr[18].value, userInputArr[19].value, userInputArr[20].value, userInputArr[21].value, userInputArr[22].value, userInputArr[23].value, userInputArr[24].value]
    hoursArr.map(function(hoursEl) {
      if (attsArray.some(x => x == 'Hours')) {
        return attsArray;
      } else {
        attsArray.push(checkHours(hoursEl));
      }
    })
  }

  if (userInputArr[17].value != null) {
    attsArray.push(checkMessage(userInputArr[17].value))
  }

  debugger;
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
  var attsArray = [checkEmail(userInputArr[i].value)];
  return checkValArr(attsArray);
}

function checkValArr(attsArr){
  var valid;
  var fieldVals = attsArr.filter(el => el !== true);
  fieldVals.length < 1 ? valid = true : valid = fieldVals;
  return valid;
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
  debugger;
  var closedReg = /(closed)|(cerrado)/i;
  if (userInput.match(closedReg) == null) || userInput !== '' {
    var regex = /^(([0-1])[0-9]|2[0-3]):[0-5][0-9](am|pm)(-)[0-1][0-9]:[0-3][0-3](am|pm)*/i;
    return userInput.match(regex) != null ? true : 'Hours';
  } else {
    return true;
  }  
}

function checkPercentage(userInput) {
  return parseInt(userInput, 10) < 101 ? true: 'Occupancy Rate';
}

function createValErrMsg(fieldVals, lang){
  var fields;
  if (lang == 'esp') { fieldVals = translateFieldArr(fieldVals);} 
  fields = `${fieldVals.join('  ')}`
  fireValError(fields, lang);
}

function translateFieldArr(atts){
  var translated = atts.map(function (att) {
    if (att == 'Rating') { return 'Clasificación'};
    if (att == 'Phone Number') { return 'Número de Teléfono'};
    if (att == 'Email Address') { return 'Email'};
    if (att == 'Hours') { return 'Horarios' }; 
    if (att == 'Message') { return 'Mensaje' };
    if (att == 'Date') { return 'Fecha' };
  })
  return translated;
}

function missingBusFieldsErr() {
  var title;
  var msg;
  if (LANGUAGE == 'eng') {
    title = 'Incomplete Form';
    msg = 'Contributor name, contributor email, business name, address, phone number and category are mandatory fields!';
  } else {
    title = 'Incompleta';
    msg = '¡Nombre del colaborador, email de colaborador, el nombre comercial, la dirección, el número de teléfono y la categoría son campos obligatorios!';
  }
  userInputError(`${title}`, `${msg}`)
}

function fireValError(fields, lang){
  if (lang == 'eng'){
    Swal.fire({
      title: 'Correct the following errors:',
      text: fields,
      icon: 'error',
      confirmButtonText: 'Close'
    })
  } else {
    Swal.fire({
      title: 'Corregir los errores:',
      text: fields,
      icon: 'error',
      confirmButtonText: 'Cerrar'
    })
  }  
}

export {validateNewBus, validateNewReview, validateNewImage, validateNewFlag, validateNewEdit, validateNewOp, createValErrMsg, missingBusFieldsErr };
