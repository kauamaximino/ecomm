import ProductModel from '../models/Product.js';

class ProductController {
  static async getAllProducts(request, response) {
    try {
      const products = await ProductModel.find();
      return response.status(200).json(products);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async getProductById(request, response) {
    try {
      const { id } = request.params;
      const product = await ProductModel.findById(id);
      if (!product) {
        return response.status(404).json({ message: 'Product not found' });
      }
      return response.status(200).json(product);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async insertProduct(request, response) {
    try {
      const product = new ProductModel(request.body);
      await product.save();
      return response.status(201).json(product);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async updateProduct(request, response) {
    try {
      const { id } = request.params;
      const product = await ProductModel.findById(id);
      if (!product) {
        return response.status(404).json({ message: 'Product not found' });
      }
      await ProductModel.updateOne({ _id: id }, request.body);
      return response.status(200).json({ _id: id, ...request.body });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  static async deleteProduct(request, response) {
    try {
      const { id } = request.params;
      const productDeleted = await ProductModel.findByIdAndDelete(id);
      if (!productDeleted) {
        return response.status(404).json({ message: 'Product not found' });
      }
      return response.status(200).json({ message: 'Product deleted' });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

export default ProductController;
