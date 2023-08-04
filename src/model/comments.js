const mongoose=require('mongoose');
const comment_Schema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
   

},{timestamps:true});

const comment=mongoose.model('Comment',comment_Schema);
module.exports=comment;