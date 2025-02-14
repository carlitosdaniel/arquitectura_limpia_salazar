module.exports = function authorController({ createAuthorUseCase, getAuthorsUseCase }) {
  return {
    create: async (req, res) => {
      try {
        const authorData = req.body;
        const newAuthor = await createAuthorUseCase(authorData);
        res.status(201).json(newAuthor);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },
    getAll: async (req, res) => {
      try {
        const authors = await getAuthorsUseCase();
        res.json(authors);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  };
};
