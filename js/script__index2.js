/*----------------- Карточки фильмов -----------------*/

// База данных фильмов 2: Название / Теги / Возрастной рейтинг / Жанры / Субтитры / Год выхода / Длительность
var Index__FilmCardsToday = new Array(
  new Array("Веном 2", null, "16+", "Триллер, Ужасы, Фантастика, Экшн", false, "2021", "1ч 36м"),
  new Array("Семейка Аддамс: Горящий тур", null, "12+", "Комедия, Мультфильм, Ужасы, Фэнтези", false, "2021", "1ч 33м"),
  new Array("Не время умирать", null, "12+", "Боевик, Приключения, Триллер", false, "2021", "2ч 43м"),
  new Array("Дюна", "new", "12+", "Драма, Приключения, Фантастика", false, "2021", "2ч 36м"),
  new Array("Gorillaz: Song Machine. Live из Конга", null, "16+", "Фильм-Концерт, Документальный", true, "2021", "2ч 37м"),
  new Array("Возвращение", null, "18+", "Драма, Комедия", false, "2006", "1ч 51м"),
  new Array("Кощей. Начало", null, "6+", "Мультфильм, Семейный, Приключения, Фэнтези", false, "2021", "1ч 30м"),
  new Array("Кошмар на улице вязов", null, "18+", "Ужасы", false, "1984", "1ч 31м"),
  new Array("Ледяной демон", null, "16+", "Ужасы, Триллер", false, "2021", "1ч 32м"),
  new Array("Охотники за привидениями: наследники", null, "12+", "Комедия, Фантастика", true, "2021", "2ч 4м"),
  new Array("Энканто", null, "6+", "Комедия, Мультфильм, Мюзикл, Приключения, Семейный, Фэнтези", false, "2021", "1ч 49м"),
  new Array("Лётчик", null, "12+", "Драма", false, "2021", "1ч 45м"),
  new Array("Французский вестник. Приложение к газете «Либерти. Канзас ивнинг сан»", null, "18+", "Драма, Комедия, Мелодрама", true, "2021", "1ч 48м"),
  new Array("Обитель Зла: Раккун Сити", "new", "18+", "Боевик, Детектив, Ужасы, Фантастика", false, "2021", ""),
  new Array("Вечные", null, "18+", "Приключения, Экшн", false, "2021", "2ч 37м"),
  new Array("Король Ричард", null, "12+", "Биография, Драма, Спорт", false, "2021", "2ч 25м"),
  new Array("Прошлой ночью в Сохо", "new", "18+", "Драма, Триллер, Ужасы", false, "2021", "1ч 56м"),
  new Array("Джон Уик 3", null, "18+", "Триллер, Экшн", false, "2019", "2ч 11м"),
);
var Index__FilmCardsSoon = new Array(
  new Array("Заводной апельсин", "exclusive", "18+", "Драма, Криминал, Фантастика", true, "1971", "1ч 36м"),
  new Array("Человек-паук: Нет пути домой", null, "12+", "Фантастика, Боевик, Приключения", false, "2021", "2ч 30м"),
  new Array("Матрица: Воскрешение", "available", "12+", "Фантастика, Боевик", false, "2021", "2ч 28м"),
  new Array("Дом Gucci", "available", "18+", "Криминал, Триллер, Драма", true, "2021", "2ч 38м"),
  new Array("Большой красный пес Клиффорд", null, "6+", "Анимация, Комедия", false, "2021", "1ч 37м"),
  new Array("Чёрная месса", null, "18+", "Ужасы", false, "2021", "1ч 32м"),
);

var Index__FilmCardsListToday = new Array();
var Index__FilmCardsListSoon = new Array();



Index__FilmCardsTodayAdd(0, "index-filmCards-Today", Index__FilmCardsToday, Index__FilmCardsListToday, true);
Index__FilmCardsTodayAdd(0, "index-filmCards-Soon", Index__FilmCardsSoon, Index__FilmCardsListSoon, true);
DefaultindexDef();



