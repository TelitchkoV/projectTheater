/*----------------- Слайдер видео -----------------*/

// Слайдер - Дефолтный фильм для отображения
var Index__SliderFilm_i = 0;
// Плеер открыт ?
var Index__IsVideoOpen = false;

// База данных фильмов: Тёмный режим / YouTubeID / Название / Описание
var Index__SliderFilms = new Array(
  new Array(true, "_JqXO37znNU", "Дом Gucci", "Фамилия Гуччи звучала так сладко, так соблазнительно... Синоним роскоши, стиля, власти. Но она же была их проклятьем. Шокирующая история любви, предательства, падения и мести, которая привела к жестокому убийству в одной из самых знаменитых модных империй мира."),
  new Array(false, "zeKFmhPKgDs", "Семейка Аддамс: Горящий тур", "Что делать, если в доме поселилось настоящее исчадие ада, а именно два подростка? Срочно планировать самый жуткий отпуск! Мартиша, Гомес, Уэнсдей, Пагсли и дядя Фестер загружаются в семейный походный катафалк, чтобы отправиться навстречу новым приключениям и чудаковатым друзьям, от которых волосы встанут дыбом. В этой поездке семейка Аддамс сплотится намертво! Если, конечно, останутся выжившие…"),
  new Array(false, "41RnqAE-jRA", "Дюна", "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной – Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ…и основной причины межгалактических конфликтов – невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным." ),
  new Array(false, "Othd8W8o3t0", "Веном 2", "Том Харди возвращается на большие экраны в роли Венома - одного из величайших и самых противоречивых героев вселенной MARVEL. Режиссером продолжения стал Энди Серкис, главные роли также сыграли Мишель Уильямс, Наоми Харрис и Вуди Харрельсон - суперзлодей Клетус Кэседи/Карнаж." ),
  new Array(true, "8qB8EGNOtr8", "Матрица: Воскрешение", "Как и в предыдущих фильмах франшизы, основа сюжета «Матрицы 4» - противостояние главных героев компьютерной программе «Матрица», которая установила контроль над Землёй." ),
  new Array(false, "PJX6a06gnEY", "Не время умирать", "Бонд оставил оперативную службу и наслаждается спокойной жизнью на Ямайке. Все меняется, когда на островепоявляется его старый друг Феликс Лейтер из ЦРУ с просьбой о помощи. Миссия по спасению похищенного ученого оказывается опаснее, чем предполагалось изначально. Бонд попадает в ловушку к таинственному злодею, который владеет уникальным технологическим оружием." )
);



// Создать страницы слайдера
Index__SliderCreateFilmCards();
// Создать кнопки переключения слайдера
Index__SliderCreateButtons();
// Создать кнопки превью видео
Index__SliderCreateThumbnailButtons();





