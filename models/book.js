const mongoose = require('mongoose');
const Joi = require('joi');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    shortDescription: {
        type: String,
        minlength: 20,
        maxlength: 200,
        required: true
    },
    longDescription: {
        type: String,
        minlength: 50,
        maxlength: 1000,
        required: true
    },
    author: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true
    }
});

const Book = mongoose.model('Book', bookSchema);

const validateBook = (book) => {
    const schema = {
        title: Joi.string().min(5).max(50).required(),
        shortDescription: Joi.string().min(20).max(200).required(),
        longDescription: Joi.string().min(50).max(1000).required(),
        author: Joi.string().min(5).max(50).required(),
        price: Joi.number().required(),
        inStock: Joi.boolean().required()
    }

    return Joi.validate(book, schema);
}

exports.Book = Book;
exports.validate = validateBook;