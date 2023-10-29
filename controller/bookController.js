const bookService = require('../services/bookService');

const createBook = async(req, res, next) => {
    try {
        const response = await bookService.createBook(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error)
    }
}

const updateBook = async(req, res, next) => {
    try {
        const response = await bookService.updateBook(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getBooks = async(req, res, next) => {
    try {
        const response = await bookService.getBooks();
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = {createBook,updateBook,getBooks}