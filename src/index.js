import express from 'express';
const app=express();
import connect from './config/database.js';
import service from './services/tweet_service.js';
import bodyParser from 'body-parser';
import apiroutes from './Routes/index.js';

const setupserver=async () => {


app.listen(3000, async () => {
    console.log("server started at 3000");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiroutes);
await connect();





}


setupserver();
