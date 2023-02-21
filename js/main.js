const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavClose = document.querySelector(".mobile-nav__close");

mobileNavButton.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
});
mobileNavClose.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
});
