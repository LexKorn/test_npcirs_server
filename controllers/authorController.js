const {Author, Book} = require('../models/models');

class AuthorController {
    async create(req, res) {
        try {
            const {name, country, birthday} = req.body;

            const author = await Author.create({name, country, birthday});            
            return res.json(author);

        } catch(err) { 
            res.status(400).json(err.message);
        }
    }

    async getAll(req, res) {
        try {
            const authors = await Author.findAll();
            return res.json(authors);

        } catch(err) {
            res.status(400).json(err.message);
        }
    }

    async getONe(req, res) {
        try {
            const {id} = req.params;
            const author = await Author.findOne({where: {id}});
            return res.json(author);

        } catch(err) {
            res.status(400).json(err.message);
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            
            await Book.destroy({where: {authorId: id}});
            await Author.destroy({where: {id}});

            return res.json('Author was deleted');

        } catch(err) {
            res.status(400).json(err.message);
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const {name, country, birthday} = req.body;
            
            await Author.update({name, country, birthday}, {where: {id}});
            return res.json('Author was updated');

        } catch(err) {
            res.status(400).json(err.message);
        }
    }
};

module.exports = new AuthorController();