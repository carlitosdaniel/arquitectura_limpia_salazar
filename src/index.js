const app = require('./infrastructure/server');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API REST corriendo en http://localhost:${PORT}`);
});
