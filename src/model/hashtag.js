import mongoose from 'mongoose';
const hashtags_schema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    tweets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }]
   

},{timestamps:true});

const Hashtag=mongoose.model('Hashtag',hashtags_schema);

export default Hashtag;