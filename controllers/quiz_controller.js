 var models = require('../models');
 
// Autoload el quiz asociado a :quizId
exports.load = function(req, res, next, quizId) {
 models.Quiz.findById(quizId)
     .then(function(quiz) {
         if (quiz) {
           req.quiz = quiz;
           next();
         } else { 
           next(new Error('No existe quizId=' + quizId));
         }
        })
        .catch(function(error) { next(error); });
};



// GET /quizzes
exports.index = function(req, res, next) {
 models.Quiz.findAll()
   .then(function(quizzes) {
     res.render('quizzes/index.ejs', { quizzes: quizzes});
   })
   .catch(function(error) {
     next(error);
   });
};


// GET /quizzes/:id
exports.show = function(req, res, next) {

       res.render('quizzes/show', {quiz: quiz,
                     answer: answer});
};   
var models = require('../models');


// GET /quizzes/:id/check
exports.check = function(req, res) {
	
					var answer = req.query.answer || "";
					var result = answer === quiz.answer ? 'Correcta' : 'Incorrecta';
						res.render('quizzes/result', { quiz: quiz, 
											   result: result, 	
											   answer: answer });
 }; 