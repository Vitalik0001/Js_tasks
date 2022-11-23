// First :

/* var year = 1990;
var nameHuman = "Mercedes";
var yourYear = 55;

function calculateAge(year) {
  var currentYear = 2022;
  var result = currentYear - year;
  return result;
}

function checkAndLogAgeOrHuman(year, nameHuman, yourYear) {
  switch (nameHuman) {
    case "Vitalik": console.log(calculateAge(year) > yourYear ?
      'It`s old human' : 'It`s young human');
      break;
    case "Mercedes": console.log(calculateAge(year) > yourYear ?
      'It`s old car' : 'It`s new car');
      break;
    default:
      console.log("It`s undefined");
  }
} */

/* if ((calculateAge(year) < yourYear && nameHuman === "Vitalik")) {
  console.log("It`s young person");
} else if ((calculateAge(year) > yourYear && nameHuman === "Vitalik")) {
  console.log("It`s old person ");
} else if ((calculateAge(year) < yourYear && nameHuman === "Mercedes")) {
  console.log("It`s new car");
} else if ((calculateAge(year) > yourYear && nameHuman === "Mercedes")) {
  console.log("It`s old car");
} else {
  console.log("It`s undefined");
} */

/* console.log(calculateAge(year));
checkAndLogAgeOrHuman(year, nameHuman, yourYear); */

/* ---------------------------------------------------------------------------------------------------------------------- */
// Second :

// 1)

/* let numberOfFilms = +prompt("Cкільки фільмів вже переглянули ?"); */

let numberOfFilms;

// 2)

function start(numberOfFilms) {
  numberOfFilms = +prompt("Cкільки фільмів вже переглянули ?");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Cкільки фільмів вже переглянули ?");
  }
}

const personalMovieDB = {
  count: console.log(numberOfFilms),
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// 3)

/* let oneOfTheLastFilms = prompt("Який фільм ви переглядали в останній раз ?","");
let evaluteFilm = +prompt("На скільки з 10 можете його оцінити ?", "");
let oneOfTheLastFilms1 = prompt("Який фільм ви переглядали в останній раз ?","");
let evaluteFilm2 = +prompt("На скільки з 10 можете його оцінити ?", "");

personalMovieDB.movies[oneOfTheLastFilms] = evaluteFilm;
personalMovieDB.movies[oneOfTheLastFilms1] = evaluteFilm2; */

// 4) 

/* for (let i = 0; i < 2; i++) {
  let oneOfTheLastFilms = prompt("Який фільм ви переглядали в останній раз ?", "");
  let evaluteFilm = +prompt("На скільки з 10 можете його оцінити ?", "");
  
  personalMovieDB.movies[oneOfTheLastFilms] = evaluteFilm;
} */

// 5) 

function rememberMyFilms() {
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
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Переглянуто мало фільмів (");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви стандартний тіп. Вітаю !!!");
  } else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман.");
  } else {
    console.log("Виникла помилка... Технічні шоколадки...");
  }
}
// detectPersonalLevel ();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB (personalMovieDB.privat);

function writeYourGenres() {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
  }
}
writeYourGenres();

