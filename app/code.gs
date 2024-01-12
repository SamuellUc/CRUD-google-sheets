
/*------------------ Fuctions for CRUD ---------------------*/

/**
 * Devuelve los datos de un SpreedSheet dependiendo del rango
 * @param {String} spreadsheetId 
 * @param {String} range 
 * @returns {Array} lista de datos del rango del SpreedSheet
 */
function readData(spreadsheetId, range) {
  var result = Sheets.Spreadsheets.Values.get(spreadsheetId, range);
  return result.values;
}

/*----------------- End Fuctions for CRUD --------------------*/



/*---------------- Helpers Fuctions for CRUD --------------------*/

/**
 * Devuelve todos los datos del SpreedSheet
 * @returns {Array} Lista de los datos de la tabla
 */
function getAllData() {
  var data = readData(PersonalGblVar.spreadsheetId, PersonalGblVar.dataRage);
  return data;
}
/*-------------- End Helpers Fuctions for CRUD ------------------*/



/* -------------------------- Utils ---------------------------- */

function doGet() {
  var template = HtmlService.createTemplateFromFile('container');
  var output = template.evaluate();
  return output;
}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}

/* ------------------------ End Utils -------------------------- */
