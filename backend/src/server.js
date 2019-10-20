const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const databaseConfig = require('./config/database');

const routes = require('./routes');

mongoose.connect(
  `mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0-cihbs.mongodb.net/semana09?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log('usuário conectado', socket.id);
});

// app.use(cors({origin: 'http://localhost:3333'})) only allow connections from this address
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);
