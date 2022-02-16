const connection = require('./connection')

const getAll = () => connection().then(
  db => db.collection('todoList').find({}).toArray()
);

const insertOne = (name, itemList) => connection().then(
  db => db.collection('todoList').insertOne({ itemList })
);

module.exports = {
  getAll,
  insertOne,
};
