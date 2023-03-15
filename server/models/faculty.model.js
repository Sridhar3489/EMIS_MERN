const mongoose=require("mongoose")

const Faculty=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    subject:{type:String,required:true}
},
{
    collection:'faculty-data'
})

const model=mongoose.model('Faculty',Faculty)

module.exports=model