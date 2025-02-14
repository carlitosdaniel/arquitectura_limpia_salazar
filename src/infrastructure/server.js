const express = require('express');
const bodyParser = require('express').json;

// Importar repositorios
const InMemoryAuthorRepository = require('./persistence/InMemoryAuthorRepository');
const InMemoryBookRepository = require('./persistence/InMemoryBookRepository');

// Instanciar repositorios
const authorRepository = new InMemoryAuthorRepository();
const bookRepository = new InMemoryBookRepository();

// Importar casos de uso
const createAuthorUseCaseFactory = require('../use-cases/createAuthor');
const createBookUseCaseFactory = require('../use-cases/createBook');
const getAuthorsUseCaseFactory = require('../use-cases/getAuthors');
const getBooksUseCaseFactory = require('../use-cases/getBooks');

// Crear instancias de los casos de uso inyectando dependencias
const createAuthorUseCase = createAuthorUseCaseFactory({ authorRepository });
const createBookUseCase = createBookUseCaseFactory({ bookRepository, authorRepository });
const getAuthorsUseCase = getAuthorsUseCaseFactory({ authorRepository });
const getBooksUseCase = getBooksUseCaseFactory({ bookRepository });

// Importar controladores y pasarles los casos de uso
const authorControllerFactory = require('../adapters/controllers/authorController');
const bookControllerFactory = require('../adapters/controllers/bookController');

const authorController = authorControllerFactory({ createAuthorUseCase, getAuthorsUseCase });
const bookController = bookControllerFactory({ createBookUseCase, getBooksUseCase });

// Configurar Express
const app = express();
app.use(bodyParser());

// Rutas para autores
app.post('/authors', authorController.create);
app.get('/authors', authorController.getAll);

// Rutas para libros
app.post('/books', bookController.create);
app.get('/books', bookController.getAll);

// Exportar la app
module.exports = app;
