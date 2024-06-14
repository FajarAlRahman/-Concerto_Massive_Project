const express = require('express');
const { Register } = require('../Controller/user');

const routerUser = express.Router();

routerUser.post('/register', Register);

module.exports = routerUser;
