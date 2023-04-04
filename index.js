const express = require('express')
//const req = require('express/lib/request')
const authRoutes = require('./routes/auth.js')
require('dotenv').config()//*

const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.3ducles.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
mongoose
    .connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('Conectado a la BD')
    })
    .catch((e)=>{
        console.log('Database error',e)
    })

const app = express()

app.use('/api/user',authRoutes)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.json({mensaje:'My Auth Api Rest'})
})

//*2
//app.get('/',(req, res) =>{
//    res.json({
//        estado:true,
//        mensaje:'Ya funciona!!'
//    })
//})



//app.listen(8002,()=>{
    //console.log('Tu servidor está corriendo en el puerto: 8002')
//})
const PORT = process.env.PORT || 8002 //*
app.listen(PORT,()=>{
    console.log(`Tu servidor está corriendo en el puerto: ${PORT}`)
})