function Index__FilmCardsTodayAdd(startingID, targetName, listFilms, arrayList, IsMoreCard, maxAmount = 0){
  // Куда добавить карточки
  let target = document.getElementById(targetName);

  // Создать пустые
  // for (let i = 0; i < maxAmount; i++) {
  //   var newCard = document.createElement("div");
  //   newCard.classList = "filmCard--empty";
  //   target.append(newCard);
  // }

  for (let i = startingID; i < listFilms.length; i++) {
    // Новая карточка
    let newCard = document.createElement("a");
    newCard.href = "";
    newCard.classList = "filmCard";

    // Контейнер
    let newCard_div = document.createElement("div");
    newCard_div.classList = "filmCardDiv";
    newCard.appendChild(newCard_div);

    // Обложка фильма
    let newCard_img = document.createElement("img");
    newCard_img.classList = "filmCardCover";
    newCard_img.src = "img/filmCards/" + (targetName.split('-')[2]).toLowerCase() + "/cover" + i + ".jpg";
    newCard_img.alt = "";
    newCard_div.appendChild(newCard_img);

    // Флажок над карточкой
    if (listFilms[i][1] != null & listFilms[i][1] != "") {
      let newCard_flag1 = document.createElement("div");
      switch (listFilms[i][1]) {
        case "new":
          newCard_flag1.classList = "filmCard--new";
          newCard_flag1.textContent = "Новинка";
          newCard_flag1.style.backgroundColor = "var(--color-orange)";
          break;
        case "exclusive":
          newCard_flag1.classList = "filmCard--exclusive";
          newCard_flag1.textContent = "Эксклюзив";
          newCard_flag1.style.backgroundColor = "#FD4162";
          break;
        case "available":
          newCard_flag1.classList = "filmCard--available";
          newCard_flag1.textContent = "В продаже";
          newCard_flag1.style.backgroundColor = "#FD41C0";
          break;
        default: break;
      }
      newCard_div.before(newCard_flag1);

      // Разделитель
      let newCard_flag2 = document.createElement("div");
      newCard_flag2.classList = "filmCard--shadow";
      newCard_div.before(newCard_flag2);
    }


    // Контейнер информации
    let newCard_div_spec = document.createElement("div");
    newCard_div_spec.classList = "filmCardDiv--spec";
    newCard_div.appendChild(newCard_div_spec);

    // Возрастной рейтинг
    let newCard_rating = document.createElement("p");
    newCard_rating.classList = "filmCard--Rating";
    newCard_rating.textContent = listFilms[i][2];
    newCard_div_spec.appendChild(newCard_rating);

    if (listFilms[i][4]) {
      // Субтитры
      let newCard_subs = document.createElement("p");
      newCard_subs.classList = "filmCard--Subs";
      newCard_subs.textContent = "Суб";
      newCard_div_spec.appendChild(newCard_subs);
    }

    // Контейнер доп. информации
    let newCard_div_info = document.createElement("div");
    newCard_div_info.classList = "filmCardDiv--info";
    newCard_div.appendChild(newCard_div_info);

    // Жанры
    if (listFilms[i][3] != null & listFilms[i][3] != "") {
      let newCard_genres = document.createElement("p");
      newCard_genres.classList = "filmCard--Genres";
      newCard_genres.textContent = listFilms[i][3];
      newCard_div_info.appendChild(newCard_genres);
    }
    else newCard_img.classList = "noGenres";

    // Продолжительность + Год выхода
    let newCard_year = document.createElement("div");
    newCard_year.classList = "filmCard--Year";
    newCard_div_info.appendChild(newCard_year);

    let newCard_year_date = document.createElement("p");
    newCard_year_date.textContent = listFilms[i][5];
    newCard_year.appendChild(newCard_year_date);

    if (listFilms[i][6] != null & listFilms[i][6] != "") {
      let newCard_year_dot = document.createElement("p");
      newCard_year_dot.textContent = "·";
      newCard_year.appendChild(newCard_year_dot);

      let newCard_year_length = document.createElement("p");
      newCard_year_length.textContent = listFilms[i][6];
      newCard_year.appendChild(newCard_year_length);
    }

    // Название фильма
    let newCard_name = document.createElement("p");
    newCard_name.classList = "filmCard--name";
    newCard_name.textContent = listFilms[i][0];
    newCard.appendChild(newCard_name);


    // ------------------------------------------------------------------


    // Альтернативная карточка
    let newCard_div_alt = document.createElement("div");
    newCard_div_alt.classList = "filmCardDiv--alt";
    newCard_div.appendChild(newCard_div_alt);

    // Название фильма
    let newCard_nameAlt = document.createElement("p");
    newCard_nameAlt.classList = "filmCard--name--alt";
    newCard_nameAlt.textContent = listFilms[i][0];
    newCard_div_alt.appendChild(newCard_nameAlt);

    // Контейнер 1
    let newCard_div_specAlt = document.createElement("div");
    newCard_div_specAlt.classList = "filmCardDiv--spec-alt";
    newCard_div_alt.appendChild(newCard_div_specAlt);

    // Возрастной рейтинг
    let newCard_ratingAlt = document.createElement("p");
    newCard_ratingAlt.classList = "filmCard--Rating--alt";
    newCard_ratingAlt.textContent = listFilms[i][2];
    newCard_div_specAlt.appendChild(newCard_ratingAlt);

    // Субтитры
    if (listFilms[i][4]) {
      let newCard_subsAlt = document.createElement("p");
      newCard_subsAlt.classList = "filmCard--Subs--alt";
      newCard_subsAlt.textContent = "Субтитры";
      newCard_div_specAlt.appendChild(newCard_subsAlt);
    }

    // Теги
    if (listFilms[i][1] != null & listFilms[i][1] != "") {
      let newCard_flag1Alt = document.createElement("div");
      switch (listFilms[i][1]) {
        case "new":
          newCard_flag1Alt.classList = "filmCard--new--alt";
          newCard_flag1Alt.textContent = "Новинка";
          newCard_flag1Alt.style.backgroundColor = "var(--color-orange)";
          break;
        case "exclusive":
          newCard_flag1Alt.classList = "filmCard--exclusive--alt";
          newCard_flag1Alt.textContent = "Эксклюзив";
          newCard_flag1Alt.style.backgroundColor = "#FD4162";
          break;
        case "available":
          newCard_flag1Alt.classList = "filmCard--available--alt";
          newCard_flag1Alt.textContent = "В продаже";
          newCard_flag1Alt.style.backgroundColor = "#FD41C0";
          break;
        default: break;
      }
      newCard_div_specAlt.appendChild(newCard_flag1Alt);
    }

    // Контейнер 2
    let newCard_yearAlt = document.createElement("div");
    newCard_yearAlt.classList = "filmCard--Year--Alt";
    newCard_div_alt.appendChild(newCard_yearAlt);

    // Год выхода
    let newCard_year_dateAlt = document.createElement("p");
    newCard_year_dateAlt.textContent = listFilms[i][5];
    newCard_yearAlt.appendChild(newCard_year_dateAlt);

    // Продолжительность
    if (listFilms[i][6] != null & listFilms[i][6] != "") {
      let newCard_year_dotAlt = document.createElement("p");
      newCard_year_dotAlt.textContent = "·";
      newCard_yearAlt.appendChild(newCard_year_dotAlt);

      let newCard_year_lengthAlt = document.createElement("p");
      newCard_year_lengthAlt.textContent = listFilms[i][6];
      newCard_yearAlt.appendChild(newCard_year_lengthAlt);
    }

    // Жанры
    if (listFilms[i][3] != null & listFilms[i][3] != "") {
      let newCard_genresAlt = document.createElement("p");
      newCard_genresAlt.classList = "filmCard--Genres--alt";
      newCard_genresAlt.textContent = listFilms[i][3];
      newCard_div_alt.appendChild(newCard_genresAlt);
    }
    else newCard_img.classList = "noGenres--alt";


    // ------------------------------------------------------------------


    // Добавить карточку
    target.append(newCard);
    arrayList.push(newCard);
  }

  // Кнопка Больше фильмов
  if (IsMoreCard) {
    arrayList[arrayList.length - 1].style.display = "none";

    let newCard = document.createElement("a");
    newCard.href = "";
    newCard.classList = "filmCard";
    newCard.classList.add("more");

    let newCard_div = document.createElement("div");
    newCard_div.classList = "filmCard--more";
    newCard.appendChild(newCard_div);


    let newCard_divIcon = document.createElement("div");
    newCard_divIcon.classList = "filmCard--moreIcon";
    newCard_div.appendChild(newCard_divIcon);

    let newCard_img = document.createElement("img");
    newCard_img.classList = "filmCard--moreIcon1";
    newCard_img.src = "img/icon-plus.svg";
    newCard_img.alt = "+";
    newCard_divIcon.appendChild(newCard_img);

    let newCard_divIcon2 = document.createElement("div");
    newCard_divIcon2.classList = "filmCard--moreIcon2";
    newCard_divIcon.appendChild(newCard_divIcon2);

    let newCard_img2 = document.createElement("img");
    newCard_img2.src = "img/icon-plus.svg";
    newCard_img2.alt = "+";
    newCard_divIcon2.appendChild(newCard_img2);

    let newCard_p = document.createElement("p");
    newCard_p.textContent = "Больше фильмов";
    newCard_div.appendChild(newCard_p);

    target.append(newCard);
  }
}

