let barButton = document.querySelector("#buttonBar");
let navigationHide = document.querySelector(".navigationHide");
let paddingMobNavbar = document.querySelector(".mobNavbar");
let bar3Line = document.querySelector("#bar3");
let cross = document.querySelector("#cross");
let counter = 0;

barButton.addEventListener("click", () => {
  if (counter % 2 == 0) {
    navigationHide.classList.remove("navigationHide");
    paddingMobNavbar.classList.add("paddingMobNavbar");
    bar3Line.classList.add("btnNone");
    cross.classList.remove("btnNone");
  } else {
    navigationHide.classList.add("navigationHide");
    paddingMobNavbar.classList.remove("paddingMobNavbar");
    bar3Line.classList.remove("btnNone");
    cross.classList.add("btnNone");
  }
  counter++;
});
