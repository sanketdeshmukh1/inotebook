const express=require('express');
const router=express.Router();
const Notes = require('../Models/Notes');
const fetchuser=require('../Middleware/fetchuser')
const { body, validationResult } = require('express-validator');

// ENDPOINT get all the notes using post api/notes/fetchallnotes
router.get('/fetchallnotes',fetchuser, async (req,res)=>{
    try {
        const notes=await Notes.find({user: req.user.id});
        res.json(notes)
        
    } catch (error) {
        console.error(error.message)
        res.status(500).send("error occured in our [fetchallnotes] notes.js")
    }
})

// // ENDPOINT Add all the notes using post api/notes/addnote
router.post('/addnote',[
 body('title','title should contain atleast 3 letter').isLength({min:3}),
 body('description','description should contain atleast 7 letter').isLength({min:7}),
body('tag','tag should contain atleast 4 letter').isLength({min:4})
]
,fetchuser, async (req,res)=>{
 
    try {
        const {title,description,tag}=req.body;
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const notes=new Notes({
    
       title,description,tag,user:req.user.id
        })
      const savednotes= await notes.save()
            res.json(savednotes);
        
    }catch (error) {
        console.error(error.message)
        res.status(500).send("error occured in our [addnote] notes.js")
    }

  })
  

module.exports=router