import mongoose from 'mongoose';
const tweet_Schema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[200,'Tweet content cannot be more than 250 characters']
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }
    ],
    Comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]

   },{timestamps:true});

const Tweet=mongoose.model('Tweet',tweet_Schema);
export default Tweet;