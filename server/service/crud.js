'use strict'

const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;

const app=require('../config/app');
const crud ={}

crud.addCrud = function (request, callback) {
    MongoClient.connect(app.mongo.url, (err, db) => {
        if (!err) {
            let collections = db.collection('employee');
            collections.insert(request, (err, res) => {
                return callback(null, true);
            });
        } else {
            return callback('Adding Data Failed');
        }
        db.close();
    });
}

crud.getCrud = function (request, callback) {
    MongoClient.connect(app.mongo.url, (err, db) => {
        if (!err) {
            let collections = db.collection('employee');
            let id          = new mongo.ObjectID(request);
            collections.findOne({'_id': id}, (err, res) => {
              //  console.log(res);
                if (!err && res) {
                    return callback(null, res)
                } else {
                    if (!err) {
                        err = 'DATA NOT FOUND';
                    }
                    return callback(err);
                }
            });
        } else {
            return callback(err);
        }
        db.close();
    });
}

crud.updateCrud = function (request, callback) {
    MongoClient.connect(app.mongo.url, (err, db) => {
        if (!err) {            
            let collections = db.collection('employee');
            let id          = new mongo.ObjectID(request.id);
            //console.log(request);
            let requestbody={firstName:request.firstName,lastName:request.lastName,empemail:request.empemail,mobile:request.mobile};
           collections.update({'_id': id}, requestbody, (err, res) => {
                if (!err) {
                    return callback()
                } else {
                    if (!err) {
                        err = 'DATA NOT FOUND';
                    }
                    return callback(err);
                }
            });
        } else {
            return callback(err);
        }
        db.close();
    });
}

crud.listCrud = function (request, callback) {
    // let query = request.query;
    
    // var obj = JSON.parse(request);
     //console.log(obj[value]);
    MongoClient.connect(app.mongo.url, (err, db) => {
        if (!err) {
            let collections = db.collection('employee');
            /*collections.find(request.query).skip(request.index).limit(request.limit).toArray((err, res) => {
                return callback(null,res);
            });*/
            collections.find(request.query).toArray((err, res) => {
               // console.log(res);
            return callback(null,res);
            });
           /* var cursor = collections.find(request.query);  
            // Read data from curson  
           cursor.each(function(err, data) { 
            //return callback(data); 
              console.log(data);  
           }); */
        } else {
            return callback();
        }
        db.close();
    });
}

crud.countCrud = function (request, callback) {
    // let query = request.query;
    MongoClient.connect(app.mongo.url, (err, db) => {
        if (!err) {
            let collections = db.collection('employee');
            collections.find(request.query).count((err, res) => {
                return callback(null, res);
            });
        } else {
            return callback();
        }
        db.close();
    });
}

crud.deleteCrud = function (request, callback) {
    MongoClient.connect(app.mongo.url, (err, db) => {
        if (!err) {
            let collections = db.collection('employee');
            let id          = new mongo.ObjectID(request);
            collections.deleteOne({_id: id}, (err, res) => {
                if (!err) {
                    return callback(null, res);
                } else {
                    return callback('Delete Failed');
                }
            })
        } else {
            return callback(err);
        }
        db.close();
    });
}

module.exports=crud;