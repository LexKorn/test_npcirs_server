const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    country: {type: DataTypes.STRING, allowNull: false},
    birthday: {type: DataTypes.DATE, allowNull: false}
});

const Book = sequelize.define('book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    published: {type: DataTypes.INTEGER, allowNull: false}
});

Author.hasMany(Book);
Book.belongsTo(Author);

module.exports = {Author, Book};