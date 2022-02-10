const mongoose=require('mongoose');
const mongoUrl="mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectTOMongo=()=>{
    mongoose.connect(mongoUrl,()=>{
        console.log("connected to mongoose1 2")
    } )

}

module.exports=connectTOMongo;