const mongoose=require('mongoose');
const express=require('express');
const app= express();
const EModel=require('./Models/ExerciseSchema');
const cors=require('cors');
app.use(cors());
//to connect app port
app.listen(8000,()=>{console.log('listening on 8000')});
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/Exerciseto", { useNewUrlParser: true })
    .then(console.log('established connection'));
    app.use(express.json());

    app.post('/publish', async(req,res)=>{
        const post=await EModel(req.body);
        post.save();
        res.send(post);
    })
    
    app.get('/publish', async(req,res)=>{
        const get=await EModel.find();
        res.json(get);});

    app.get('/publish/:id', async(req,res)=>{
        const get=await EModel.findById(req.params.id);
        res.json(get);});
    app.delete('/publish/:id', async(req,res)=>{
        const del=await EModel.findByIdAndRemove(req.params.id);
    res.json(del);});

    app.put('/publish/:id', async(req,res)=>{
        const put=await EModel.findByIdAndUpdate(req.params.id,{$set:req.body,})});