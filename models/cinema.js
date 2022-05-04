const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilmTitles = function () {return this.films.map(film => film.title)}

Cinema.prototype.findByTitle = function (givenTitle) {return this.films.filter(film => givenTitle === film.title)[0]}

Cinema.prototype.moviesReleasedOnYear = function (givenYear) {return this.films.filter(film => film.year === givenYear).length === 0 ? false : true}

Cinema.prototype.allMoviesOverLength = function (givenLength) {return this.films.length === this.films.filter(film => film.length === givenLength) ? true : false}

// First map to get all the lengths, then reduce
Cinema.prototype.totalRunningTime = function () {return this.films.map(film => film.length).reduce((previousValue, currentValue) => previousValue += currentValue, 0)}

Cinema.prototype.filterByProperty = function (givenProperty, givenValue) {return this.films.filter(film => film[givenProperty] === givenValue)} 

module.exports = Cinema;
