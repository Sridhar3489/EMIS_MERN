const express=require("express")
const app=express()

const cors=require("cors")


const mongoose=require('mongoose')

const User=require('./models/user.model')

const Stud=require('./models/student.model')

const Faculty=require('./models/faculty.model')

const Course=require('./models/course.model')

const jwt=require('jsonwebtoken')

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://0.0.0.0:27017/')



app.post('/api/register',async(req,res)=>{
    console.log(req.body)
    try{
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
    
})

app.post('/api/login',async(req,res)=>{
   const user=await User.findOne({
    email:req.body.email,
    password:req.body.password
   }
   )
   if(user){
    return res.json({status:'ok',user:true})
   }
   else{
    return res.json({status:'error',user:false})
   }
    
})

app.post('/api/studentlogin',async(req,res)=>{
    const user=await Stud.findOne({
     email:req.body.email,
     password:req.body.password
    }
    )
    if(user){
     const token=jwt.sign({
         name:user.name,
         email:user.email
     },'secret13')
     return res.json({status:'ok',user:true})
    }
    else{
     return res.json({status:'error',user:false})
    }
})



app.post('/api/studentregister',async(req,res)=>{
    console.log(req.body)
    try{
        await Stud.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            study:req.body.study,
            school:req.body.school,
            aggr:req.body.aggr
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
    
})

app.post('/api/facultyregister',async(req,res)=>{
    console.log(req.body)
    try{
        await Faculty.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            subject:req.body.subject
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
    
})

app.post('/api/facultyloginforcourse',async(req,res)=>{
    const user=await Faculty.findOne({
     email:req.body.email,
     password:req.body.password
    }
    )
    if(user){
     const token=jwt.sign({
         name:user.name,
         email:user.email
     },'secret13')
     return res.json({status:'ok',user:true})
    }
    else{
     return res.json({status:'error',user:false})
    }
})

app.post('/api/addcourse',async(req,res)=>{
    console.log(req.body)
    try{
        await Course.create({
            title:req.body.title,
            author:req.body.author
            
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
    
})

app.listen(1337,()=>{
    console.log("server started on 1337")
})