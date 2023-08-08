import express from "express";
import {create} from '../../controller/tweet_controller.js';
import { createlike } from "../../controller/likes_controller.js";

const router=express.Router();


router.post('/tweets',create);
router.post('/tweets/toggle',createlike);


export default router;