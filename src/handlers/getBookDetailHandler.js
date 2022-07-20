const books = require('../data/books');

const getBookDetailHandler = (request, h) => {
  const {bookId} = request.params;
  const book = books.filter((book) => book.id === bookId)[0];

  if (!book) {
    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      book,
    },
  });
  response.code(200);
  return response;
};

module.exports = getBookDetailHandler;
