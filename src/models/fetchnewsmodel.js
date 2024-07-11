const mongoose=require('mongoose');
const newsSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
});
const News=mongoose.model('news',newsSchema);
module.exports=News;