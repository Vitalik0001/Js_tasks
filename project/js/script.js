/* const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
}; */

// 1)

/* let advertisement = document.querySelectorAll('img');
let textAdvertisement = document.querySelectorAll('.promo__adv-title');

for (let i = 0; i < advertisement.length; i++) {
  advertisement[i].remove();
}

textAdvertisement[0].remove(); */

// 2)

/* let genre = document.querySelector('.promo__genre');

genre.textContent = 'драма'; */

// 3)

/* let bgImg = document.querySelector('.promo__bg');

bgImg.style.backgroundImage = 'url(img/bg.jpg)'; */

// 4)

/* let listOfFilms = document.querySelectorAll('.promo__interactive-item');

let sortedFilmsJs = movieDB.movies.sort();

let filmsNewListHtml;
for (let i = 0; i < listOfFilms.length; i++) {
  filmsNewListHtml = listOfFilms[i];
  filmsNewListHtml.textContent = sortedFilmsJs[i];
} */

// 5)

/* let listOfFilms = document.querySelectorAll('.promo__interactive-item');

let sortedFilmsJs = movieDB.movies.sort();

let filmsNewListHtml;
for (let i = 0; i < listOfFilms.length; i++) {
  filmsNewListHtml = listOfFilms[i];
  filmsNewListHtml.textContent = `${i + 1}. ${sortedFilmsJs[i]}`;
}
 */

// 6)

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
  };

  const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

        addForm.addEventListener('submit', (event) => {
          event.preventDefault();

          let newFilm = addInput.value;
          const favorite = checkbox.checked;

          if (newFilm) {

            if (newFilm.length > 21) {
              newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
              console.log("Додаємо улюблений фільм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
  
            createMovieList(movieDB.movies, movieList);
          }

          event.target.reset();
        });

        const deleteAdv = (arr) => {
          arr.forEach(item => {
            item.remove();
          });
        };

        const makeChanges = () => {
          genre.textContent = 'драма';

          poster.style.backgroundImage = 'url("img/bg.jpg")';
        };

        const sortArr = (arr) => {
          arr.sort();
        };

        function createMovieList(films, parent) {
          parent.innerHTML = "";
          sortArr(films);
  
          films.movies.forEach((film, i) => {
            parent.innerHTML += `
              <li class="promo__interactive-item">${i + 1} ${film}
              <div class="delete"></div>
              </li>
            `;
          });

          document.querySelectorAll(`.delete`).forEach((btn, i) => {
            btn.addEventListener('click', () => {
              btn.parentElement.remove();
              movieDB.movies.splice(i, 1);

              createMovieList(films, parent);
            });
          });

        }

        makeChanges();
        deleteAdv(adv);
        createMovieList(movieDB.movies, movieList);

});