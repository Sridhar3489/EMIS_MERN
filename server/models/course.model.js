const mongoose=require("mongoose")

const Course=new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true}
},
{
    collection:'course-data'
})

const model=mongoose.model('Course',Course)

module.exports=model