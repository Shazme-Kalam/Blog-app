import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from './routes/blogRoute.js';

dotenv.config(); 

const app = express();

app.use(express.json());

const allowedOrigins = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;
const databaseUrl = process.env.DATABASE_URL;

app.use("/api", route);

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.log('Database connection error:', error);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
