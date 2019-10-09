const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

// app.use(cors({origin: 'http://localhost:3333'})) only allow connections from this address
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
