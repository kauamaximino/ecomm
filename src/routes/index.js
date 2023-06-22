import express from 'express';
import categories from './categories.routes.js';
import products from './products.routes.js';

const routes = (app) => {
  app.route('/').get((request, response) => response
    .status(200)
    .json({ message: 'Hello World' }));

  app.use(
    express.json(),
    categories,
    products,
  );
};

export default routes;
