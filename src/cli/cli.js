import CategoryService from './CategoryService.js'

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
  }
}

processarComando(process.argv);
