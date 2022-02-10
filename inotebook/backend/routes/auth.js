const express=require('express');
const User = require('../Models/User');
const router=express.Router();

// create a user usin post api/auth/
router.post('/',(req,res)=>{
const user=User(req.body)
user.save()
console.log(req.body);
    res.send("hello ji post");
})

module.exports=router