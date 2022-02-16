const { Router } = require('express');
const router = Router();

const {
  getTodoList,
  insertOneItem,
} = require('../services/todoListServices');

router.post('/' ,async (req, res, next) => {
  try {
    const { name, itemList } = req.body;
    const newItemList = await insertOneItem(name, itemList);

    return res.status(201).json(newItemList);
  } catch (error) {
    console.error(error.err);
    return next(error);
  }
});

router.get('/', async (_req, res, next) => {
  try {
    const todoList = await getTodoList();
    return res.status(200).json(todoList);
  } catch (error) {
    console.error(error.err);
    return next(error);
  }
})

module.exports = router;
