/* eslint-disable camelcase */
/* eslint-disable no-undef */
import request from 'supertest';
import {
  describe, expect, it,
} from '@jest/globals';
import dotenv from 'dotenv';

dotenv.config();

describe('GET em /products', () => {
  it('should return all products', async () => {
    const response = await request(`${process.env.HOST_NAME}:${process.env.PORT}`).get('/products');
    expect(response.status).toBe(200);

    response.body.forEach((product) => {
      expect(product).toHaveProperty('_id');
      expect(product).toHaveProperty('nome');
      expect(product).toHaveProperty('slug');
      expect(product).toHaveProperty('preco_unitario');
      expect(product).toHaveProperty('estoque');
    });
  });

  it('should return a product by id', async () => {
    const response = await request(`${process.env.HOST_NAME}:${process.env.PORT}`)
      .get('/products');
    const {
      _id, nome, estoque,
    } = response.body[0];

    const responseId = await request(`${process.env.HOST_NAME}:${process.env.PORT}`)
      .get(`/products/${_id}`);
    expect(responseId.status).toBe(200);
    expect(responseId.body).toHaveProperty('_id');
    expect(responseId.body).toHaveProperty('preco_unitario');
    expect(responseId.body.nome).toBe(nome);
    expect(responseId.body.estoque).toBe(estoque);
  });
});

describe('POST em /products', () => {
  it('should insert a product', async () => {
    const product = {
      nome: 'PC Gamer AMD Ryzen 5 3400G 8GB DDR4 HD 1TB 500W',
      slug: 'jsafjbdshf45667',
      preco_unitario: 5000,
      estoque: 10,
    };

    const response = await request(`${process.env.HOST_NAME}:${process.env.PORT}`)
      .post('/products')
      .send(product);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('preco_unitario');
    expect(response.body.nome).toBe(product.nome);
    expect(response.body.estoque).toBe(product.estoque);
  });

  it(
    'should return 500 when insert a product with invalid data',
    async () => {
      const product = {
        nome: '',
        preco_unitario: 10,
        estoque: 10,
      };

      const response = await request(`${process.env.HOST_NAME}:${process.env.PORT}`)
        .post('/products')
        .send(product);
      expect(response.status).toBe(500);
    },
  );
});

describe('DELETE em /products', () => {
  it('should delete a product by id', async () => {
    const response = await request(`${process.env.HOST_NAME}:${process.env.PORT}`)
      .get('/products');
    const { _id } = response.body[0];

    const responseId = await request(`${process.env.HOST_NAME}:${process.env.PORT}`)
      .delete(`/products/${_id}`);
    expect(responseId.status).toBe(200);
    expect(responseId.body.message).toBe('Product deleted');
  });
});
