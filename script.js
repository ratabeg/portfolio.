

var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Backend Developer", "Software developer",'Linguist enthusiast'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
