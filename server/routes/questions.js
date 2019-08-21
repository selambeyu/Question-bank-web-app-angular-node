// var mongoose = require('mongoose');
// var config = require('../config/database');
//  var express = require('express');
// var router = express.Router();
// var bodyparser=require('body-parser');


// var Question = require("../models/question");


// router.post('/',(req,res)=>{
//     // if(!req.body.qname){
//     //     return res.status(400).send({err:'name is required'});
//     // }
//     Question.create({
//         qname:req.body.qname,
//         qtype:req.body.qtype,
//         noq:req.body.noq,
//         question:req.body.question
//     },(err,savedQuestion)=>{
//         if(err){
//             return res.status(500).send(err);
//         }
//         return res.status(200).json(savedQuestion);
//     })
// });
// router.get('/',(req,res)=>{
//     Question.find({},(err,question) =>{
//         if(err){
//             return res.status(404).send(err);
//         }
//         return res.status(200).json(question);

//     })
// });


// module.exports= router;