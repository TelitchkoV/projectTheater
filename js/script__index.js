/*----------------- Слайдер видео -----------------*/

// Дефолтный фильм для отображения
var Index__SliderFilm_i = 0;

// Плеер открыт ?
var Index__IsVideoOpen = false;

// База данных фильмов: YouTubeID / Название / Описание
var Index__SliderFilms = new Array(
  new Array("g11PUtKEk6k", "Хороший, Плохой, Коп", "Обычно за преступниками приходится изрядно погоняться, чтобы закрыть их за решеткой.Но когда молодому офицеру полиции (Алексис Лаудер) без особого сопротивления сдается матерый аферист (Фрэнк Грилло), становится ясно, что к стражам закона его привело не искреннее раскаяние, а профессиональный киллер (Джерард Батлер), который идет по пятам авантюриста. Противостояние в духе «хороший, плохой, злой» от режиссера легендарного фильма «Козырные тузы» Джо Карнахана - это то, что любители жанра не видели уже очень-очень давно!"),
  new Array("zeKFmhPKgDs", "Семейка Аддамс: Горящий тур", "Что делать, если в доме поселилось настоящее исчадие ада, а именно два подростка? Срочно планировать самый жуткий отпуск! Мартиша, Гомес, Уэнсдей, Пагсли и дядя Фестер загружаются в семейный походный катафалк, чтобы отправиться навстречу новым приключениям и чудаковатым друзьям, от которых волосы встанут дыбом. В этой поездке семейка Аддамс сплотится намертво! Если, конечно, останутся выжившие…"),
  new Array("41RnqAE-jRA", "Дюна", "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной – Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ…и основной причины межгалактических конфликтов – невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным." ),
  new Array("Othd8W8o3t0", "Веном 2", "Том Харди возвращается на большие экраны в роли Венома - одного из величайших и самых противоречивых героев вселенной MARVEL. Режиссером продолжения стал Энди Серкис, главные роли также сыграли Мишель Уильямс, Наоми Харрис и Вуди Харрельсон - суперзлодей Клетус Кэседи/Карнаж." ),
  new Array("pEyrpF0kSKI", "Последняя дуэль", "Нормандский рыцарь Жан де Карруж по возвращении с войны узнаёт, что его сосед и соперник Жак Ле Гри изнасиловал его жену Маргарит. Однако у Ле Гри обнаружились сильные союзники, словам женщины никто не верит, и Карруж обращается за помощью лично к королю Франции Карлу VI. Заслушав все свидетельства, король постановил, что конфликт должен быть разрешён в честном поединке. От исхода битвы зависит судьба не только Ле Гри и Карружа, но и жены последнего. В случае поражения мужа её должны сжечь на костре за ложные обвинения." ),
  new Array("PJX6a06gnEY", "Не время умирать", "Бонд оставил оперативную службу и наслаждается спокойной жизнью на Ямайке. Все меняется, когда на островепоявляется его старый друг Феликс Лейтер из ЦРУ с просьбой о помощи. Миссия по спасению похищенного ученого оказывается опаснее, чем предполагалось изначально. Бонд попадает в ловушку к таинственному злодею, который владеет уникальным технологическим оружием." )
);
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



// Создать страницы слайдера
Index__SliderCreateFilmCards();
// Создать кнопки переключения слайдера
Index__SliderCreateButtons();
// Создать кнопки превью видео
Index__SliderCreateThumbnailButtons();
// Позиция кнопки активного фильма слайдера
Index__GetActiveButtonPosition(true);



