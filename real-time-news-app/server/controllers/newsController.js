import News from '../models/newsModel.js';

// Fetch all news
export const getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ message: "Error fetching news" });
    }
};

// Add new news
export const addNews = async (req, res) => {
    try {
        const { title, content, category } = req.body;

        if (!title || !content || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newNews = new News({ title, content, category });
        await newNews.save();

        res.status(201).json({ message: "News added successfully", news: newNews });
    } catch (error) {
        console.error("Error adding news:", error);
        res.status(500).json({ message: "Error adding news" });
    }
};
