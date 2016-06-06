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
  
//Importar la definición de la tabla Comments de comment.js
 var Comment = sequelize.import(path.join(__dirname, 'comment'));
 var User = sequelize.import(path.join(__dirname, 'user')); 

 //Relaciones entre modelos
 Comment.belongsTo(Quiz);
 Quiz.hasMany(Comment);
 
 exports.Quiz = Quiz; //exporta la deifinición de la tabla Quiz
 exports.Comment = Comment; 
 exports.User = User;