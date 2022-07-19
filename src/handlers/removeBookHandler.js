const books = require('../data/books');

const removeBookHandler = (request, h) => {
  console.log(books);
};

module.exports = removeBookHandler;
