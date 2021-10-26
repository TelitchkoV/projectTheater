/*----------------- Слайдер видео -----------------*/

// Дефолтный фильм для отображения
var indexSliderFilm_index = 0;
// Дефолтный фильм для отображения
var IsVideoOpenIndex = false;

// Как будто база данных фильмов: YouTubeID / Название / Описание
var indexSliderFilms = new Array(
  new Array("g11PUtKEk6k", "Хороший, Плохой, Коп", "Обычно за преступниками приходится изрядно погоняться, чтобы закрыть их за решеткой.Но когда молодому офицеру полиции (Алексис Лаудер) без особого сопротивления сдается матерый аферист (Фрэнк Грилло), становится ясно, что к стражам закона его привело не искреннее раскаяние, а профессиональный киллер (Джерард Батлер), который идет по пятам авантюриста. Противостояние в духе «хороший, плохой, злой» от режиссера легендарного фильма «Козырные тузы» Джо Карнахана - это то, что любители жанра не видели уже очень-очень давно!"),
  new Array("zeKFmhPKgDs", "Семейка Аддамс: Горящий тур", "Что делать, если в доме поселилось настоящее исчадие ада, а именно два подростка? Срочно планировать самый жуткий отпуск! Мартиша, Гомес, Уэнсдей, Пагсли и дядя Фестер загружаются в семейный походный катафалк, чтобы отправиться навстречу новым приключениям и чудаковатым друзьям, от которых волосы встанут дыбом. В этой поездке семейка Аддамс сплотится намертво! Если, конечно, останутся выжившие…"),
  new Array("41RnqAE-jRA", "Дюна", "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной – Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ…и основной причины межгалактических конфликтов – невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным." ),
  new Array("Othd8W8o3t0", "Веном 2", "Том Харди возвращается на большие экраны в роли Венома - одного из величайших и самых противоречивых героев вселенной MARVEL. Режиссером продолжения стал Энди Серкис, главные роли также сыграли Мишель Уильямс, Наоми Харрис и Вуди Харрельсон - суперзлодей Клетус Кэседи/Карнаж." ),
  new Array("pEyrpF0kSKI", "Последняя дуэль", "Нормандский рыцарь Жан де Карруж по возвращении с войны узнаёт, что его сосед и соперник Жак Ле Гри изнасиловал его жену Маргарит. Однако у Ле Гри обнаружились сильные союзники, словам женщины никто не верит, и Карруж обращается за помощью лично к королю Франции Карлу VI. Заслушав все свидетельства, король постановил, что конфликт должен быть разрешён в честном поединке. От исхода битвы зависит судьба не только Ле Гри и Карружа, но и жены последнего. В случае поражения мужа её должны сжечь на костре за ложные обвинения." ),
  new Array("PJX6a06gnEY", "Не время умирать", "Бонд оставил оперативную службу и наслаждается спокойной жизнью на Ямайке. Все меняется, когда на островепоявляется его старый друг Феликс Лейтер из ЦРУ с просьбой о помощи. Миссия по спасению похищенного ученого оказывается опаснее, чем предполагалось изначально. Бонд попадает в ловушку к таинственному злодею, который владеет уникальным технологическим оружием." )
);




// Клонировать пустую карту фильма 5 раз
CopyPasteIndex();
// Заполнить копии контентом
FillFilmsIndex();
// Создать кнопки переключения видео
CreateSliderButtonsIndex();
// Создать кнопки превью видео
CreateSliderButtonsThumbnail();







function CopyPasteIndex(){
  var divToCopy = document.getElementById("index-slider-ChangeZone");
  for (let i = 0; i < 5; i++) {
    var newDiv = divToCopy.cloneNode(true);
    newDiv.id += i + 1;
    newDiv.classList.add(i + 1);
    divToCopy.parentNode.appendChild(newDiv);
  }
  divToCopy.id += 0;
  divToCopy.classList.add("0");
  divToCopy.classList.add("active");
  // Переместить кнопки переключения в конец
  // divToCopy.parentNode.appendChild(document.getElementById("index-sliderButtons").cloneNode(true));
  // document.getElementById("index-sliderButtons").remove();
}

function FillFilmsIndex(){
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
    listFilmName[i].innerHTML = indexSliderFilms[i][1];
    // Обновить описание
    listFilmDesc[i].innerHTML = indexSliderFilms[i][2];
  }

}

function CreateSliderButtonsIndex(){
  var listOfButtons = document.getElementsByClassName("index-slider-btn");
  for (let i = 0; i < listOfButtons.length; i++) {
    listOfButtons[i].addEventListener("click", function () {
      if (!listOfButtons[i].classList.contains("pressed")) {
        // Если видео плеер открыт, то выключить
        if (IsVideoOpenIndex) {
          // Остановить и скрыть включенное видео
          var listOfPlayers = document.getElementsByClassName("index__slider-video");
          listOfPlayers[indexSliderFilm_index].src = "";
          listOfPlayers[indexSliderFilm_index].style.display = "none";

          // Превью -> видимое
          var listOfThumbnail = document.getElementsByClassName("index__slider-thumbnail");
          listOfThumbnail[indexSliderFilm_index].style.display = "flex";

          IsVideoOpenIndex = false;
        }

        //Сменить активный фильм слайдера
        var listOfFilmsSlider = document.getElementsByClassName("index__slider-ChangeZone");
        listOfFilmsSlider[indexSliderFilm_index].classList.remove("active");
        listOfFilmsSlider[i].classList.add("active");

        // Сменить нажатую кнопку
        listOfButtons[i].classList.add("pressed");
        listOfButtons[indexSliderFilm_index].classList.remove("pressed");

        indexSliderFilm_index = i;
      }
    });
  }
}

function CreateSliderButtonsThumbnail(){
  var listOfThumbnail = document.getElementsByClassName("index__slider-thumbnail");
  for (let i = 0; i < listOfThumbnail.length; i++) {
    listOfThumbnail[i].addEventListener("click", function () {
      IsVideoOpenIndex = true;
      // Превью -> невидимое
      listOfThumbnail[i].style.display = "none";
      // Видео плеер -> видимый
      var listOfPlayers = document.getElementsByClassName("index__slider-video");

      listOfPlayers[i].src = "https://www.youtube.com/embed/" + indexSliderFilms[i][0] + "?autoplay=1&rel=0&showinfo=0&modestbranding=1";
      listOfPlayers[i].style.display = "block";
    });
  }
}
