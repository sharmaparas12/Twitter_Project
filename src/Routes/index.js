import Express  from "express";
import v1routes from './v1/index.js';
const router=Express.Router();

router.use('/v1',v1routes);
export default router;