function Index_CutFilmCards(amount, arrayList){
 for (let i = 0; i < arrayList.length; i++) {
   if (i < amount - 1) {
    arrayList[i].style.display = "block";
   }
   else arrayList[i].style.display = "none";
  }
}

var indexDef = 0;
var indexDefPrev = -1;
function DefaultindexDef(){
  if (window.matchMedia("(min-width: 1111px)").matches){
    indexDef = 0;
    Index_CutFilmCards(18, Index__FilmCardsListToday);
    Index_CutFilmCards(6, Index__FilmCardsListSoon);
  }
  if (window.matchMedia("(max-width: 1110px)").matches & window.matchMedia("(min-width: 1025px)").matches){
    indexDef = 1;
    Index_CutFilmCards(15, Index__FilmCardsListToday);
    Index_CutFilmCards(5, Index__FilmCardsListSoon);
  }
  if (window.matchMedia("(max-width: 1024px)").matches & window.matchMedia("(min-width: 769px)").matches){
    indexDef = 2;
    Index_CutFilmCards(12, Index__FilmCardsListToday);
    Index_CutFilmCards(4, Index__FilmCardsListSoon);
  }
  if (window.matchMedia("(max-width: 768px)").matches & window.matchMedia("(min-width: 581px)").matches){
    indexDef = 3;
    Index_CutFilmCards(9, Index__FilmCardsListToday);
    Index_CutFilmCards(6, Index__FilmCardsListSoon);
  }
  if (window.matchMedia("(max-width: 580px)").matches & window.matchMedia("(min-width: 321px)").matches){
    indexDef = 4;
    Index_CutFilmCards(6, Index__FilmCardsListToday);
    Index_CutFilmCards(5, Index__FilmCardsListSoon);
  }
  if (window.matchMedia("(max-width: 320px)").matches){
    indexDef = 5;
    Index_CutFilmCards(4, Index__FilmCardsListToday);
    Index_CutFilmCards(4, Index__FilmCardsListSoon);
  }
}



