const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilmTitles = function () {return this.films.map(film => film.title)}

Cinema.prototype.findByTitle = function (givenTitle) {return this.films.filter(film => givenTitle === film.title)[0]}

Cinema.prototype.filterByGenre = function (givenGenre) {return this.films.filter(film => film.genre === givenGenre)}

module.exports = Cinema;
