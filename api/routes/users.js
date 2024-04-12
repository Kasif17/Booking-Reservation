import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controller/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifytoken.js';
const router = express.Router();

// router.get('/checkauthentication', verifyToken,(req,res,next)=>{
//     res.send("Hello user , You are logged in")
// })
// // user delete account
// router.get('/checkuser/:id', verifyUser,(req,res,next)=>{
//     res.send("Hello user , You are logged in and delete you accont")
// })

// //Admin 

// router.get('/checkadmin/:id', verifyAdmin,(req,res,next)=>{
//     res.send("hello admin , You are logged in and delete all account")
// })

//UPDATE
router.put('/:id' , verifyUser,updateUser)
//DELETE
router.delete('/:id',verifyUser,deleteUser)
//GET
router.get('/:id',verifyUser,getUser)
//GET ALL
router.get('/',verifyAdmin,getUsers)

export default router;