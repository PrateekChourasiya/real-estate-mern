import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();


const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  credentials: true,
}));

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

// app.options('*', (req, res) => {
//   res.sendStatus(200);
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "INTERNAL SERVER ERROR";
  return res.status(statusCode).json({
    success : false,
    statusCode,
    message,
  });
});

