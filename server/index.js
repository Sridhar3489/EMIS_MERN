const express=require("express")
const app=express()

const cors=require("cors")


const mongoose=require('mongoose')

const User=require('./models/user.model')

const Stud=require('./models/student.model')

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

app.post('/api/addstudent',async(req,res)=>{
    console.log(req.body)
    try{
        await Stud.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            school:req.body.school,
            clas:req.body.clas
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
    
})

app.get('/api/allStudents',async(req,res)=>{
    try{
    const students=await Stud.find({});
    res.status(200).json(students);
    }
    catch(err){
        res.status(404).json({message: error.message});
    }
})

app.get('/api/:id',async(req,res)=>{
    try{
    const student=await Stud.find({_id:req.params.id});
    res.status(200).json(student);
    }
    catch(err){
        res.status(404).json({message: error.message});
    }
})

app.put('/api/edit/:id',async(req,res)=>{
    
    try{
    await Stud.updateOne({_id:req.params.id},req.body);
    res.status(201).json({status:'ok'});
    }
    catch(err){
        res.status(404).json({message: error.message});
    }
})

app.delete('/api/delete/:id',async(req,res)=>{ 
    try{
    await Stud.deleteOne({_id:req.params.id});
    res.status(201).json({status:'ok'});
    }
    catch(err){
        res.status(404).json({message: error.message});
    }
})
app.listen(1337,()=>{
    console.log("server started on 1337")
})