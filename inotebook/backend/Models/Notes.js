const mongoose=require("mongoose");

const NotesSchema=new Schema({

    title:{
        type:string,
        required:true
    },
    description:{
        type:string,
        required:true 
    },
    tag:{
        type:string,
        default:'Genral'

    },
    date:{
        type:date,
        default:Date.now
    }

})

module.exports=mongoose.model('notes',NotesSchema);