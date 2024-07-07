import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from './routes/blogRoute.js';

dotenv.config(); 

const app = express();

app.use(express.json());

const corsOption = {
    origin: 'https://blog-app-frontend-delta.vercel.app',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}
app.use(cors(corsOption));

const PORT = process.env.PORT || 5000;
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
