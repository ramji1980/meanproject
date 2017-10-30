'use strict'

const express=require('express');
const router=express.Router();
const ConactusModule=require('../contactus');

router.post('/contactus/add',(request,response,next)=>{
    //  console.log("body",request.body);
      contactModule.addContactus(request.body,(err,res)=>{
          if(!err){
              let resObj={
                  code:200,
                  message:"Added Successfully"
              }
              response.send(resObj);
          } else {
              response.send({code:500,message:'Failed'})
          }
      });
  });
/*
router.get('/contactus/get_contact',(request,response,next)=>{
    ConactusModule.getContact(request,(err,res)=>{
        if(!err){
            res.code=200;
            res.message="Success";
            response.send(res);
        } else {
            response.send({code:500,nessage:'Not Found'})
        }

    });
});*/