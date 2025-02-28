import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from './features/newsSlice';
import socket from './utils/socket';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNewsPage from './pages/AddNewsPage';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
        socket.on('newsUpdate', () => dispatch(fetchNews()));
        return () => socket.off('newsUpdate');
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-news" element={<AddNewsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
