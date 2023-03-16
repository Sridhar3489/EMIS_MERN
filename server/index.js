const express=require("express")
const app=express()

const cors=require("cors")

const path = require('path');


const mongoose=require('mongoose')

const multer=require('multer')

const upload=multer({dest:'/uploads'})

app.use(express.urlencoded({ extended : true }));

app.use(express.json());

app.use('/',express.static('/uploads'))

const User=require('./models/user.model')

const Stud=require('./models/student.model')

const Faculty=require('./models/faculty.model')

const Course=require('./models/course.model')

const jwt=require('jsonwebtoken')

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser. text({type: '/'}));

const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'uploads', 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
           + path.extname(file.originalname))
    }
});

const Upload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 

const videoStorage = multer.diskStorage({
    destination: 'videos', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
         + path.extname(file.originalname))
    }
});

const videoUpload = multer({
    storage: videoStorage,
    limits: {
    fileSize: 10000000 // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
      // upload only mp4 and mkv format
      if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
         return cb(new Error('Please upload a video'))
      }
      cb(undefined, true)
   }
})

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


app.post('/api/image',Upload.single('imageUrl'),async(req,res)=>{
    console.log(req.body)
    try{
        const response=await Course.create({
            courseid:req.body.courseid,
            title:req.body.title,
            author:req.body.author,
            imageUrl:req.file.path,
        })
        const idd=response._id
        req.body.id(idd)
        res.json({idd})
    }catch(err){
        console.log(err)
    }
})

app.post('/api/video',videoUpload.single('videoUrl'),async(req,res)=>{
    console.log(req.body)
    try{
        await Course.create({
            courseid:req.body.courseid,
            videoUrl:req.file.path,
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
})


app.listen(1337,()=>{
    console.log("server started on 1337")
})