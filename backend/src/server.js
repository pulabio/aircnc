const express = require('express');
const mongoose = require('mongoose');

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

app.use(express.json());
app.use(routes);

app.listen(3333);
