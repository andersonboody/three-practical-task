const brandsList = document.querySelector("#brands");
const brandsOpen = document.getElementById("brands__open");

let countChild;

if (screen.width > 649 && screen.width < 1024) {
  countChild = 7;
} else if (screen.width > 569 && screen.width < 648) {
  countChild = 5;
} else {
  countChild = 9;
}

brandsOpen.addEventListener("click", function () {
  if (brandsOpen.classList.contains("button--open")) {
    brandsList
      .querySelectorAll(`.brand__card:nth-child(n+${countChild})`)
      .forEach((elem) => {
        elem.style.display = "flex";
      });
    brandsOpen.classList.remove("button--open");
    brandsOpen.classList.add("button--close");
    brandsOpen.textContent = "Скрыть";
  } else {
    brandsList
      .querySelectorAll(`.brand__card:nth-child(n+${countChild})`)
      .forEach((elem) => {
        elem.style.display = "none";
      });
    brandsOpen.classList.remove("button--close");
    brandsOpen.classList.add("button--open");
    brandsOpen.textContent = "Показать все";
  }
});

new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  freeMode: true,
  slidesOffsetBefore: 30,
  slidesOffsetAfter: 30,
});
