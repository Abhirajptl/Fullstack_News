import React from 'react';
import { useSelector } from 'react-redux';
import NewsItem from '../components/NewsItem';
import '../styles/news.css'; // Import CSS file

const HomePage = () => {
    const news = useSelector((state) => Array.isArray(state.news?.items) ? state.news.items : []);

    return (
        <div className="news-container">
            <h1>Real-Time News</h1>
            {news.length > 0 ? (
                news.map((item, index) => (
                    <NewsItem key={index} title={item.title} content={item.content} />
                ))
            ) : (
                <p>No news available</p>
            )}
        </div>
    );
};

export default HomePage;
