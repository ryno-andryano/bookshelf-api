const books = require('../data/books');

const getBookDetailHandler = (request, h) => {
  console.log(books);
};

module.exports = getBookDetailHandler;
