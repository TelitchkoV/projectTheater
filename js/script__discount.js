// Как будто база данных акций: Заголовок / Дата завершения
var Index__SliderFilms = new Array(
  new Array("в IMAX по цене обычного зала!", "До 03 ноября 2021"),
  new Array("Супееееееерцена на все фильмы весь день!", "До 31 декабря 2021"),
  new Array("Закажи онлайн – получи без очереди в кинотеатре!", "До 31 октября 2021"),
  new Array("Смотрите «Не время умирать» в IMAX и получите коллекционный билет", "До 31 октября 2021"),
  new Array("Программа лояльности Бонус", "До 31 декабря 2021"),
  new Array("В кино – по привлекательной цене!", "До 31 декабря 2021"),
  new Array("В кино с детьми – выгодно!", "До 31 декабря 2021"),
  new Array("Скидка 20% на все комбо-наборы при покупке онлайн", "До 31 декабря 2021"),
  new Array("Кино много не бывает!", "До 31 октября 2021"),
  new Array("Предложение для всех на каждый день!", "До 31 декабря 2021"),
  new Array("Утро начинается с КИНО", "До 31 декабря 2021"),
  new Array("Лимитированная серия очков Polaroid Premium 3D Vision", "До 31 октября 2021"),
  new Array("СуперБУУУУДНИ!", "До 03 ноября 2021"),
  new Array("В КИНО с бонусами программы «СберСпасибо»", "До 31 декабря 2021"),
  new Array("Скидка 10% на билеты при оплате Mastercard", "До 31 декабря 2021"),
  new Array("Скидка 15% на билеты при оплате Affinity Card", "До 31 декабря 2021"),
  new Array("Онлайн-билеты можно вернуть в 2 клика!", "До 31 декабря 2021")
);



// Создать и загрузить карточки акций
Discount__CreateCards(6);



function Discount__CreateCards(rows){
  var divToCopy = document.getElementById("discount-card");
  for (let i = 0; i < (3 * rows) - 1; i++) {
    var newDiv = divToCopy.cloneNode(true);
    newDiv.id += i + 1;
    divToCopy.parentNode.appendChild(newDiv);
  }
  divToCopy.id += 0;

  var listOfCards = document.getElementsByClassName("discount__card");
  var listOfCardsImg = document.getElementsByClassName("discount__cardImg");
  var listOfCardsName = document.getElementsByClassName("discount__cardName");
  var listOfCardsDesc = document.getElementsByClassName("discount__cardDesc");

  for (let i = 0; i < Index__SliderFilms.length; i++) {
    listOfCardsImg[i].src = "img/discount/cover" + i + ".jpg";
    listOfCardsName[i].innerHTML = Index__SliderFilms[i][0];
    listOfCardsDesc[i].innerHTML = Index__SliderFilms[i][1];
    listOfCards[i].classList.remove("empty");
  }
}
