'use strict'

module.exports = function(app){
	app.get('/api/users',function(req,res){
		return res.json({'name' : 'My name'});
	});

	app.get('/',function(req,res){
		res.render('index');
	});

};

