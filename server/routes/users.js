var mongoose = require('mongoose');
var config = require('../config/database');
var express = require('express');

var passport = require('passport');
var jwt = require('jsonwebtoken');



var router = express.Router();

var User = require("../models/user");

router.post('/register',(req,res,next)=>{
 let newUser=new User({
   name:req.body.name,
   email:req.body.email, 
   username:req.body.username,
   password:req.body.password
 });
 User.addUser(newUser,(err,user)=>{
   if(err){
     res.json({success:false, msg:'failed to register the user'});
   }else{
     res.json({success:true, msg:'user registered successfully'});
   }
 }) ;
});


router.post('/authentication',function(req,res){
var username=req.body.username;
var password=req.body.password;

User.getUserByUsername(username,(err,user)=>{
  if(err)  throw err;
  if(!user){
    return res.json({success:false,msg:'user not found'});
  }
  User.comparePassword(password,user.password,(err,isMatch)=>{
    if(err) throw err;
    if(isMatch){
      var token=jwt.sign(user,config.secret,{
        expiresIn:604800
      });
      res.json({
        success:true,
        token:'JWT'+token,
        user:{
          id:user._id,
          name:user.name,
          username:user.username,
          email:user.email
        }
  });
}else{
  return res.json({success:false,msg:"wrong password"})
}
 });

});
});
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
 res.json({user:req.user});
// res.send("this is profile");
});

module.exports= router;