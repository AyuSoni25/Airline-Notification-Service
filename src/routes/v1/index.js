const express = require('express');
const { InfoController, EmailController } = require('../../controllers');

const v1Router = express.Router();

v1Router.get('/info', InfoController.info);
v1Router.post('/tickets', EmailController.create);

module.exports = v1Router;