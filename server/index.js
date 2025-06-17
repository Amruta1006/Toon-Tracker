import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
dotenv.config();
import TvShow from './models/TvShow.js'; 

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const connectDB = async () => {
    const conn = await mongoose.connect(
        process.env.MONGODB_URI
    );
    if(conn){
        console.log("MongoDB connected successfully");
    }
    else {
        console.error("MongoDB connection failed");
    }
};
const TV_SHOWS = [];

// Health check API
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

// Get all TV shows
app.get('/tv-shows', (req, res) => {
    res.status(200).json({
        success: true,
        data: TV_SHOWS,
        message: 'TV shows fetched successfully'
    });
});

// Add a new TV show
app.post('/tv-shows', async(req, res) => {
    const { title, time, channel, thumbnail } = req.body;
    
    const newTvShow = new TvShow({
        title,
        time,
        channel,
        thumbnail
    });
    const savedTvShow = await newTvShow.save();

    return res.status(201).json({
        success: true,
        data: savedTvShow,
        message: 'TV show added successfully'
    });
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
