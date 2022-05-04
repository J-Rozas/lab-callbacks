const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilmTitles = function () {return this.films.map(film => film.title)}

Cinema.prototype.findByTitle = function (givenTitle) {return this.films.filter(film => givenTitle === film.title)[0]}

module.exports = Cinema;
