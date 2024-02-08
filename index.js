const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefer-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.dataset.animated = true;
    scroller.style.webkitMask =
      "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)";
    scroller.style.mask =
      "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)";
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const toggleNavButton = document.getElementById("toggleNav");
  const overlay = document.getElementById("overlay");
  const nav = document.querySelector(".nav");

  toggleNavButton.addEventListener("click", function () {
    nav.classList.toggle("active");
    overlay.style.display = nav.classList.contains("active") ? "block" : "none";
  });

  overlay.addEventListener("click", function () {
    nav.classList.remove("active");
    overlay.style.display = "none";
  });
});
