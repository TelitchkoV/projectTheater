
/*----------------- Будущий переключатель видео -----------------*/

// Дефолтный фильм для отображения
var indexSliderFilm_counter = 0;

// Как будто база данных фильмов: YouTubeID / Название / Описание
var indexSliderFilms = new Array(
  new Array("g11PUtKEk6k", "Хороший, Плохой, Коп", "Обычно за преступниками приходится изрядно погоняться, чтобы закрыть их за решеткой.Но когда молодому офицеру полиции (Алексис Лаудер) без особого сопротивления сдается матерый аферист (Фрэнк Грилло), становится ясно, что к стражам закона его привело не искреннее раскаяние, а профессиональный киллер (Джерард Батлер), который идет по пятам авантюриста. Противостояние в духе «хороший, плохой, злой» от режиссера легендарного фильма «Козырные тузы» Джо Карнахана - это то, что любители жанра не видели уже очень-очень давно!"),
  new Array("zeKFmhPKgDs", "Семейка Аддамс: Горящий тур", "Что делать, если в доме поселилось настоящее исчадие ада, а именно два подростка? Срочно планировать самый жуткий отпуск! Мартиша, Гомес, Уэнсдей, Пагсли и дядя Фестер загружаются в семейный походный катафалк, чтобы отправиться навстречу новым приключениям и чудаковатым друзьям, от которых волосы встанут дыбом. В этой поездке семейка Аддамс сплотится намертво! Если, конечно, останутся выжившие…"),
  new Array("41RnqAE-jRA", "Дюна", "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной – Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ…и основной причины межгалактических конфликтов – невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным." ),
  new Array("Othd8W8o3t0", "Веном 2", "Том Харди возвращается на большие экраны в роли Венома - одного из величайших и самых противоречивых героев вселенной MARVEL. Режиссером продолжения стал Энди Серкис, главные роли также сыграли Мишель Уильямс, Наоми Харрис и Вуди Харрельсон - суперзлодей Клетус Кэседи/Карнаж." ),
  new Array("pEyrpF0kSKI", "Последняя дуэль", "Нормандский рыцарь Жан де Карруж по возвращении с войны узнаёт, что его сосед и соперник Жак Ле Гри изнасиловал его жену Маргарит. Однако у Ле Гри обнаружились сильные союзники, словам женщины никто не верит, и Карруж обращается за помощью лично к королю Франции Карлу VI. Заслушав все свидетельства, король постановил, что конфликт должен быть разрешён в честном поединке. От исхода битвы зависит судьба не только Ле Гри и Карружа, но и жены последнего. В случае поражения мужа её должны сжечь на костре за ложные обвинения." ),
  new Array("PJX6a06gnEY", "Не время умирать", "Бонд оставил оперативную службу и наслаждается спокойной жизнью на Ямайке. Все меняется, когда на островепоявляется его старый друг Феликс Лейтер из ЦРУ с просьбой о помощи. Миссия по спасению похищенного ученого оказывается опаснее, чем предполагалось изначально. Бонд попадает в ловушку к таинственному злодею, который владеет уникальным технологическим оружием." )
);

// var indexThumbnailImage = new Image();

// function PreloadIndexThumbnailImage() {
//   indexThumbnailImage.src = "img/thumbnail/film" + indexSliderFilm_counter + ".jpg";
//   indexThumbnailImage.onload = function()
//   {
//     var imgT = document.getElementById("index-slider-thumbnailImage");
//     if (this.naturalWidth / this.naturalHeight > 1280 / 720)
//     {
//     imgT.style.width = "auto";
//     imgT.style.height = "100%";
//     }
//     else
//     {
//     imgT.style.width = "100%";
//     imgT.style.height = "auto";
//     }
//   }
// }



function UpdateIndexSliderFilm(){
  // Проверка соотношения сторон превью
  var newimage = new Image();
  newimage.src = "img/thumbnail/film" + indexSliderFilm_counter + ".jpg";
  newimage.onload = function()
  {
    var imgT = document.getElementById("index-slider-thumbnailImage");
    if (this.naturalWidth / this.naturalHeight > 1280 / 720)
    {
    imgT.style.width = "auto";
    imgT.style.height = "100%";
    }
    else
    {
    imgT.style.width = "100%";
    imgT.style.height = "auto";
    }
  }
  // Обновить превью
  document.getElementById("index-slider-thumbnailImage").src = "img/thumbnail/film" + indexSliderFilm_counter + ".jpg";
  // Обновить название
  document.getElementById("index__slider-FilmName").innerHTML = indexSliderFilms[indexSliderFilm_counter][1];
  // Обновить описание
  document.getElementById("index__slider-FilmDesc").innerHTML = indexSliderFilms[indexSliderFilm_counter][2];
  // Обновить кнопки переключения видео

}
UpdateIndexSliderFilm();

var IsIndexSliderVideo = false;

function UpdateIndexSliderVideo(){
  if (IsIndexSliderVideo) {
    // Чёрный бг -> видимый
    // document.getElementById("index-slider-bg").style.display = "block";
    // Превью -> невидимое
    btnIndexSliderThumbnail.style.display = "none";
    // Видео плеер -> видимый
    document.getElementById("index-slider-video").style.display = "block";
    document.getElementById("index-slider-video").src ="https://www.youtube.com/embed/" + indexSliderFilms[indexSliderFilm_counter][0] + "?autoplay=1&rel=0&showinfo=0&modestbranding=1";
  }
  else
  {
    // Остановить и скрыть включенное видео
    document.getElementById("index-slider-video").style.display = "none";
    document.getElementById("index-slider-video").src ="";
    // Превью -> видимое
    btnIndexSliderThumbnail.style.display = "flex";
    // Чёрный бг -> невидимый
    // document.getElementById("index-slider-bg").style.display = "none";
  }
}

/*----------------- Кнопки переключения видео -----------------*/
const indexSliderBtns = document.getElementsByClassName("index-slider-btn");
for (let i = 0; i < indexSliderBtns.length; i++) {
  indexSliderBtns[i].addEventListener("click", function () {
    if (!indexSliderBtns[i].classList.contains("pressed")) {
      // Предзагрузить превью
        IsIndexSliderVideo = false;
        UpdateIndexSliderVideo();

        // Сменить нажатую кнопку
        indexSliderBtns[indexSliderFilm_counter].classList.remove("pressed");
        indexSliderBtns[i].classList.add("pressed");

        indexSliderFilm_counter = i;
        UpdateIndexSliderFilm();
    }
  });
}


/*----------------- Клик на превью видео -----------------*/
const btnIndexSliderThumbnail = document.getElementById("index-slider-thumbnail");
btnIndexSliderThumbnail.addEventListener("click", function () {
  IsIndexSliderVideo = true;
  UpdateIndexSliderVideo();
});
