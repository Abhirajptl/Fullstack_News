import express from 'express';
import { getAllNews, addNews } from '../controllers/newsController.js';

const router = express.Router();

router.get('/news', getAllNews);
router.post('/news', addNews);

export default router;
