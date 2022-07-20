const books = require('../data/books');

const removeBookHandler = (request, h) => {
  const {bookId} = request.params;
  const book = books.filter((book) => book.id === bookId)[0];

  if (!book) {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  const index = books.findIndex((book) => book.id === bookId);
  books.splice(index, 1);
  const response = h.response({
    status: 'success',
    message: 'Buku berhasil dihapus',
  });
  response.code(200);
  return response;
};

module.exports = removeBookHandler;
