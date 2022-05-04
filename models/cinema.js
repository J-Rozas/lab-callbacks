const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilmTitles = function () {return this.films.map(film => film.title)}

module.exports = Cinema;
