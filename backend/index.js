import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "../routes/blogRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: "*", // free + no CORS issue
}));

app.use("/api", route);

let connected = false;

async function connectDB() {
  if (connected) return;
  await mongoose.connect(process.env.DATABASE_URL);
  connected = true;
}

export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}



// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import route from './routes/blogRoute.js';

// dotenv.config(); 

// const app = express();

// app.use(express.json());

// app.use(cors({
//   origin: 'https://blog-app-sooty-eight.vercel.app',
// }));

// app.options('*', (req, res) => {
//   res.header("Access-Control-Allow-Origin", "https://blog-app-sooty-eight.vercel.app");
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   return res.sendStatus(200);
// });

// // const corsOption = {
// //     origin: 'https://blog-87ipb032i-shazmes-projects.vercel.app',
// //     // origin: 'https://blog-app-frontend-delta.vercel.app',
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //     credentials: true,
// // }

// const PORT = process.env.PORT || 5000;
// const databaseUrl = process.env.DATABASE_URL;

// app.use("/api", route);

// mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Database connected successfully');
//     })
//     .catch((error) => {
//         console.log('Database connection error:', error);
//     });

// // app.listen(PORT, () => {
// //     console.log(`Server is running on port: ${PORT}`);
// // });
