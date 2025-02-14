module.exports = function getAuthors({ authorRepository }) {
    return async function execute() {
      const authors = await authorRepository.getAll();
      return authors;
    };
  };
  