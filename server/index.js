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


const District=require('./models/district.model')

const School=require('./models/school.model')

const jwt=require('jsonwebtoken')

const video=require('./models/videos.models')

app.use(cors())
app.use(express.json())
app.use('/uploads',express.static('uploads'))

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
   const user=await User.find({
    email:req.body.email,
    password:req.body.password
   }
   )
   if(user){
    return res.json({user})
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
            aggr:req.body.aggr,
            gender:req.body.gender
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
    
})

app.post('/api/districtregister',async(req,res)=>{
    console.log(req.body)
    try{
        const response=await District.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            dist:req.body.dist,
            
        })
        res.json({status:'ok',response})
    }catch(err){
        res.json({status:'error',response:false})
    }
    
})

app.get('/api/alldistricts',async(req,res)=>{
    try{
    const districts=await District.find({});
    return res.status(200).json(districts);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.get('/api/allschools',async(req,res)=>{
    try{
    const school=await School.find({});
    return res.status(200).json(school);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.get('/api/allfaculty',async(req,res)=>{
    try{
    const school=await Faculty.find({});
    return res.status(200).json(school);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.get('/api/allstud',async(req,res)=>{
    try{
    const stud=await Stud.find({});
    return res.status(200).json(stud);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.delete('/api/deletedist/:id',async(req,res)=>{ 
    try{
    await District.deleteOne({_id:req.params.id});
    res.status(201).json({status:'ok'});
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.delete('/api/deleteschl/:id',async(req,res)=>{ 
    try{
    await School.deleteOne({_id:req.params.id});
    res.status(201).json({status:'ok'});
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.delete('/api/deletefac/:id',async(req,res)=>{ 
    try{
    await Faculty.deleteOne({_id:req.params.id});
    res.status(201).json({status:'ok'});
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.delete('/api/deletestud/:id',async(req,res)=>{ 
    try{
    await Stud.deleteOne({_id:req.params.id});
    res.status(201).json({status:'ok'});
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.get('/api/district/:id',async(req,res)=>{
    try{
    const distrk=await District.find({_id:req.params.id});
    res.status(200).json(distrk);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.get('/api/school/:id',async(req,res)=>{
    try{
    const distrk=await School.find({_id:req.params.id});
    res.status(200).json(distrk);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.get('/api/faculty/:id',async(req,res)=>{
    try{
    const distrk=await Faculty.find({_id:req.params.id});
    res.status(200).json(distrk);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.get('/api/student/:id',async(req,res)=>{
    try{
    const distrk=await Stud.find({_id:req.params.id});
    res.status(200).json(distrk);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.put('/api/editdist/:id',async(req,res)=>{
    
    try{
    await District.updateOne({_id:req.params.id},req.body);
    res.status(201).json({status:'ok'});
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.put('/api/editschl/:id',async(req,res)=>{
    
    try{
    await School.updateOne({_id:req.params.id},req.body);
    res.status(201).json({status:'ok'});
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.put('/api/editfac/:id',async(req,res)=>{
    
    try{
    await Faculty.updateOne({_id:req.params.id},req.body);
    res.status(201).json({status:'ok'});
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.put('/api/editstud/:id',async(req,res)=>{
    
    try{
    await Stud.updateOne({_id:req.params.id},req.body);
    res.status(201).json({status:'ok'});
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.post('/api/studentlogin',async(req,res)=>{
    const user=await District.findOne({
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


app.post('/api/schoolregister',async(req,res)=>{
    console.log(req.body)
    try{
        const response=await School.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            distr:req.body.distr,
        })
        //res.json(res.distid)
        res.json({status:'ok'})
        
    }catch(err){
        console.log(err)
    }
    
})

app.post('/api/search',async(req,res)=>{
    const x=District.findOne({dist:'abc'})
    res.json(x)
})

app.post('/api/facultyregister',async(req,res)=>{
    console.log(req.body)
    try{
        await Faculty.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            subject:req.body.subject,
            school:req.body.school
        })
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
    
})

app.post('/api/facultyloginforcourse',async(req,res)=>{
    const user=await Faculty.find({
     email:req.body.email,
     password:req.body.password
    }
    )
    if(user){
     return res.json({status:'ok',user})
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

const cpUpload=upload.fields([{name:'imageUrl',maxCount: 1 }, { name: 'videoUrl', maxCount: 1 }]);
app.post('/api/video',cpUpload,async(req,res)=>{
   
    try{
        await video.create({
                title:req.body.title,
                description:req.body.description,
                imageUrl:req.files['imageUrl'][0].path,
                videoUrl:req.files['videoUrl'][0].path,
            })
         
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
    
})

app.get('/api/uploadedVideos',async(req,res)=>{
    try{
    const vi=await video.find({});
    res.status(200).json(vi);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})

app.get('/api/getvideo/:id',async(req,res)=>{
    try{
    const vid=await video.find({_id:req.params.id});
    res.status(200).json(vid);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
})
app.listen(1337,()=>{
    console.log("server started on 1337")
})
