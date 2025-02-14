module.exports = function createBook({ bookRepository, authorRepository }) {
  return async function execute(bookData) {
    // Verificar que el autor exista (puedes personalizar esta validación)
    const author = await authorRepository.findById(bookData.authorId);
    if (!author) {
      throw new Error('Autor no encontrado');
    }
    const book = await bookRepository.create(bookData);
    // Opcionalmente, podrías agregar el libro al autor:
    // author.addBook(book);
    // await authorRepository.update(author);
    return book;
  };
};
