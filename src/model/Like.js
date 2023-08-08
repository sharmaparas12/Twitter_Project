import mongoose from 'mongoose';
const Like_schema=new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:["Tweet","Comments"]
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }


    
   

},{timestamps:true});

const Like=mongoose.model('Like',Like_schema);

export default Like