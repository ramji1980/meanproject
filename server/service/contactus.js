'use strict'
const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;

const app=require('../config/app');
const contactus={}

contactus.addContactus=function (request,callback) {
    MongoClient.connect(app.mongo.url,(err,db)=>{
        if(!err){                      
            var collections=db.collection('contact');
            collections.insertOne((request),(err,res)=>{                
                return callback(null,true);
            });
        } else {
            return callback('Adding Data failed');
        }
        db.close();        
    });
}
module.exports=contactus;