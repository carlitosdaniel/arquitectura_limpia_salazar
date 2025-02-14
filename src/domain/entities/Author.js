class Author {
  constructor({ id, name, books = [] }) {
    this.id = id;
    this.name = name;
    this.books = books; // Array de instancias de Book
  }

  addBook(book) {
    this.books.push(book);
  }
}

module.exports = Author;
