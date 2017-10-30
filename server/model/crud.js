'use strict'

const async =require('async');
const _ =require('underscore');

const crudService= require('../service/crud');
const utils        = require('../service/utils');
const crud={};

crud.addCrud=function(request,callback){
    crudService.addCrud(request,(err,res)=>{
        if(!err){
            return callback(null,true);
        } else {
            return callback(err)
        }    
});
}

crud.editCrud=function(request,callback){
    request.body.id=request.params.id;
    //console.log(request.body.id);
   // console.log("request.body", request);
    crudService.updateCrud(request.body,(err,res)=>{
        if(!err){
            return callback(null,true);
        } else {
            return callback(err);
        }
    });
}
crud.getCrud=function(request,callback){
    crudService.getCrud(request.id,(err,res)=>{
        if(!err){
            return callback(null,res);
        } else {
            return callback(err);
        }
    });
}
crud.deleteCrud=function(request,callback){
    crudService.deleteCrud(request.id,(err,res)=>{
        if(!err){
            return callback(null,true);
        } else {
            return callback(err);
        }
    });

}
crud.listCrud=function(request,callback){
    crudService.listCrud(request,(err,res)=>{
        if(!err){
            return callback(null,res);
        } else {
            return callback(err);
        }
    });

}
/*
crud.listCrud = function (request, callback) {
    console.log(JSON.stringify(request));
    let filters = request.filters;
    let search  = request.search;

    let task = [];

    task.push((innerCb) => {
        //on hold will work once the utils issue fixed
        if ((filters && filters.length) || search && search.length) {
            utils.formQuery(request, (err, res) => {
                return innerCb(null, res);
            })
        } else {
            return innerCb(null, {});
        }
    });

    task.push((query, innerCb) => {
        let innerTask = [];

        let req = {
            query: query
        }

        innerTask.push((innerTaskCb) => {
            req.limit = request.size ? request.size : 2;
            req.index = request.index ? request.index : 0
            crudService.listCrud(req, (err, res) => {
                if (!err) {
                    return innerTaskCb(null, res);
                } else {
                    return innerTaskCb(err);
                }
            });
        });

        innerTask.push((innerTaskCb) => {
            let req = {
                query: query,
            }
            crudService.countCrud(req, (err, res) => {
                if (!err) {
                    return innerTaskCb(null, res);
                } else {
                    return innerTaskCb(err);
                }
            });
        });

        async.parallel(innerTask, (err, res) => {
            res = {
                listCrud : res[0],
                totalCount: res[1]
            }
            return innerCb(null, res);
        });


    });

    async.waterfall(task, (err, res) => {
        if (!err) {
            return callback(null, res);
        } else {
            return callback(err);
        }
    });
}*/
module.exports= crud;



