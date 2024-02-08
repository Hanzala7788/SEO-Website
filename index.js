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
  const toggleBtn = document.querySelector(".toggle-btn");
  const dropDownMenu = document.querySelector(".drop-menu");

  toggleBtn.addEventListener("click", function () {
      dropDownMenu.classList.toggle("open");
  });
});
