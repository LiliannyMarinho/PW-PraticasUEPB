const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

let animes = [
    {
        id: uuidv4(),
        name: "Naruto",
        genre: "Action",
        studio: "Pierrot"
    }
];

//rota que vou poder listar os animes
app.get('/animes', (req, res) => {
    res.json(animes);
});

//rota para listar anime por ID
app.get('/animes/:id', (req, res) => {
    const anime = animes.find(anime => anime.id === req.params.id);
    if (anime) {
      res.json(anime);
    } else {
      res.status(404).json({ error: "Anime não encontrado" });
    }
});

// rota para criar um novo anime
app.post('/animes', (req, res) => {
    const { name, genre, studio } = req.body;
  
    if (!name || !genre || !studio) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }
  
    const newAnime = { id: uuidv4(), name, genre, studio };
    animes.push(newAnime);
    res.status(201).json(newAnime);
});

// rota para atualizar um anime por ID
app.put('/animes/:id', (req, res) => {
    const { id } = req.params;
    const { name, genre, studio } = req.body;
    
    const animeIndex = animes.findIndex(anime => anime.id === id);
    if (animeIndex === -1) {
      return res.status(404).json({ error: "Anime não encontrado" });
    }
  
    if (!name || !genre || !studio) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }
  
    animes[animeIndex] = { id, name, genre, studio };
    res.json(animes[animeIndex]);
});

// Rota para deletar um anime por ID
app.delete('/animes/:id', (req, res) => {
    const { id } = req.params;
    const animeIndex = animes.findIndex(anime => anime.id === id);
  
    if (animeIndex === -1) {
      return res.status(404).json({ error: "Anime não encontrado" });
    }
  
    const deletedAnime = animes.splice(animeIndex, 1);
    res.json(deletedAnime);
});
  
module.exports = app;
