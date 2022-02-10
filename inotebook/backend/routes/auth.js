const express=require('express');
const User = require('../Models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');

// create a user usin post api/auth/createuser
router.post('/createuser',[
    body('name','Name should contain atleast 3 letter').isLength({min:3}),
    body('email','EMail should be in proper format').isEmail(),
    body('password','password should contain atleast 4 letter').isLength({min:4}),
],async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
//below we are checking whte=ther user with same email is already present or not
try {
   
let user= await User.findOne({email:req.body.email});
if(user){
    return res.status(400).json({error:"Sorry, user with this email is already present"})
}

    user=await User.create({ 
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      res.json(user)
      //.then(user => res.json(user))
    
} catch (error) {
    console.error(error.message)
    res.status(500).send("error occured in our app")
}
    
});

module.exports=router