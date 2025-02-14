// Recibe el repositorio de autores como dependencia
module.exports = function createAuthor({ authorRepository }) {
  return async function execute(authorData) {
    // Aquí podrías agregar validaciones y lógica adicional
    const author = await authorRepository.create(authorData);
    return author;
  };
};
