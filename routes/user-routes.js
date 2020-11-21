const express = require('express');
const {addUser} = require('../controllers/userController');

const router = express.Router();

router.post('/register', addUser);


module.exports = {
    routes: router
}