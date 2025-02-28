import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import newsRoutes from './routes/newsRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Define API routes
app.use('/api', newsRoutes); // This should match '/api/news'

// Test route
app.get('/', (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
