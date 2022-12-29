const burgerBtn = document.getElementById("menu");
const navList = document.querySelector(".nav-list");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuElements = document.querySelectorAll(".nav-element");
const body = document.querySelector("body");
let checked = 0;

burgerBtn.addEventListener("click", () => {
  toggleMenu();
});
menuElements.forEach((x) => {
  x.addEventListener("click", () => {
    toggleMenu();
  });
});

const toggleMenu = () => {
  navList.classList.toggle("active");
  body.classList.toggle("active-body");
  if (checked === 0) {
    openMenu.classList.toggle("active-button-menu");
    closeMenu.classList.toggle("active-button-menu");
    checked != checked;
  }
};
