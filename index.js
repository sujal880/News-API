require('dotenv').config();
require('./config/db');
const express=require('express');
const allroutes = require('./app');
const app=express();
const PORT=process.config.SERVER | 3000;
app.use(express.json());
app.use(allroutes);
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server is Running Properly"
    })
})
app.listen(PORT,(req,res)=>{
    console.log('Server is Running on PORT '+PORT);
})