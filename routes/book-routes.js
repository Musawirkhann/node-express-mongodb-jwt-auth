const express = require('express');
const auth = require('../middleware/auth');
const {addBook, getBooks, getOneBook, updateBook, deleteBook} = require('../controllers/bookController');

const router = express.Router();

router.post('/book', auth, addBook);
router.get('/books', auth,  getBooks);
router.get('/book/:id',auth, getOneBook);
router.put('/book/:id', auth, updateBook);
router.delete('/book/:id', auth, deleteBook);


module.exports = {
    routes: router
}