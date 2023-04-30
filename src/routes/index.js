// const authMiddleware = require('../middlewares/auth');
import express from 'express';
const router = express.Router();
router.use('/auth', (req,res)=>{
res.json({code:1 , result:'ok'})
});

export default router;