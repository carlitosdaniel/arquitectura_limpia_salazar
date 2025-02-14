module.exports = function bookController({ createBookUseCase, getBooksUseCase }) {
  return {
    create: async (req, res) => {
      try {
        const bookData = req.body;
        const newBook = await createBookUseCase(bookData);
        res.status(201).json(newBook);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },
    getAll: async (req, res) => {
      try {
        const books = await getBooksUseCase();
        res.json(books);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  };
};
