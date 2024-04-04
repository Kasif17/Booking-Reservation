import express from 'express'
const router = express.Router();

router.get('/rooms',(req,res)=>{
    res.send("this page is the hotes pages")
})

export default router;