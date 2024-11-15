const animeService = require('../services/animeservice');

module.exports = {
  getAllAnimes: (req, res) => {
    try {
      const animes = animeService.getAllAnimes();
      res.json(animes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAnimeById: (req, res) => {
    try {
      const anime = animeService.getAnimeById(parseInt(req.params.id));
      res.json(anime);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  createAnime: (req, res) => {
    try {
      const newAnime = animeService.createAnime(req.body);
      res.status(201).json(newAnime);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateAnime: (req, res) => {
    try {
      const updatedAnime = animeService.updateAnime(parseInt(req.params.id), req.body);
      res.json(updatedAnime);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteAnime: (req, res) => {
    try {
      const deletedAnime = animeService.deleteAnime(parseInt(req.params.id));
      res.json(deletedAnime);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};
//test