function Index__SliderCreateFilmCards(){
  var divToCopy = document.getElementById("index-slider-FilmCard");
  for (let i = 0; i < 5; i++) {
    var newDiv = divToCopy.cloneNode(true);
    newDiv.id += i + 1;
    newDiv.classList.add(i + 1);
    divToCopy.parentNode.appendChild(newDiv);
  }
  divToCopy.id += 0;
  divToCopy.classList.add("0");

  var listOfFilmCards = document.getElementsByClassName("index__slider-FilmCard");
  listOfFilmCards[Index__SliderFilm_i].classList.add("active");

  // Управление клавиатурой
  var listOfThumbnail = document.getElementsByClassName("index__slider-thumbnail");
  listOfThumbnail[Index__SliderFilm_i].tabIndex = 0;

  // Заполнить данными
  Index__SliderFillFilmCards();
}
function Index__SliderFillFilmCards(){
  var listThumbnailImages = document.getElementsByClassName("index__slider-thumbnailImage");
  var listFilmName = document.getElementsByClassName("index__slider-FilmName");
  var listFilmDesc = document.getElementsByClassName("index__slider-FilmDesc");

  // Обновить превью
  for (let i = 0; i < 6; i++) {
    listThumbnailImages[i].src = "img/thumbnail/film" + i + ".jpg";
    listThumbnailImages[i].onload = function()
    {
      // Проверка соотношения сторон превью
      // Вместить превью в формат 16:9
      if (this.naturalWidth / this.naturalHeight > 1280 / 720)
      {
        listThumbnailImages[i].style.width = "auto";
        listThumbnailImages[i].style.height = "100%";
      }
      else
      {
        listThumbnailImages[i].style.width = "100%";
        listThumbnailImages[i].style.height = "auto";
      }
    }
    // Обновить название
    listFilmName[i].innerHTML = Index__SliderFilms[i][1];
    // Обновить описание
    listFilmDesc[i].innerHTML = Index__SliderFilms[i][2];
    // Фикс - иногда кнопка фильмов слайдера загружается немного выше, чем надо
    // Index__GetActiveButtonPosition();
  }

}
function Index__SliderCreateButtons(){
  var btnToCopy = document.getElementById("index-slider-btn");
  for (let i = 0; i < 5; i++) {
    var btnNew = btnToCopy.cloneNode(true);
    btnNew.id += i + 1;
    btnToCopy.parentNode.appendChild(btnNew);
  }
  btnToCopy.id += 0;

  var listOfFilmCardBtns = document.getElementsByClassName("index__slider-btn");
  listOfFilmCardBtns[Index__SliderFilm_i].classList.add("pressed");

  // Заполнить событиями
  Index__SliderFillButtons();
}
function Index__SliderFillButtons(){
  var listOfButtons = document.getElementsByClassName("index__slider-btn");
  for (let i = 0; i < listOfButtons.length; i++) {
    listOfButtons[i].addEventListener("click", function () {
      if (!listOfButtons[i].classList.contains("pressed")) {
        // Если видео плеер открыт, то выключить
        if (Index__IsVideoOpen) {
          // Остановить и скрыть включенное видео
          var listOfPlayers = document.getElementsByClassName("index__slider-video");
          listOfPlayers[Index__SliderFilm_i].src = "";
          listOfPlayers[Index__SliderFilm_i].style.display = "none";

          // Превью -> видимое
          var listOfThumbnail = document.getElementsByClassName("index__slider-thumbnail");
          listOfThumbnail[Index__SliderFilm_i].style.display = "flex";

          Index__IsVideoOpen = false;
        }

        //Сменить активный фильм слайдера
        var listOfFilmsSlider = document.getElementsByClassName("index__slider-FilmCard");
        listOfFilmsSlider[Index__SliderFilm_i].classList.remove("active");
        listOfFilmsSlider[i].classList.add("active");

        // Сменить нажатую кнопку
        listOfButtons[i].classList.add("pressed");
        listOfButtons[Index__SliderFilm_i].classList.remove("pressed");


        // Управление клавиатурой
        var listOfThumbnail = document.getElementsByClassName("index__slider-thumbnail");
        listOfThumbnail[Index__SliderFilm_i].tabIndex = -1;
        listOfThumbnail[i].tabIndex = 0;

        Index__SliderFilm_i = i;
        Index__GetActiveButtonPosition();
      }
    });
  }
}
function Index__SliderCreateThumbnailButtons(){
  var listOfThumbnail = document.getElementsByClassName("index__slider-thumbnail");
  for (let i = 0; i < listOfThumbnail.length; i++) {
    listOfThumbnail[i].addEventListener("click", function () {
      Index__IsVideoOpen = true;
      // Превью -> невидимое
      listOfThumbnail[i].style.display = "none";
      // Видео плеер -> видимый
      var listOfPlayers = document.getElementsByClassName("index__slider-video");

      listOfPlayers[i].src = "https://www.youtube.com/embed/" + Index__SliderFilms[i][0] + "?autoplay=1&rel=0&showinfo=0&modestbranding=1";
      listOfPlayers[i].style.display = "block";
    });
  }
};
function Index__GetActiveButtonPosition(firstLoad){
  var btnList = document.querySelectorAll(".index__slider-FilmBtn:not(.prime)");
  var btnActive = btnList[Index__SliderFilm_i].getBoundingClientRect();

  var btnPrime = document.getElementById("index__slider-FilmBtnPrime");


  if (!firstLoad) {
    if (btnActive.top + window.scrollY > 0) btnPrime.style.top = btnActive.top + window.scrollY - 463 + "px";
    else btnPrime.style.top = "-48px";
  }
  else btnPrime.style.top = "-48px";

  // btnPrime.style.left = btnActive.left  + window.scrollX + "px";
  btnPrime.style.opacity = "100%";
}



/*----------------- Карточки фильмов -----------------*/
var Index__FilmCardsListToday = new Array();
var Index__FilmCardsListSoon = new Array();

Index__FilmCardsTodayAdd(0, "index-filmCards-Today", Index__FilmCardsToday, Index__FilmCardsListToday, true);
Index__FilmCardsTodayAdd(0, "index-filmCards-Soon", Index__FilmCardsSoon, Index__FilmCardsListSoon, true);

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

    // Контейнер обложки фильма
    let newCard_div = document.createElement("div");
    newCard_div.classList = "filmCardDiv";
    newCard.appendChild(newCard_div);

    // Обложка фильма
    let newCard_img = document.createElement("img");
    newCard_img.classList = "filmCardCover";
    newCard_img.src = "img/filmCards/" + (targetName.split('-')[2]).toLowerCase() + "/cover" + i + ".jpg";
    newCard_div.appendChild(newCard_img);

    // Флажок над карточкой
    if (listFilms[i][1] != null & listFilms[i][1] != "") {
      var newCard_flag1 = document.createElement("div");
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
      var newCard_flag2 = document.createElement("div");
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
