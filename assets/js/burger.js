const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("header .menu");
const lines = document.querySelectorAll(".hamburger div");
const titleIcon = document.querySelector(".titleCont .icon");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("slide");  
  titleIcon.classList.toggle("titleIcon");  
  lines.forEach((item) => {
    item.classList.toggle("toggle");
  });
});