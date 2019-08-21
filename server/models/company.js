var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var config=require('../config/database');
var QuestionSchema = new Schema({
   folder: {
        type: String,
      
    },  
    type: {
        type: String,
       
    },
    question: {
        type: String,
        required: true
    },
     points: {
        type: Number,
        
    },
    a:{
        type:String
    },
    b:{
        type:String
    },
    c:{
        type:String
    },
    d:{
        type:String
    }
});
module.exports=mongoose.model('question',QuestionSchema);