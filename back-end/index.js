const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const http = require('http').createServer(app);

const error = require('./src/middlewares/errorMiddleware');
const todoListController = require('./src/controllers/todoListController');

const port = 3001;

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({ ok: true })
});

app.use('/todoList', todoListController);

http.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(error);