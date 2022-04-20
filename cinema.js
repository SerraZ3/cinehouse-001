var catalogo = require("./database/catalogo.json");
console.log(catalogo);
var catalogoString = JSON.stringify(catalogo);
console.log(catalogoString);
var catalogoObj = JSON.parse(catalogoString);
console.log(catalogoObj);
