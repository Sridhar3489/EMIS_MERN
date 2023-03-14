const mongoose=require("mongoose")

const Stud=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    school:{type:String,required:true},
    clas:{type:String,required:true}
},
{
    collection:'student-data'
})

const model=mongoose.model('Student',Stud)

module.exports=model