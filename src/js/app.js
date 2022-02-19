import "./modules/burger.js";
import "./modules/ScrollTo.js";
import "./modules/geolocation.js";
import "./modules/productSell.js";
import "./modules/circleProgressBar.js";
import "./modules/featureProducts.js";
import "./modules/date.js";
import "./modules/modalWindow.js";


import Swiper from 'swiper/bundle';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});