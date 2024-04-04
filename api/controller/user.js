import User from "../models/User.js";

// Update Controller

export const updateUser = async (req,res,next)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,
            { $set :req.body},
            {new :true});
        res.status(200).json(updateUser);
      } catch (error) {
        next(Error);
      }
}

// DELETE Controller

export const deleteUser = async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete successfully")
    } catch (error) {
        next(error);
        
    }
}

// Get Controller

export const getUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id);
         res.status(200).json(user)
     } catch (error) {
        next(error);
         
     }
}

// getAll Controller

export const getAllUser = async (req,res,next)=>{
    try {
        const users = await User.find();
         res.status(200).json(users)
     } catch (error) {
       next(error)
         
     }
}