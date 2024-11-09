const express = require('express');
const app = express();

app.use(express.json());

// banco temporário -> array
let animes = [
  { id: 1, name: "Naruto", genre: "Adventure", studio: "Pierrot" },
];

// Geração de ID
const generateId = () => {
  return animes.length ? Math.max(...animes.map(anime => anime.id)) + 1 : 1;
};

// Rotas CRUD
// Listar todos os animes
app.get('/animes', (req, res) => {
  res.json(animes);
});

// Listar anime por ID
app.get('/animes/:id', (req, res) => {
  const anime = animes.find(a => a.id === parseInt(req.params.id));
  if (anime) {
    res.json(anime);
  } else {
    res.status(404).json({ message: 'Anime não encontrado' });
  }
});

// Criar novo anime
app.post('/animes', (req, res) => {
  const { name, genre, studio } = req.body;
  if (!name || !genre || !studio) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  const newAnime = { id: generateId(), name, genre, studio };
  animes.push(newAnime);
  res.status(201).json(newAnime);
});

// Atualizar anime por ID
app.put('/animes/:id', (req, res) => {
  const { name, genre, studio } = req.body;
  const anime = animes.find(a => a.id === parseInt(req.params.id));

  if (!anime) {
    return res.status(404).json({ message: 'Anime não encontrado' });
  }

  if (!name || !genre || !studio) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  anime.name = name;
  anime.genre = genre;
  anime.studio = studio;

  res.json(anime);
});

// Deletar anime por ID
app.delete('/animes/:id', (req, res) => {
  const animeIndex = animes.findIndex(a => a.id === parseInt(req.params.id));

  if (animeIndex === -1) {
    return res.status(404).json({ message: 'Anime não encontrado' });
  }

  animes.splice(animeIndex, 1);
  res.status(204).end(); // Resposta sem conteúdo (deletado com sucesso)
});

module.exports = app;
