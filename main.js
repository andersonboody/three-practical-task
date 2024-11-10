const brandsList = document.querySelector("#brands");
const brandsOpen = document.getElementById("brands__open");
const brandsClose = document.getElementById("brands__close");

let countChild;

if (screen.width < 1000) {
  countChild = 7;
} else {
  countChild = 9;
}

brandsOpen.addEventListener("click", function () {
  brandsList
    .querySelectorAll(`.brand__card:nth-child(n+${countChild})`)
    .forEach((elem) => {
      elem.style.display = "flex";
    });
  brandsOpen.style.display = "none";
  brandsClose.style.display = "flex";
  brandsClose.addEventListener("click", function () {
    brandsList
      .querySelectorAll(`.brand__card:nth-child(n+${countChild})`)
      .forEach((elem) => {
        elem.style.display = "none";
      });
    brandsOpen.style.display = "flex";
    brandsClose.style.display = "none";
  });
});

new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  freeMode: true,
});
