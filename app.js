const pointer = document.querySelector(".pointer");
const container = document.querySelector(".container");
const massContainer = document.querySelector(".mass-container");

addEventListener("mousemove", (e) => {
  pointer.style.setProperty("--mouseX", e.clientX + "px");
  pointer.style.setProperty("--mouseY", e.clientY + "px");
});

massContainer.addEventListener("mouseover", (e) => {
  if (!e.target.children.length) {
    console.log(e.target.dataset.productName);
    pointer.setAttribute("productName", e.target.dataset.productName);
  }

  addEventListener("mousedown", () => {});
});

massContainer.addEventListener("mouseout", (e) => {
  if (!e.target.children.length) {
    pointer.setAttribute("productName", "");
  }
});

const scrollAnimation = () => {
  console.log("animation start");
  document.body.style.height = `${container.getBoundingClientRect().height}px`;
  requestAnimationFrame(smoothScroll);
};

const lerp = (start, end, ease) => {
  return start + (end - start) * ease;
};

let current = 0;
let target = 0;
let ease = 0.1;

const smoothScroll = () => {
  current = lerp(current, target, ease);
  current = parseFloat(current.toFixed(2));
  container.style.transform = `translateY(-${current}px)`;
  target = window.scrollY;
  requestAnimationFrame(smoothScroll);
};

window.addEventListener("load", scrollAnimation);