function Index__SliderCreateFilmCards(){
  let divToCopy = document.getElementById("index-slider-FilmCard");
  for (let i = 0; i < Index__SliderFilms.length - 1; i++) {
    let newDiv = divToCopy.cloneNode(true);
    newDiv.id += i + 1;
    newDiv.classList.add(i + 1);
    divToCopy.parentNode.appendChild(newDiv);
  }
  divToCopy.id += 0;
  divToCopy.classList.add("0");

  let listOfFilmCards = document.getElementsByClassName("index__slider-FilmCard");
  listOfFilmCards[Index__SliderFilm_i].classList.add("active");

  // Управление клавиатурой
  let listOfThumbnail = document.getElementsByClassName("index__slider-thumbnail");
  listOfThumbnail[Index__SliderFilm_i].tabIndex = 0;

  // Заполнить данными
  Index__SliderFillFilmCards();
}
function Index__SliderFillFilmCards(){
  let listThumbnailImages = document.getElementsByClassName("index__slider-thumbnailImage");
  let listFilmName = document.getElementsByClassName("index__slider-FilmName");
  let listFilmDesc = document.getElementsByClassName("index__slider-FilmDesc");
  let listFilmIcons = document.getElementsByClassName("index__slider-thumbnailIcon");

  // Обновить цвет иконки
  for (let i = 0; i < listFilmIcons.length; i++) {
    if (Index__SliderFilms[i][0]) listFilmIcons[i].classList.add("Dark");
    else listFilmIcons[i].classList.add("Bright");
  }

  for (let i = 0; i < 6; i++) {
    // Обновить название
    listFilmName[i].innerHTML = Index__SliderFilms[i][2];
    // Обновить описание
    listFilmDesc[i].innerHTML = Index__SliderFilms[i][3];

    // Обновить превью
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

      // Дать координаты видимой кнопки
      if (i == Index__SliderFilm_i) {
        CheckWidth(true);
      }
    }
  }

}
function Index__SliderCreateButtons(){
  let btnToCopy = document.getElementById("index-slider-btn");
  for (let i = 0; i < Index__SliderFilms.length - 1; i++) {
    let btnNew = btnToCopy.cloneNode(true);
    btnNew.id += i + 1;
    btnToCopy.parentNode.appendChild(btnNew);
  }
  btnToCopy.id += 0;

  let listOfFilmCardBtns = document.getElementsByClassName("index__slider-btn");
  listOfFilmCardBtns[Index__SliderFilm_i].classList.add("pressed");

  // Заполнить событиями
  Index__SliderFillButtons();
}
function Index__SliderFillButtons(){
  let listOfButtons = document.getElementsByClassName("index__slider-btn");
  for (let i = 0; i < listOfButtons.length; i++) {
    listOfButtons[i].addEventListener("click", function () {
      if (!listOfButtons[i].classList.contains("pressed")) {
        // Если видео плеер открыт, то выключить
        if (Index__IsVideoOpen) {
          // Остановить и скрыть включенное видео
          let listOfPlayers = document.getElementsByClassName("index__slider-video");
          listOfPlayers[Index__SliderFilm_i].src = "";
          listOfPlayers[Index__SliderFilm_i].style.display = "none";

          // Превью -> видимое
          let listOfThumbnail = document.getElementsByClassName("index__slider-thumbnail");
          listOfThumbnail[Index__SliderFilm_i].style.display = "flex";

          Index__IsVideoOpen = false;
        }

        //Сменить активный фильм слайдера
        let listOfFilmsSlider = document.getElementsByClassName("index__slider-FilmCard");
        listOfFilmsSlider[Index__SliderFilm_i].classList.remove("active");
        listOfFilmsSlider[i].classList.add("active");

        // Сменить нажатую кнопку
        listOfButtons[i].classList.add("pressed");
        listOfButtons[Index__SliderFilm_i].classList.remove("pressed");


        // Управление клавиатурой
        let listOfThumbnail = document.getElementsByClassName("index__slider-thumbnail");
        listOfThumbnail[Index__SliderFilm_i].tabIndex = -1;
        listOfThumbnail[i].tabIndex = 0;

        Index__SliderFilm_i = i;
        Index__GetActiveButtonPosition();
      }
    });
  }
}
function Index__SliderCreateThumbnailButtons(){
  let listOfThumbnail = document.getElementsByClassName("index__slider-thumbnail");
  for (let i = 0; i < listOfThumbnail.length; i++) {
    listOfThumbnail[i].addEventListener("click", function () {
      Index__IsVideoOpen = true;
      // Превью -> невидимое
      listOfThumbnail[i].style.display = "none";
      // Видео плеер -> видимый
      let listOfPlayers = document.getElementsByClassName("index__slider-video");

      listOfPlayers[i].src = "https://www.youtube.com/embed/" + Index__SliderFilms[i][1] + "?autoplay=1&rel=0&showinfo=0&modestbranding=1";
      listOfPlayers[i].style.display = "block";
    });
  }
};

let IsFirstButtonPositionCheck = true;
function CheckWidth(firstLoad = false){
  let check1 = window.matchMedia("(min-width: 1111px)");
  if (check1.matches) {
    Index__GetActiveButtonPosition(firstLoad);
  }
  else {
    window.addEventListener('resize', function(){
      let check2 = window.matchMedia("(min-width: 1111px)");
      if (check2.matches & IsFirstButtonPositionCheck) {
        IsFirstButtonPositionCheck = false;
        Index__GetActiveButtonPosition(firstLoad);
      }
    });
  }
}
function Index__GetActiveButtonPosition(firstLoad = false){
  // Позиция кнопки активного фильма слайдера
  let btnActive = (document.querySelectorAll(".index__slider-FilmBtn:not(.prime)"))[Index__SliderFilm_i].getBoundingClientRect();
  let btnPrime = document.getElementById("index__slider-FilmBtnPrime");

  if (btnActive.top + window.scrollY > 0) btnPrime.style.top = btnActive.top + window.scrollY - 463 + "px";
  else Index__GetActiveButtonPosition();

  if (firstLoad) {
    btnPrime.style.opacity = "100%";
  }

}
