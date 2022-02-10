const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{

    obj={
        id:2,
        name:"NOtes"
    }
    res.json(obj);
})

module.exports=router