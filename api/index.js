import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("Connected to MongoDB");
  
  app.listen(4500, () => {
    console.log("Listening at Port 4500");
  });
})
.catch((err)=>{
  console.log(err);
});



