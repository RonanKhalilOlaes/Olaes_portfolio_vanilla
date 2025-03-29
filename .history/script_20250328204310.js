function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelector(".overlay").style.display = "none";


// window.addEventListener("load", () => {
//   document.querySelector(".overlay").style.opacity = "0";
//   setTimeout(() => {
//     document.querySelector(".overlay").style.display = "none"; // Ensures it's gone completely
//   }, 500);
// });