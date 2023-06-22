import express from 'express';
import CategoryController from '../controllers/categoriesController.js';

const router = express.Router();

router
  .get('/categories', CategoryController.getAllCategories)
  .get('/categories/:id', CategoryController.getCategoryById)
  .post('/categories', CategoryController.insertCategory);

export default router;
