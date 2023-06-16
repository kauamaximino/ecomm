import fs from 'fs';
import CategoryService from './CategoryService';

const processarComando = async (argumentos) => {
  switch (argumentos[2]) {
    case '--listarCategorias':
      const AllCategories = await CategoryService.findCategories();
      console.log(AllCategories);
      break;

    case '--recuperarCategoriaPorId':
      const CategoryId = await CategoryService.findCategoryById(argumentos[3]);
      console.log(CategoryId);
      break;

    case '--inserirCategoria':
      const category = fs.readFileSync(`${argumentos[3]}`, 'utf8');
      const newCategory = await CategoryService.createCategory(JSON.parse(category));
      console.log(newCategory);
      break;

    case '--atualizarCategoria':
      const categoryUpdate = fs.readFileSync(`${argumentos[4]}`, 'utf8');
      const updateCategory = await CategoryService
        .updateCategory(argumentos[3], JSON.parse(categoryUpdate));
      console.log(updateCategory);
      break;

    case '--excluirCategoria':
      const deleteCategory = await CategoryService.deleteCategory(argumentos[3]);
      console.log(deleteCategory);
      break;

    default:
      console.log('Comando inválido');
  }
};

processarComando(process.argv);
