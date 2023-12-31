const express = require('express');
const sequelize = require('../db/conection');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Login do sistema');
});

router.get('/healthcheck', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(204).send();
  } catch (error) {
    console.warn(error);
    res.status(500).send();
  }
});

module.exports = router;