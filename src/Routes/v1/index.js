import express from "express";
import {create} from '../../controller/tweet_controller.js';
import { createlike } from "../../controller/likes_controller.js";
import {createcomment} from '../../controller/comment_controller.js';

const router=express.Router();


router.post('/tweets',create);
router.post('/tweets/toggle',createlike);
router.post('/comment',createcomment);


export default router;