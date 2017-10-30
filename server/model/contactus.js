'use strict'
const async        = require('async');
const _            = require('underscore');
const contactusService = require('../service/contactus');
//const utils        = require('../service/utils');
const contactus        = {};

contactus.addContactus = function (request, callback) {
    //console.log(request);
    contactusService.addContactus(request, (err, res) => {
        if (!err) {
            return callback(null, true);
        }  else {
            return callback(err);
        }
    });
}

module.exports=contactus;