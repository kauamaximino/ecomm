import CategoryModel from '../models/Category.js';

class CategoryController {
  static async getAllCategories(request, response) {
    try {
      const categories = await CategoryModel.find();
      response.status(200).json(categories);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }

  static async getCategoryById(request, response) {
    try {
      const { id } = request.params;
      const category = await CategoryModel.findById(id);
      if (!category) {
        response.status(404).json({ message: 'Category not found' });
      } else {
        response.status(200).json(category);
      }
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }

  static async insertCategory(request, response) {
    try {
      const category = new CategoryModel(request.body);
      await category.save();
      response.status(201).json(category);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }
}

export default CategoryController;
