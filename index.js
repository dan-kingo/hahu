document.getElementById("show").onclick = function () {
  document.querySelector(".sidebar").style.display = "flex";
};
document.getElementById("hide").onclick = function () {
  document.querySelector(".sidebar").style.display = "none";
};

let loader = document.querySelector(".loader-container");
let page = document.querySelector(".main-content");

window.addEventListener("load", () => {
  loader.classList.add("hidden");
  page.classList.add("visible");
});
