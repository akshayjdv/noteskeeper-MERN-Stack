import express from 'express';
import mongoose from 'mongoose';
const app = express();
import dotenv from 'dotenv';
import myRouter from './routes/router.js';
import Connection from './database/db.js';
import cors from 'cors'

dotenv.config();



Connection();



// body ma thi j avse e read ny kri sake bakcend mate use thai
app.use(express.json());
app.use(cors());

// to use routing facility to call all api in router folder
app.use(myRouter);



app.listen(process.env.PORT || 5000 ,()=>{
    console.log(`serever running on port ${process.env.PORT}`)
});