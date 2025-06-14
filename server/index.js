import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

//health api to check if the server is running
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

const PORT = 5002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});