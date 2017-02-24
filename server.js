const express = require('express');
const convert = require('./controller/convert.js');
const app = express();
//template engine
app.set('view engine', 'ejs');
//middleware
app.use(express.static("./public"));

app.get('/', function(req, res){
	res.render('home');
})


app.get('/:time', function(req, res){
	const regex = /\d/g;
	//if it's text and numbers (eg: january 20, 2000) 
	//problem to fix: it passes stuff like this (eg: azdfcdsc22)
	if (isNaN(req.params.time) && regex.test(req.params.time)) {
		//convert to timestamp and set date to natural language form
		res.render("Api", {unix: convert.dateToTimestamp(req.params.time)/1e3,
					   	   	   natural: convert.dateToNaturalDate(req.params.time)
					  	      });
	}else if(!isNaN(req.params.time)){
		//if it's a number then it's a timestamp
		res.render("Api", {unix: req.params.time,
						//converts timestamp to natural language date
					   	   natural: new Date(Number(req.params.time)*1000).toDateString()
					  	  });	
	}else {
		res.render("Api", {unix: 'null',
					   	   natural: 'null'
					  	  });
	}
})
const port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Server running on port '+port);
})