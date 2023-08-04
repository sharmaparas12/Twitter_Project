const mongoose=require('mongoose');
const tweet_Schema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[200,'Tweet content cannot be more than 250 characters']
    },
    hashtags:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hashtag'
    }
   

},{timestamps:true});

const Tweet=mongoose.model('Tweet',tweet_Schema);
module.exports=Tweet;