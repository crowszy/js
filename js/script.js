"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Какой фильм вы посмотрели последним?', ''),
              b = prompt('Какую оценку вы ему дадите?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
/* rememberMyFilms(); */

function detectPersonaLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы довольно редко смотрите фильмы!')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы не жалеете времени на просмотр фильмов!')
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы настоящий киноман!')
    } else {
        console.log('Непредвиденная ошибка!')
    };
}
/* detectPersonaLevel(); */

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    } else {
        console.log('no data')
    };
}
showMyDB();


/* function showMyDB(hidden) {            // second variant
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat); */



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();


/* function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);  // second variant
    }
}

writeYourGenres(); */