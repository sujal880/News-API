const User = require("../models/usermodel");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const secretkey="ahdckihkihkbckbkbcfkabihyiugfikuwgsfhnckifshnfhsh";
const signin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            res.status(400).json({
                message:"enter required field's email,password"
            })
        }
        const existinguser=await User.findOne({email});
        if(!existinguser){
            res.status(403).json({
                message:"invalid email or password"
            })
        }
        const isMatch=await bcrypt.compare(password,existinguser.password);
        if(!isMatch){
            res.status(403).json({
                message:"password does'nt match"
            })
        }
        const token=jwt.sign({
            userId:existinguser._id
        },secretkey,{expiresIn:'48h'});
        res.status(200).json({
            message:"sign in success",
            response:existinguser,
            token:token
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=signin;