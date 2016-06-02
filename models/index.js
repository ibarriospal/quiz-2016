var path = require ('path');
 
 //Cargar Modelo ORM
  var Sequelize = require("sequelize");
    
  //Usar BBDD Sqlite en mi máquina
 var sequelize = new Sequelize(null, null, null, {
  dialect: "sqlite",
  storage: "quiz.sqlite"

 });
  //Importar la definición de la tabla Quiz de quiz.js
  var Quiz = sequelize.import(path.join(__dirname, "quiz"));
  
  exports.Quiz = Quiz; //exporta la deifinición de la tabla Quiz 
