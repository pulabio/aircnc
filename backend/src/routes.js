const express = require('express');

const routes = express.Router();

routes.get('/users', (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
