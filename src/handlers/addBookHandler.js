const books = require('../data/books');
// const {nanoid} = require('nanoid');

const addBookHandler = (request, h) => {
  // console.log(nanoid(8));
  console.log(books);
};

module.exports = addBookHandler;
