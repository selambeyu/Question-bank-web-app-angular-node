var mongoose = require('mongoose');
var config = require('../config/database');
var express = require('express');

var router = express.Router();

var Question = require("../models/choice");

router.post('/',(req,res)=>{
    // if(req.body.name){
    //     return res.status(400).send({err:'name is required fields'});

    // }
    Question.create({
        question:req.body.question,
        a:req.body.a,
        b:req.body.b,
        c:req.body.c,
        d:req.body.d
    },(err,savedQuestion)=>{
        if(err){
            return res.status(500).send(err);
        }
      return res.status(200).json(savedQuestion)
    })
});
router.get('/',(req,res)=>{
    Question.find({},(err,questions)=>{
        if(err){
            return res.status(404).send(err);
        }
        return res.status(200).json(questions);
    });
});
router.get('/:id',(req,res)=>{
    let id =req.params.id;
    Question.findById(id,(err,question)=>{
        if(err){
            return res.status(404).send(err);
        }
        return res.status(200).json(question);
    });

});
router.put('/:id',(req,res)=>{
    if(!req.params.id){
        return res.status(400).send({err:"invalid"});
    }
    let attributes ={};
    if(req.body.question){
        attributes.question= req.body.question;
    
    }
    if(req.body.a){
        attributes.a=req.body.a;
    }
    if(req.body.b){
        attributes.b=req.body.b;
    }
    if(req.body.c){
        attributes.c=req.body.c;
    }
    if(req.body.d){
        attributes.d=req.body.d;
    }
    Question.findByIdAndUpdate(req.params.id,attributes,{new:true},(err,question)=>{
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).json(question);
    });

});
router.delete( '/:id',(req,res)=>{
    if(!req.params.id){
        return res.status.apply(400).send({err:'unable to find the question  '});
    }
    Question.findByIdAndRemove(req.params.id,(err,question)=>{
        if(err){
            return res.status(500).send(err);
        }
        if(!question){
            return res.status(404).send({err:'unable to find the question'});
        }
        return res.status(200).json({msgs:'company is deleted with id'+req.params.id});
    })
});
module.exports= router;