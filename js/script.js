"use strict"

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Какой фильм вы посмотрели последним?', ''),
      b = prompt('Какую оценку вы ему дадите?', ''),
      c = prompt('Какой фильм вы посмотрели последним?', ''),
      d = prompt('Какую оценку вы ему дадите?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);