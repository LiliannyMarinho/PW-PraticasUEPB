const animeModel = require('../models/animemodel');

module.exports = {
  getAllAnimes: () => animeModel.findAll(),
  
  getAnimeById: (id) => {
    const anime = animeModel.findById(id);
    if (!anime) throw new Error('Anime não encontrado');
    return anime;
  },

  createAnime: (animeData) => {
    if (!animeData.name || !animeData.genre || !animeData.studio) {
      throw new Error('Todos os campos são obrigatórios');
    }
    return animeModel.create(animeData);
  },

  updateAnime: (id, animeData) => {
    if (!animeData.name || !animeData.genre || !animeData.studio) {
      throw new Error('Todos os campos são obrigatórios');
    }
    return animeModel.update(id, animeData);
  },

  deleteAnime: (id) => {
    const deletedAnime = animeModel.delete(id);
    if (!deletedAnime) throw new Error('Anime não encontrado');
    return deletedAnime;
  }
};
