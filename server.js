'use strict'

var express = require('express'),
	path = require('path');

var app = express();



console.log(__dirname);
app.use(express.static(path.join(__dirname,'/app')));

app.set('views', path.join(__dirname)+'/app/views');

app.engine('html',require('ejs').renderFile);

app.set('view engine','html');

require('./lib/routes')(app);

app.listen(3000,function(){
	console.log('sample app listening on port',3000)
});


