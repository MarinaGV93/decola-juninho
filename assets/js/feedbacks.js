document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line
  new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
});
