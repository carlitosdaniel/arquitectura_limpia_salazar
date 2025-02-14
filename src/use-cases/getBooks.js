module.exports = function getBooks({ bookRepository }) {
    return async function execute() {
      const books = await bookRepository.getAll();
      return books;
    };
  };
  