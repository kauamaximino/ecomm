import CategoryModel from '../models/Category.js';

class CategoryController {
  static async getAllCategories(request, response) {
    try {
      const categories = await CategoryModel.find();
      return response.status(200).json(categories);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async getCategoryById(request, response) {
    try {
      const { id } = request.params;
      const category = await CategoryModel.findById(id);
      if (!category) {
        return response.status(404).json({ message: 'Category not found' });
      }
      return response.status(200).json(category);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async insertCategory(request, response) {
    try {
      const category = new CategoryModel(request.body);
      await category.save();
      return response.status(201).json(category);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async updateCategory(request, response) {
    try {
      const { id } = request.params;
      const category = await CategoryModel.findById(id);
      if (!category) {
        return response.status(404).json({ message: 'Category not found' });
      }
      await CategoryModel.updateOne({ _id: id }, request.body);
      return response.status(200).json({ _id: id, ...request.body });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async deleteCategory(request, response) {
    try {
      const { id } = request.params;
      const categoryDeleted = await CategoryModel.findByIdAndDelete(id);
      if (!categoryDeleted) {
        return response.status(404).json({ message: 'Category not found' });
      }
      return response.status(200).json({ message: 'Category deleted' });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

export default CategoryController;
