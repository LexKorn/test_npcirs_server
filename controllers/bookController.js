const {Book} = require('../models/models');

class BookController {
    async create(req, res) {
        try {
            const {title, published, authorId} = req.body;

            const book = await Book.create({title, published, authorId});            
            return res.json(book);

        } catch(err) { 
            res.status(400).json(err.message);
        }
    }

    async getAll(req, res) {
        try {
            const books = await Book.findAll();
            return res.json(books);

        } catch(err) {
            res.status(400).json(err.message);
        }
    }

    async getONe(req, res) {
        try {
            const {id} = req.params;
            const book = await Book.findOne({where: {id}});
            return res.json(book);

        } catch(err) {
            res.status(400).json(err.message);
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await Book.destroy({where: {id}});
            return res.json('Book was deleted');

        } catch(err) {
            res.status(400).json(err.message);
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const {title, published} = req.body;
            
            await Book.update({title, published}, {where: {id}});
            return res.json('Book was updated');

        } catch(err) {
            res.status(400).json(err.message);
        }
    }
};

module.exports = new BookController();