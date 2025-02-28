import { createSlice } from '@reduxjs/toolkit';
import { fetchNewsAPI, addNewsAPI } from '../services/newsService';

export const newsSlice = createSlice({
    name: 'news',
    initialState: { items: [] },
    reducers: {
        setNews: (state, action) => { state.items = Array.isArray(action.payload) ? action.payload : []; },
        addNews: (state, action) => { state.items.unshift(action.payload); }
    },
});

export const { setNews, addNews } = newsSlice.actions;

// Fetch news from API
export const fetchNews = () => async (dispatch) => {
    try {
        const response = await fetchNewsAPI();
        dispatch(setNews(response.data));
    } catch (error) {
        console.error("Error fetching news:", error);
    }
};

// Add new news item
export const submitNews = (newsData) => async (dispatch) => {
    try {
        const newArticle = await addNewsAPI(newsData);
        dispatch(addNews(newArticle));
    } catch (error) {
        console.error("Error adding news:", error);
    }
};

export default newsSlice.reducer;
