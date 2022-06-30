// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
  new Splide(".review-slider", {
    classes: {
      arrow: "splide__arrow review-slider__arrow",
    },
    pagination: false,
    type: "loop",
    perPage: 1,
    gap: "40px",
    breakpoints: {
      560: {
        arrows: false,
        pagination: true,
        classes: {
          pagination: "splide__pagination review-slider__pagination",
        },
      },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", () => {
  new Splide(".review-slider_light", {
    classes: {
      arrow: "splide__arrow review-slider__arrow",
    },
    pagination: false,
    type: "loop",
    perPage: 1,
    gap: "40px",
    breakpoints: {
      560: {
        arrows: false,
        pagination: true,
        classes: {
          pagination: "splide__pagination review-slider__pagination",
        },
      },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", () => {
  const promoSlides = document.querySelectorAll("[data-slide-title]");
  let slideTitles = [];

  promoSlides.forEach(function (slide) {
    slideTitles.push(slide.dataset.slideTitle);
  });

  console.log(slideTitles);

  const promoSlider = new Splide(".promo__slider", {
    arrows: false,
    drag: false,
    type: "loop",
    autoplay: true,
    interval: 3000,
    classes: {
      pagination: "splide__pagination promo__pagination",
    },
  });

  promoSlider.on("pagination:mounted", function (data) {
    // You can add your class to the UL element
    data.list.classList.add("splide__pagination--custom");

    // `items` contains all dot items
    data.items.forEach(function (item) {
      item.button.textContent = `${slideTitles[item.page]}`;
    });
  });

  promoSlider.mount();
});


document.addEventListener("DOMContentLoaded", () => {
  const headerBureger = document.querySelector(".header__burger");
  const headerNav = document.querySelector(".header__nav");

  headerBureger.addEventListener("click", function (event) {
    headerBureger.classList.toggle("burger_closed");
    headerNav.classList.toggle("header__nav_opened");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector(".header");

  document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1) {
      header.classList.add("header_has-bg");
    } else {
      header.classList.remove("header_has-bg");
    }
  });
});



