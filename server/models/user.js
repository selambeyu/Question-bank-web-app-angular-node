var mongoose = require('mongoose');

var bcrypt = require('bcrypt-nodejs');
var config=require('../config/database');

var UserSchema =mongoose.Schema({
name: {
        type: String,
       
        required: true
    },  
    username: {
        type: String,
       required: true
    },
  password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// UserSchema.pre('save', function (next) {
//     var user = this;
//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, null, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });

// UserSchema.methods.comparePassword = function (passw, cb) {
//     bcrypt.compare(passw, this.password, function (err, isMatch) {
//         if (err) {
//             return cb(err);
//         }
//         cb(null, isMatch);
//     });
// };


var User =module.exports =mongoose.model('User',UserSchema);
// module.exports = mongoose.model('User', UserSchema);
module.exports.getUserById=function(Id,callback){
    User.findById(id,callback);
}
module.exports.getUserByUsername=function(username,callback){
    const query ={username:username}
    User.findOne(query,callback);
}
module.exports.addUser=function(newUser,callback){
    //we use the gensalt to hash the password
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,null,(err,hash)=>{
            if(err) console.log("somthing is wrong with the database");
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
module.exports.comparePassword=function(candidatePassword,hash, callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    });
}
