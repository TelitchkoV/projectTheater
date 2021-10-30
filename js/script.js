/*----------------- Слайдер видео -----------------*/

// Дефолтный фильм для отображения
var Index__SliderFilm_i = 0;

// Плеер открыт ?
var Index__IsVideoOpen = false;

// Как будто база данных фильмов: YouTubeID / Название / Описание
var Index__SliderFilms = new Array(
  new Array("g11PUtKEk6k", "Хороший, Плохой, Коп", "Обычно за преступниками приходится изрядно погоняться, чтобы закрыть их за решеткой.Но когда молодому офицеру полиции (Алексис Лаудер) без особого сопротивления сдается матерый аферист (Фрэнк Грилло), становится ясно, что к стражам закона его привело не искреннее раскаяние, а профессиональный киллер (Джерард Батлер), который идет по пятам авантюриста. Противостояние в духе «хороший, плохой, злой» от режиссера легендарного фильма «Козырные тузы» Джо Карнахана - это то, что любители жанра не видели уже очень-очень давно!"),
  new Array("zeKFmhPKgDs", "Семейка Аддамс: Горящий тур", "Что делать, если в доме поселилось настоящее исчадие ада, а именно два подростка? Срочно планировать самый жуткий отпуск! Мартиша, Гомес, Уэнсдей, Пагсли и дядя Фестер загружаются в семейный походный катафалк, чтобы отправиться навстречу новым приключениям и чудаковатым друзьям, от которых волосы встанут дыбом. В этой поездке семейка Аддамс сплотится намертво! Если, конечно, останутся выжившие…"),
  new Array("41RnqAE-jRA", "Дюна", "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной – Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ…и основной причины межгалактических конфликтов – невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным." ),
  new Array("Othd8W8o3t0", "Веном 2", "Том Харди возвращается на большие экраны в роли Венома - одного из величайших и самых противоречивых героев вселенной MARVEL. Режиссером продолжения стал Энди Серкис, главные роли также сыграли Мишель Уильямс, Наоми Харрис и Вуди Харрельсон - суперзлодей Клетус Кэседи/Карнаж." ),
  new Array("pEyrpF0kSKI", "Последняя дуэль", "Нормандский рыцарь Жан де Карруж по возвращении с войны узнаёт, что его сосед и соперник Жак Ле Гри изнасиловал его жену Маргарит. Однако у Ле Гри обнаружились сильные союзники, словам женщины никто не верит, и Карруж обращается за помощью лично к королю Франции Карлу VI. Заслушав все свидетельства, король постановил, что конфликт должен быть разрешён в честном поединке. От исхода битвы зависит судьба не только Ле Гри и Карружа, но и жены последнего. В случае поражения мужа её должны сжечь на костре за ложные обвинения." ),
  new Array("PJX6a06gnEY", "Не время умирать", "Бонд оставил оперативную службу и наслаждается спокойной жизнью на Ямайке. Все меняется, когда на островепоявляется его старый друг Феликс Лейтер из ЦРУ с просьбой о помощи. Миссия по спасению похищенного ученого оказывается опаснее, чем предполагалось изначально. Бонд попадает в ловушку к таинственному злодею, который владеет уникальным технологическим оружием." )
);



// Создать страницы слайдера
Index__SliderCreateFilmCards();
// Создать кнопки переключения слайдера
Index__SliderCreateButtons();
// Создать кнопки превью видео
Index__SliderCreateThumbnailButtons();
// Позиция кнопки активного фильма слайдера
Index__GetActiveButtonPosition();



// Задержка отображения, чтобы сайт прогрузился
setTimeout(function() {
  var mainHTML = document.getElementById("display-fix");
  mainHTML.style.opacity = "100%";
}, 300);




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
      // Фикс - иногда кнопка фильмов слайдера загружается немного выше, чем надо
      Index__GetActiveButtonPosition();
    }
    // Обновить название
    listFilmName[i].innerHTML = Index__SliderFilms[i][1];
    // Обновить описание
    listFilmDesc[i].innerHTML = Index__SliderFilms[i][2];
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

function Index__GetActiveButtonPosition(){
  var btnList = document.querySelectorAll(".index__slider-FilmBtn:not(.prime)");
  var btnActive = btnList[Index__SliderFilm_i].getBoundingClientRect();

  var btnPrime = document.getElementById("index__slider-FilmBtnPrime");
  btnPrime.style.top = btnActive.top + window.scrollY - 463 + "px";
  // btnPrime.style.left = btnActive.left  + window.scrollX + "px";
  btnPrime.style.opacity = "100%";
}








// function FixSliderBtnPrime(){
//   var place = document.getElementById("index-slider-container");
//   var divToClone = document.getElementById("index__slider-FilmBtnPrime");
//   place.appendChild(divToClone.cloneNode(true));
//   divToClone.remove();

//   var btnTest = document.getElementById("index__slider-FilmBtnPrime");
//   btnTest.style.left = "auto";

//   var place = document.getElementsByClassName("index__slider-FilmInfo");
//   var divToClone = document.getElementById("index__slider-FilmBtnPrime");
//   place[0].appendChild(divToClone.cloneNode(true));
//   divToClone.remove();
// }
