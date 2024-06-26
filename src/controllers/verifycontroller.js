const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const secretkey="ahdckihkihkbckbkbcfkabihyiugfikuwgsfhnckifshnfhsh";

const verifycontroller=async(req,res,next)=>{
    try{
        const token=req.headers['authorization'];
        if(!token){
            res.status(403).json({
                message:"no token provided"
            })
        }
        jwt.verify(token,secretkey,(err,decoded)=>{
            if(err){
                return res.status(500).json({
                    message:"failed to authenticate user"
                })
            }
            req.user=decoded;
            next();
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=verifycontroller;