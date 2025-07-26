import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();


const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("Connected to MongoDB");

  app.listen(4500, () => {
    console.log("Listening at Port 4500");
  });
})
.catch((err)=>{
  console.log(err);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

