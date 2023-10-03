const express = require('express');
const blogController = require('../controllers/blogController');
const blogRoutes = express.Router();

// get all articles
blogRoutes.get('/', blogController.getArticles);

// get article by id
blogRoutes.get('/:articleId', blogController.getArticleById);

module.exports = { blogRoutes };