import express from 'express'
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
import { createHotel, deleteHotel, getAllHotel, getHotel, updatedHotel } from '../controller/hotel.js';
import { verifyAdmin } from '../utils/verifytoken.js';
const router = express.Router();

//CREATE
router.post('/',verifyAdmin,createHotel);
//UPDATE
router.put('/:id',verifyAdmin,updatedHotel)
//DELETE
router.delete('/:id',verifyAdmin,deleteHotel)
//GET
router.get('/:id',getHotel)
//GET ALL
router.get('/',getAllHotel)

export default router;