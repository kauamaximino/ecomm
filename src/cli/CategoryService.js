import axios from 'axios';
import chalk from 'chalk';

class CategoryService {
  static async findCategories() {
    const response = await axios.get('http://127.0.0.1:3000/categories');
    console.log(`response status: ${chalk.yellow(response.status)}`)
    return response.data;
  }

  static async findCategoryById(id) {
    const response = await axios.get(`http://127.0.0.1:3000/categories/${id}`);
    console.log(`response status: ${chalk.yellow(response.status)}`)
    return response.data;
  }
}

export default CategoryService;
