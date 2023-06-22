import express from 'express';
import categories from './categories.routes.js';

const routes = (app) => {
  app.route('/').get((request, response) => response
    .status(200)
    .json({ message: 'Hello World' }));

  app.use(
    express.json(),
    categories,
  );
};

export default routes;
