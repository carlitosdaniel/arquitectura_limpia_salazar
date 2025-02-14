const Book = require('../../domain/entities/Book');

class InMemoryBookRepository {
  constructor() {
    this.books = [];
    this.currentId = 1;
  }

  async create(bookData) {
    const newBook = new Book({ id: this.currentId++, ...bookData });
    this.books.push(newBook);
    return newBook;
  }

  async getAll() {
    return this.books;
  }
}

module.exports = InMemoryBookRepository;
