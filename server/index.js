import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const TV_SHOWS = []

//health api to check if the server is running
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

// API to get all TV shows or read all shows
app.get('/tv-shows', (req, res) => {
    res.status(200).json({
        success: true,
        data: TV_SHOWS,
        message: 'TV shows fetched successfully'
    });
}); 

// API to add a new TV show
app.post('/tv-shows', (req, res) => {
    const {title,time,channel,thumbnail} = req.body;
    //object of tv shows
    const newShow = {
        title,
        time,
        channel,
        thumbnail
    };
    TV_SHOWS.push(newShow);

    return res.status(201).json({
        success: true,
        data: newShow,
        message: 'TV show added successfully'
    });
});

const PORT = 5002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});