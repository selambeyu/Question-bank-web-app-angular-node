var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var config=require('../config/database');
var QuestionSchema = new Schema({question: {
    type: String,
    required: true
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

module.exports=mongoose.model('choice',QuestionSchema);