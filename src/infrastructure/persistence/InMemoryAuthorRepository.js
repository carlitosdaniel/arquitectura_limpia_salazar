const Author = require('../../domain/entities/Author');

class InMemoryAuthorRepository {
  constructor() {
    this.authors = [];
    this.currentId = 1;
  }

  async create(authorData) {
    const newAuthor = new Author({ id: this.currentId++, ...authorData });
    this.authors.push(newAuthor);
    return newAuthor;
  }

  async findById(id) {
    return this.authors.find(author => author.id === parseInt(id));
  }

  async getAll() {
    return this.authors;
  }
}

module.exports = InMemoryAuthorRepository;
