'use strict'

const express=require('express');
const router=express.Router();
const crudModule=require('../model/crud');
const contactusModule=require('../model/contactus');

router.post('/contactus/add',(request,response,next)=>{
    contactusModule.addContactus(request.body,(err,res)=>{
        if(!err){
            let resObj={
                code:200,
                message:"Successfully Added"
            }
            response.send(resObj);
        } else {
            response.send({code:500,message:'Faile'})
        }
    });
});


router.post('/crud/add',(request,response,next)=>{
  //  console.log("body",request.body);
    crudModule.addCrud(request.body,(err,res)=>{
        if(!err){
            let resObj={
                code:200,
                message:"Successfully Added"
            }
            response.send(resObj);
        } else {
            response.send({code:500,message:'Failed'})
        }
    });
});

router.get('/crud/get_data/:id', (request, response, next) => {
    //console.log(request.params);
    crudModule.getCrud(request.params, (err, res) => {
        if (!err) {
           // res.code    = 200;
            //res.message = "Success";
             //console.log(res);
            response.send(res);
        } else {
            response.send({code: 500, message: "Data Not Found"})
        }
    });
});

router.put('/crud/update_date/:id', (request, response, next) => {
    
    crudModule.editCrud(request, (err, res) => {
        if (!err) {
            let resObj = {
                code   : 200,
                message: "Success"
            }
            response.send(resObj);
        } else {
            response.send({code: 500, message: "Data Not Found"})
        }
    });
});

router.delete('/crud/delete_data/:id', (request, response, next) => {
    console.log("params", request.params)
    crudModule.deleteCrud(request.params, (err, res) => {
        console.log("api", err, res);
        if (!err) {
            let resObj = {
                code   : 200,
                message: "Success"
            }
            response.send(resObj);
        } else {
            response.send({code: 500, message: "Dellete Process Failed"})
        }
    });
});


router.post('/crud/list', (request, response, next) => {
  //  console.log(request.body);
    crudModule.listCrud(request.body,(err, res) => {
        if (!err) {           
            //res.code    = 200;
            //res.message = "Success";
            response.send(res);
        } else {
            response.send({code: 500, message: "Data Not Found"})
        }
    });
});

module.exports=router;