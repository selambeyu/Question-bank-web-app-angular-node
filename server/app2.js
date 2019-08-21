var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/db');
var app=express();

mongoose.connect(config.database);




// mongoose.connect('mongodb://127.0.0.1:27017/y_mean'); 

app.get('/',(req,res) =>{
    return res.send("wellcome to the mean app");

});

app.listen(3000);

