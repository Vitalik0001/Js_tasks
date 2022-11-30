const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt("Cкільки фільмів вже переглянули ?");
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Cкільки фільмів вже переглянули ?");
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      let oneOfTheLastFilms = prompt("Який фільм ви переглядали в останній раз ?", "");
      let evaluteFilm = +prompt("На скільки з 10 можете його оцінити ?", "");
      
      if (oneOfTheLastFilms != null && evaluteFilm != null && oneOfTheLastFilms != '' && evaluteFilm != '' && oneOfTheLastFilms.length < 50) {
            personalMovieDB.movies[oneOfTheLastFilms] = evaluteFilm;
            console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log("Переглянуто мало фільмів (");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Ви стандартний тіп. Вітаю !!!");
    } else if (personalMovieDB.count >= 30) {
      console.log("Ви кіноман.");
    } else {
      console.log("Виникла помилка... Технічні шоколадки...");
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
      let genres = prompt(`Ваш улюблений жанр під номером ${i}`);

      if (genres === '' || genres == null) {
        console.log('Ви ввели хибні данні or nothing');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genres;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Улюблений жанр ${i + 1} - це ${item}`);
    });
  }
};
