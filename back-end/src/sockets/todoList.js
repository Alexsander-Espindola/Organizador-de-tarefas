const TodoList = require('../models/todoListModel');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('addItemList', async ({ name, itemList }) => {
    console.log(`Cliente votou na linguagem de id ${id}`);
    await TodoList.insertOne(name, itemList);
    const todoList = await TodoList.getAll();

    io.emit('refreshTodoList', todoList);
  })
});