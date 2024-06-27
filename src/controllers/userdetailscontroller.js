const User = require("../models/usermodel");

const userDetails=async(req,res)=>{
    try{
        const {id}=req.body;
        if(!id){
            res.status(400).json({
                message:"enter user id"
            })
        }
        const data=await User.findById(id);
        if(data){
            res.status(200).json({
                message:"userdetails",
                response:data
            })
        }
        res.status(400).json({
            message:"no data found"
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}
module.exports=userDetails;