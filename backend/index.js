import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/blogRoute.js';

dotenv.config(); 

const app = express();

app.use(express.json());
app.use(cors({
    // origin: 'https://crud-front-tau.vercel.app',
    // methods: ["POST", "GET", "PUT", "DELETE"],
    // credentials: true
}));

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
