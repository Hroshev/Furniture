import "./modules/burger.js";
import "./modules/ScrollTo.js";
import "./modules/geolocation.js";
import "./modules/productSell.js";
import "./modules/circleProgressBar.js";
import "./modules/featureProducts.js";
import "./modules/date.js";
import "./modules/modalWindow.js";

import Swiper from "swiper/bundle";

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    700: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },

    1500: {
      slidesPerView: 5,
    },
  },
});
