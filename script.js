// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Toggle Hamburger Animation
  const bars = hamburgerMenu.querySelectorAll("span");
  bars[0].classList.toggle("rotate1");
  bars[1].classList.toggle("hide");
  bars[2].classList.toggle("rotate2");
});

// Navbar Responsive Logic
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});