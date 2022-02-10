const express=require('express');
const User = require('../Models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');

// create a user usin post api/auth/
router.post('/',[
    body('name','Name should contain atleast 3 letter').isLength({min:3}),
    body('email','EMail should be in proper format').isEmail(),
    body('password','password should contain atleast 4 letter').isLength({min:4}),
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({ 
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(user => res.json(user))
    
});

module.exports=router