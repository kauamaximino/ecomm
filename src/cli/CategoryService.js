import axios from 'axios';
import chalk from 'chalk';

class CategoryService {
  static async findCategories() {
    const response = await axios.get('http://127.0.0.1:3000/categories');
    console.log(`response status: ${chalk.yellow(response.status)}`);
    return response.data;
  }

  static async findCategoryById(id) {
    const response = await axios.get(`http://127.0.0.1:3000/categories/${id}`);
    console.log(`response status: ${chalk.yellow(response.status)}`);
    return response.data;
  }

  static async createCategory(category) {
    const response = await axios.post('http://127.0.0.1:3000/categories', category);
    console.log(`response status: ${chalk.yellow(response.status)}`);
    return response.data;
  }

  static async updateCategory(id, category) {
    const response = await axios.put(`http://127.0.0.1:3000/categories/${id}`, category);
    console.log(`response status: ${chalk.yellow(response.status)}`);
    return response.data;
  }

  static async deleteCategory(id) {
    const response = await axios.delete(`http://127.0.0.1:3000/categories/${id}`);
    console.log(`response status: ${chalk.yellow(response.status)}`);
    return response.data;
  }
}

export default CategoryService;