window.addEventListener('resize', function(){
  if (window.matchMedia("(min-width: 1131px)").matches) {
    indexDef = 0;
    if (indexDef != indexDefPrev) {
      indexDefPrev = indexDef;

      Index_CutFilmCards(18, Index__FilmCardsListToday);
      Index_CutFilmCards(6, Index__FilmCardsListSoon);
    }
  }
  if (window.matchMedia("(max-width: 1130px)").matches & window.matchMedia("(min-width: 1025px)").matches) {
    indexDef = 1;
    if (indexDef != indexDefPrev) {
      indexDefPrev = indexDef;

      Index_CutFilmCards(15, Index__FilmCardsListToday);
      Index_CutFilmCards(5, Index__FilmCardsListSoon);
    }
  }
  if (window.matchMedia("(max-width: 1024px)").matches & window.matchMedia("(min-width: 769px)").matches) {
    indexDef = 2;
    if (indexDef != indexDefPrev) {
      indexDefPrev = indexDef;

      Index_CutFilmCards(12, Index__FilmCardsListToday);
      Index_CutFilmCards(4, Index__FilmCardsListSoon);
    }
  }
  if (window.matchMedia("(max-width: 768px)").matches & window.matchMedia("(min-width: 581px)").matches) {
    indexDef = 3;
    if (indexDef != indexDefPrev) {
      indexDefPrev = indexDef;

      Index_CutFilmCards(9, Index__FilmCardsListToday);
      Index_CutFilmCards(6, Index__FilmCardsListSoon);
    }
  }
  if (window.matchMedia("(max-width: 580px)").matches & window.matchMedia("(min-width: 321px)").matches) {
    indexDef = 4;
    if (indexDef != indexDefPrev) {
      indexDefPrev = indexDef;

      Index_CutFilmCards(6, Index__FilmCardsListToday);
      Index_CutFilmCards(5, Index__FilmCardsListSoon);
    }
  }
  if (window.matchMedia("(max-width: 320px)").matches) {
    indexDef = 5;
    if (indexDef != indexDefPrev) {
      indexDefPrev = indexDef;

      Index_CutFilmCards(4, Index__FilmCardsListToday);
      Index_CutFilmCards(4, Index__FilmCardsListSoon);
    }
  }
});
