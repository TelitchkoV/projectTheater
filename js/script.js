// ------------ Header ------------
Header__MiniMenu();




function Header__MiniMenu(){
  // Кнопка меню
  var miniMenuBtn = document.getElementById("header-miniMenuBtn");
  // Меню
  var miniMenu = (document.getElementsByClassName("header__miniMenu"))[0];
  // Отключаемые элементы
  document.querySelector('footer').classList.add("inactive");
  document.querySelector('main').classList.add("inactive");
  // Получить элементы, у которых надо отключить таб
  // Header__InactiveChildren();
  // function Header__InactiveChildren(){
  //   var tabbable = ["a", "link", "button", "input", "select", "textarea"];
  //   var listOfInactive = document.getElementsByClassName("inactive");
  //   console.log(listOfInactive);
  //   for (let i = 0; i < listOfInactive.length; i++) {
  //     for (let g = 0; g < tabbable.length; g++) {
  //       var children = listOfInactive[i].querySelectorAll(tabbable[g]);
  //       for (let j = 0; j < children.length; j++) {
  //         // children[j].tabIndex = -1;
  //         console.log("!");
  //         children[j].classList.add("inactiveChild");
  //       }
  //     }
  //   }
  // }
  // var listOfInactiveChildren = document.getElementsByClassName("inactiveChild");
  // Индексы с нестандартными установленными значениями
  // var tabindexDictionary = new Array();


  miniMenuBtn.addEventListener("click", function (){
    // Если нажата, то отжать
    if (miniMenuBtn.classList.contains("pressed")) {
      Header__MiniMenuLogic(false);
    }
    // Если не нажата, то нажать
    else
    {
      Header__MiniMenuLogic(true);
    }
  });


  // Убрать меню, кликнув по неактивной области
  document.querySelector('main').addEventListener("click", function (){
    if (document.querySelector('main').classList.contains("inactive")) {
      Header__MiniMenuLogic(false);
    }
  });
  document.querySelector('footer').addEventListener("click", function (){
    if (document.querySelector('main').classList.contains("inactive")) {
      Header__MiniMenuLogic(false);
    }
  });



  // Координаты анимации
  var Header__Start = "-280px";
  var Header__Finish = "-150px";

  // При инициализации
  var check3 = window.matchMedia("(max-width: 425px)")
  if (check3.matches) {
    Header__Start = "-280px";
    Header__Finish = "0px";
    if (miniMenuBtn.classList.contains("pressed")) {
      miniMenu.style.top = Header__Finish;
    }
    else miniMenu.style.top = Header__Start;
  }
  else
  {
    Header__Start = "-280px";
    Header__Finish = "-150px";
    if (miniMenuBtn.classList.contains("pressed")) {
      miniMenu.style.top = Header__Finish;
    }
    else miniMenu.style.top = Header__Start;
  }



  // Если ширина экрана меняется
  window.addEventListener('resize', function(){
    // Разморозить страницу, если слишком большой экран
    var check1 = window.matchMedia("(max-width: 768px)")
    if (check1.matches) {}
    else {
      Header__MiniMenuLogic(false);
    }


    var check2 = window.matchMedia("(max-width: 425px)")
    if (check2.matches) {
      Header__Start = "-280px";
      Header__Finish = "0px";
      if (miniMenuBtn.classList.contains("pressed")) {
        miniMenu.style.top = Header__Finish;
      }
    }
    else
    {
      Header__Start = "-280px";
      Header__Finish = "-150px";
      if (miniMenuBtn.classList.contains("pressed")) {
        miniMenu.style.top = Header__Finish;
      }
    }
  });



  function Header__MiniMenuLogic(what){
    if (what) {
      // Заморозить страницу
      miniMenuBtn.classList.add("pressed");
      miniMenu.style.top = Header__Finish;
      // miniMenu.style.opacity = "100%";
      document.querySelector('footer').classList.add("yes");
      document.querySelector('main').classList.add("yes");

      // for (let i = 0; i < listOfInactiveChildren.length; i++) {
      //   if (listOfInactiveChildren[i].tabIndex == 0) {
      //     listOfInactiveChildren[i].tabIndex = -1;
      //   }
      //   else{
      //     tabindexDictionary.push(i);
      //   }
      // }
    }
    else
    {
      // Разморозить страницу
      miniMenuBtn.classList.remove("pressed");
      miniMenu.style.top = Header__Start;
      // miniMenu.style.opacity = "0%";
      document.querySelector('footer').classList.remove("yes");
      document.querySelector('main').classList.remove("yes");

      // for (let i = 0; i < listOfInactiveChildren.length; i++) {
      //   if (!tabindexDictionary.includes(i)) {
      //     listOfInactiveChildren[i].tabIndex = 0;
      //   }
      // }

    }
  }
}
