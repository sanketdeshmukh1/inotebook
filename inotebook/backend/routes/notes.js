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



  
// // ENDPOINT update the notes using put request api/notes/updatenote/:id
router.put('/updatenote/:id', fetchuser, async (req,res)=>{

   const {title,description,tag}=req.body;
   const newNote={};
   if(title){newNote.title=title}
   if(description){newNote.description=description}
   if(tag){newNote.tag=tag}
    
   //finding a note to be update
   let note1= await Notes.findById(req.params.id);
   //if note is not available then send  not found
   
   if(!note1){ 
      return res.status(404).send("not found")
    }
    //updation is allow to one who owns that note 
   if(note1.user.toString() !== req.user.id){
    return res.status(401).send("not authorize")
   }

   note1=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
res.json({note1});

    })   
  
    router.delete('/deletenote/:id', fetchuser, async (req,res)=>{
   //finding a note to be deleted 
   let note1= await Notes.findById(req.params.id);
   if(!note1){ 
      return res.status(404).send("not found")
    }
    //deletion is allow to one who owns that note 
   if(note1.user.toString() !== req.user.id){
    return res.status(401).send("not authorize")
   }

   note1=await Notes.findByIdAndDelete(req.params.id)
res.json({"msg":"successfully deleted"});

    })


module.exports=router