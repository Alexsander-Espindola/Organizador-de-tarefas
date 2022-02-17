const { expect } = require('chai');
// const sinon = require('sinon');
const frisby = require('frisby');
const { MongoClient } = require('mongodb');

const mongoDbUrl = 'mongodb://127.0.0.1:27017/todoList';
const url = 'http://localhost:3001';

describe('Verifica a rota', () => {
  let connection;
  let db;

  beforeEach(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('todoList');
    await db.collection('todoList').deleteMany({});
    const users = [
      { name: 'admin', itemList: 'Comentário de teste para testar o comentário' }
    ];
    await db.collection('todoList').insertMany(users);
  });

  afterEach(async () => {
    await connection.close();
  });
  describe('POST', () => {
    it('Deve retornar um nome e um itemList', async () => {
      await frisby
        .post(`${url}/todoList`,
        {
          name: 'Alexsander',
          itemList: 'Fazer projeto blogs-api'
        })
        .expect('status', 201)
        .then((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.list.name).to.be.equals('Alexsander');
          expect(result.list.itemList).to.be.equals('Fazer projeto blogs-api');
        });
    });
  });
  describe('GET', () => {
    it('Deve retornar todos os itens da lista de afazeres', async () => {
      await frisby
        .get(`${url}/todoList`)
        .expect('status', 200)
        .then((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result[0].name).to.be.equals('admin');
          expect(result[0].itemList).to.be.equals('Comentário de teste para testar o comentário');
        });
    });
  });
});