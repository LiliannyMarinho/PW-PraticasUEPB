let animes = [
    { id: 1, name: 'Naruto', genre: 'Shonen', studio: 'Pierrot' }
];
  
module.exports = {
    findAll: () => animes,
    findById: (id) => animes.find(anime => anime.id === id),
    create: (anime) => {
      const newAnime = { id: animes.length + 1, ...anime };
      animes.push(newAnime);
      return newAnime;
    },
    update: (id, anime) => {
      const index = animes.findIndex(an => an.id === id);
      if (index !== -1) {
        animes[index] = { id, ...anime };
        return animes[index];
      }
      return null;
    },
    delete: (id) => {
      const index = animes.findIndex(anime => anime.id === id);
      if (index !== -1) {
        return animes.splice(index, 1)[0];
      }
      return null;
    }
};
  