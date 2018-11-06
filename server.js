var path=require('path');
var express=require('express');
var app=express();
const cors = require('cors');
var axios = require('axios');
const CR_API_MARKET_PORT = process.env.CR_API_MARKET_PORT;
const CR_API_ONBOARD_PORT = process.env.CR_API_ONBOARD_PORT;
const CR_API_MATCH_PORT = process.env.CR_API_MATCH_PORT;
const CR_APP_URL = process.env.CR_APP_URL; 

app.use(cors());
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

const fs = require('fs');
var viewOptions = {
		'title': "Swagger UI",
		'description': "This is Home page.",
		'datasrc': "json/sample.json"
	};

// Show the Index Page
app.get('/',function(req,res){
	res.render('index', viewOptions);
});

app.get('/marketplace',function(req,res){
	viewOptions.datasrc = CR_APP_URL +':'+ CR_API_MARKET_PORT +'/swagger';
	res.render('index',viewOptions);
});

app.get('/onboarding',function(req,res){
	viewOptions.datasrc = "json/source.json";
	res.render('index',viewOptions);
});

// Set the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Set Public Folder as static Path
app.use(express.static(path.join(__dirname, 'public')));

// Run the Server
app.listen('3000',function(){
	console.log('Server is running at PORT '+3000);
});
