const books = require('../data/books');

const getBooksHandler = (request, h) => {
  const {reading, finished, name} = request.query;
  let filteredBooks = books;

  if (reading) {
    const readingFilter = (book) => book.reading == reading;
    filteredBooks = filteredBooks.filter(readingFilter);
  }

  if (finished) {
    const finishedFilter = (book) => book.finished == finished;
    filteredBooks = filteredBooks.filter(finishedFilter);
  }

  if (name) {
    const nameFilter = (book) =>
      book.name.toLowerCase().includes(name.toLowerCase());
    filteredBooks = filteredBooks.filter(nameFilter);
  }

  const mappedBooks = filteredBooks.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  const response = h.response({
    status: 'success',
    data: {
      books: mappedBooks,
    },
  });
  response.code(200);
  return response;
};

module.exports = getBooksHandler;
