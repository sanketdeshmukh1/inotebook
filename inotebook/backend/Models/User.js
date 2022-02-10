const mongoose=require("mongoose");

const UserSchema=new Schema({

    name:{
        type:string,
        required:true
    },
    Password:{
        type:string,
        required:true,
        unique:true
    },
    email:{
        type:string,
        required:true,
        unique:true

    },
    date:{
        type:date,
        default:Date.now
    }

})

module.exports=mongoose.model('user',UserSchema);