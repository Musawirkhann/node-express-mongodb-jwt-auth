const { model } = require('mongoose');
const {Book, validate} = require('../models/book');


const addBook = async (req, res, next) => {
        const {error} =  validate(req.body);
        if(error) return res.status(422).send(error.details[0].message);

        let book = new Book({
            title: req.body.title,
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            author: req.body.author,
            price: req.body.price,
            inStock: req.body.inStock
        });

        book =  await book.save(); 
        res.send(book);
}

const getBooks = async (req, res, next) => {
    const books = await Book.find().sort('title').exec();
    res.send(books);
}

const getOneBook = async (req, res, next) => {
    const book = await Book.findById(req.params.id);
    if(!book) return res.status(401).send('The Book with the given id not found');

    res.send(book);
}

const updateBook = async (req, res, next) => {
    const {error} = validate(req.body);
    if(error) return res.status(422).send(error.details[0].message);

    let book = await Book.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        author: req.body.author,
        price: req.body.price,
        inStock: req.body.inStock
    }, {new: true});

    if(!book) return res.status(401).send('The Book with the given id not found');
    res.send(book);
}

const deleteBook = async (req, res, next) => {
    const book = await Book.findByIdAndRemove(req.params.id);
    if(!book) return res.status(401).send('The Book with the given id not found');

    res.send(book);
}


module.exports = {
    addBook,
    getBooks,
    getOneBook,
    updateBook,
    deleteBook
}