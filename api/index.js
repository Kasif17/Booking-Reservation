import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js';
import usersRoute from './routes/users.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config();
const app = express();

// database connected for backend
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log('Database connected successfully.');
    } catch (err) {
        throw err;
    }
};



mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disonnected");
})
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected");
})

// middleware 
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);


// Error Handling Middleware
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errMessage = err.status || "Somethings went wrong"
   return res.status(errorStatus).json({
    success:false,
    stutus:errorStatus,
    message:errMessage,
    stack: err.stack,
   })
})

app.listen(3100,()=>{
    connect();
    console.log('server is running on port ');
})