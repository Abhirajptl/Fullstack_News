import React from 'react';

const NewsItem = ({ title, content }) => {
    return (
        <div className="news-item">
            <h2 className="news-title">{title}</h2>
            <p className="news-content">{content}</p>
        </div>
    );
};

export default NewsItem;
