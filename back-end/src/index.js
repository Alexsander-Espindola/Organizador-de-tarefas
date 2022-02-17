const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http').createServer(app);

const error = require('./middlewares/errorMiddleware');
const todoListController = require('./controllers/todoListController');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }});

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);
});

const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ ok: true })
});

app.use('/todoList', todoListController);
require('./sockets/todoList')(io); 

http.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(error);
