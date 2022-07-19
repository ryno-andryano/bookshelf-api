const addBookHandler = require('./handlers/addBookHandler');
const getBooksHandler = require('./handlers/getBooksHandler');
const getBookDetailHandler = require('./handlers/getBookDetailHandler');
const editBookHandler = require('./handlers/editBookHandler');
// const removeBookHandler = require('./handlers/removeBookHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookDetailHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookHandler,
  },
  // {
  //   method: 'DELETE',
  //   path: '/books/{bookId}',
  //   handler: removeBookHandler,
  // },
];

module.exports = routes;
