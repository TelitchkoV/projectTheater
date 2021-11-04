// Отключить ссылку активной страницы в footer
formats__GetPageName();



function formats__GetPageName(){
  // Получить название страницы
  var fileName = location.pathname.split("/").slice(-1);
  var fileNameClean = (fileName[0].split("."))[0];

  // Получить ссылки в footer
  var listOfItems = document.getElementsByClassName("footer__item");
  var listOfLinks = new Array();
  for (let i = 0; i < listOfItems.length; i++) {
    listOfLinks.push((listOfItems[i].children)[0]);
  }

  // Отключить ссылку активной страницы
  switch (fileNameClean) {
    case "formats__IMAX":
      listOfLinks[4].classList.add("activePage");
      break;
    case "formats__4DX":
      listOfLinks[5].classList.add("activePage");
      break;
    case "formats__DolbyAtmos":
      listOfLinks[6].classList.add("activePage");
      break;
    case "formats__ScreenX":
      listOfLinks[7].classList.add("activePage");
      break;

    default:
      console.log("Неизвестное название страницы: " + fileNameClean);
      break;
  }
}
