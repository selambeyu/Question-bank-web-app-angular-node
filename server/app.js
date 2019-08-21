var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise=require('bluebird');
var passport = require('passport');
// var config = require('./config/database');
var database="mongodb://localhost/userdb"
mongoose.connect(database,{
  useMongoClient:true
});

mongoose.connection.on('connected',()=>{
  console.log('the database is connected to'+' '+' '+ database);
});

mongoose.connection.on('error',()=>{
  console.log("the database is not connected");
});

var users = require('./routes/users');
// var question=require('./routes/questions');
var company=require('./routes/companys');
var choice=require('./routes/choices');


var app = express();


// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "*");
//   next();
// });
app.use((cors()));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
 
//passport middleware
// app.use(passport.initialize());
//  app.use(passport,session());

require('./config/passport')(passport);
app.use('/users', users);
// app.use('/question',question);
app.use('/company',company);
app.use('/choice',choice);


app.get('/',function(req,res){
  res.send("the server is working now");
});
app.listen(3000 , function(){
	console.log("the app is running @ 3000")
});

