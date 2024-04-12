import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js'
import { createError } from '../utils/error.js';

export const createRoom = async (req,res,next) =>{
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();

        try {
           await Hotel.findByIdAndUpdate(hotelId,{
            $push: {rooms : savedRoom._id}
           })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
       next(error)
    }
}


// Update Controller

export const updatedRoom = async (req,res,next)=>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,
            { $set :req.body},
            {new :true});
        res.status(200).json(updatedRoom);
      } catch (error) {
        next(Error);
      }
}

// DELETE Controller

export const deleteRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId,{
             $pull: {rooms : req.params.id}
            })
         } catch (error) {
             next(error)
         }
        res.status(200).json("Room has been delete successfully")
    } catch (error) {
        next(error);
        
    }
}

// Get Controller

export const getRoom = async (req,res,next)=>{
    try {
        const room = await Room.findById(req.params.id);
         res.status(200).json(room)
     } catch (error) {
        next(error);
         
     }
}

// GetAll Controller

export const getRooms = async (req,res,next)=>{
    try {
        const allRoom = await Room.find();
         res.status(200).json(allRoom)
     } catch (error) {
       next(error)
         
     }
}