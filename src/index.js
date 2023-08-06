import express from 'express';
const app=express();
import connect from './config/database.js';
import service from './services/tweet_service.js';

const setupserver=async () => {


app.listen(3000, async () => {
    console.log("server started at 3000");
});

await connect();
const ser=new service();
 await ser.create({content:"hi  i have changed the moduling of the project from common js to es moduling"});
 




}


setupserver();
