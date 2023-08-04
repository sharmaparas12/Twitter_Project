const express=require('express');
const app=express();
const connect=require('./config/database');
const tweet=require('./model/tweet');
const comments=require('./model/comments');
const setupserver=async () => {


app.listen(3000,() => {
    console.log("server started at 3000");


});

await connect();
// const data=await tweet.create({content:'hi this is the first entry in the database',email:'ps468257@gmail.com'});
// console.log(data);


// const tweets=await tweet.create({content:"trying adding a comments"});
// const comment=await comments.create({content:"adding first comment"});
// console.log(tweets);
// tweets.comments.push(comment);
// await tweets.save();
// console.log(tweets);




}


setupserver();
