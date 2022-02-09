const mongoose=require('mongoose');
const mongoUrl="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectTOMongo=()=>{
    mongoose.connect(mongoUrl,()=>{
        console.log("connected to mongoose1 ")
    } )

}

module.exports=connectTOMongo;