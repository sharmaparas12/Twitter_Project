import mongoose from 'mongoose';
const Comment_schema=new mongoose.Schema({
    content:{
        type:String,
        required:true

    },
    onModel:{
        type:String,
        required:true,
        enum:["Tweet","Comment"]
    },
    commentable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]


    
   

},{timestamps:true});

const Comment=mongoose.model('Comment',Comment_schema);

export default Comment