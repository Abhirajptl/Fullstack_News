import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitNews } from '../features/newsSlice';

const AddNewsPage = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ title: '', content: '', category: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.title && form.content && form.category) {
            dispatch(submitNews(form));
            setForm({ title: '', content: '', category: '' });
        }
    };

    return (
        <div>
            <h1>Add News</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
                <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" required />
                <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
                <button type="submit">Add News</button>
            </form>
        </div>
    );
};

export default AddNewsPage;
