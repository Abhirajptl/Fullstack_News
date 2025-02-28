import axios from 'axios';

const API_URL = 'http://localhost:5000/api/news';

// Fetch all news
export const fetchNewsAPI = async () => {
    try {
        const response = await axios.get(API_URL);
        return response;
    } catch (error) {
        console.error("Error fetching news from API:", error);
        return { data: [] };
    }
};

// Add a news article
export const addNewsAPI = async (newsData) => {
    try {
        const response = await axios.post(API_URL, newsData);
        return response.data;
    } catch (error) {
        console.error("Error adding news:", error);
    }
};
