const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var jwt = require('jsonwebtoken');
var { Admin } = require('../models/admin');

router.post('/', (req, res) => {
    var empData =req.body;
    console.log(empData);
    Admin.findOne({name:empData.name},(err,user) => {
        if(!user){
            console.log("Username Doesn't exist");
        }
        else if(user.password !== empData.password){
            console.log("Password error");
        }
        else{
            console.log("User",user);
            res.send(user);
        }
    })
});

module.exports = router;
