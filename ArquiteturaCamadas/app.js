const express = require('express');
const bodyParser = require('body-parser');
const animecontroller = require('./controllers/animecontroller');

const app = express();
app.use(bodyParser.json());

// Rotas
app.get('/animes', animecontroller.getAllAnimes);
app.get('/animes/:id', animecontroller.getAnimeById);
app.post('/animes', animecontroller.createAnime);
app.put('/animes/:id', animecontroller.updateAnime);
app.delete('/animes/:id', animecontroller.deleteAnime);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
