var navToggle = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav");
var orderBtn = document.querySelector(".btn--promo-offer");
var modalContent = document.querySelector(".modal-content-order");
var overlay = document.querySelector(".overlay");
var toCart = document.querySelectorAll(".catalog-item__cart-link");

nav.classList.remove("main-nav--nojs");

navToggle.addEventListener("click",function(event) {
   event.preventDefault();
   if (nav.classList.contains("main-nav--closed")) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--opened");
   } else {
    nav.classList.add("main-nav--closed");
    nav.classList.remove("main-nav--opened");
   }
});

if (orderBtn != null) { orderBtn.addEventListener("click",function(event) {
  event.preventDefault();
  modalContent.classList.add("modal-content--show");
  overlay.classList.add("modal-content--show");
})};

overlay.addEventListener("click",function(event) {
  event.preventDefault();
  modalContent.classList.remove("modal-content--show");
  overlay.classList.remove("modal-content--show");
});

if (toCart != null) {for(var f=0; f<toCart. length; f++){ toCart[f].addEventListener("click",function(event) {
  event.preventDefault();
  modalContent.classList.add("modal-content--show");
  overlay.classList.add("modal-content--show");
})}};

    if (ymaps != null) {ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
            center: [59.939894363827136,30.321958162712296],
            zoom: 15
        }, {
            searchControlProvider: "yandex#search"
        }),
        myPlacemark = new ymaps.Placemark([59.93866696005864,30.322966673301895], {
            hintContent: "MISHKA",
            balloonContent: "MISHKA здесь"
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: "default#image",
            // Своё изображение иконки метки.
            iconImageHref: "img/icon-map-pin.svg",
            // Размеры метки.
            iconImageSize: [67, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -90]
        });

    myMap.geoObjects.add(myPlacemark);
})};
