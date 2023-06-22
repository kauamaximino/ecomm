/* eslint-disable no-undef */
import request from 'supertest';
import {
  describe, expect, it,
} from '@jest/globals';

describe('GET em /categories', () => {
  it('should return all categories', async () => {
    const response = await request('http://localhost:3000').get('/categories');
    expect(response.status).toBe(200);

    response.body.forEach((category) => {
      expect(category).toHaveProperty('_id');
      expect(category).toHaveProperty('nome');
      expect(category).toHaveProperty('status');
    });
  });

  it('should return a category by id', async () => {
    const response = await request('http://localhost:3000')
      .get('/categories');
    const { _id, nome, status } = response.body[0];

    const responseId = await request('http://localhost:3000')
      .get(`/categories/${_id}`);
    expect(responseId.status).toBe(200);
    expect(responseId.body).toHaveProperty('_id');
    expect(responseId.body.nome).toBe(nome);
    expect(responseId.body.status).toBe(status);
  });
});

describe('POST em /categories', () => {
  it('should insert a category', async () => {
    const category = {
      nome: 'Teste',
      status: 'ATIVA',
    };

    const response = await request('http://localhost:3000')
      .post('/categories')
      .send(category);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.nome).toBe(category.nome);
    expect(response.body.status).toBe(category.status);
  });

  it(
    'should return 500 when insert a category with invalid data',
    async () => {
      const category = {
        nome: '',
        status: 'ATIVA',
      };

      const response = await request('http://localhost:3000')
        .post('/categories')
        .send(category);
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('message');
    },
  );
});

describe('DELETE em /categories', () => {
  it('should delete a category', async () => {
    const response = await request('http://localhost:3000')
      .get('/categories');
    const { _id } = response.body[0];

    const responseId = await request('http://localhost:3000')
      .delete(`/categories/${_id}`);
    expect(responseId.status).toBe(200);
    expect(responseId.body).toHaveProperty('message');
    expect(responseId.body.message).toBe('Category deleted');
  });
});
