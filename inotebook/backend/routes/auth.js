const express=require('express');
const User = require('../Models/User');
var bcrypt = require('bcryptjs');
const router=express.Router();
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const JWT_SECRET='sanketisagoodboy';// secrete key to sign webtoken

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
const salt=await bcrypt.genSalt(10)// genrate salt 10 is saltround value
const secPass=await bcrypt.hash(req.body.password,salt) // genrate hash

    user=await User.create({ 
        name: req.body.name,
        email: req.body.email,
        password: secPass //store hash in db instead of plain text
      }) 

      const data={
              id:user.id
      }
      const authtoken = jwt.sign(data,JWT_SECRET);//sign the token with secrete key
      res.json({authtoken})//we will send token as response

} catch (error) {
    console.error(error.message)
    res.status(500).send("error occured in our app")
}
    
});

module.exports=router