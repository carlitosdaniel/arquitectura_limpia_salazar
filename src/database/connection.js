const { Sequelize } = require('sequelize');

// Aquí configura tu conexión con la base de datos PostgreSQL
const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/arquitectura_limpia', {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
