const {
  getAll,
  insertOne
} = require('../models/todoListModel');

const invalidEntries = { status: 400, message: 'Invalid entries. Try again.' };

const insertOneItem = async (name, itemList) => {
  if (!name || !itemList) throw invalidEntries;

  const { insertedId } = await insertOne(name, itemList);
  return {
    list: {
      _id: insertedId,
      name,
      itemList,
    }
  };
};

const getTodoList = async () => await getAll();

module.exports = {
  insertOneItem,
  getTodoList
};
