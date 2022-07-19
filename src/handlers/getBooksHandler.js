const books = require('../data/books');

const getBooksHandler = (request, h) => {
  console.log(books);
};

module.exports = getBooksHandler;
