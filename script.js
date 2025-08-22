const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slides = Array.from(document.querySelectorAll(".card-item"));

const VISIBLE = 3;
let start = 0; 
// [0,1,2,3,4,5]

function render() {
  slides.forEach((el) => el.classList.remove("active"));

  const count = VISIBLE;

  for (let i = 0; i < count; i++) {
    const idx = start + i;
    if (idx >= 0 && idx < slides.length) {
      slides[idx].classList.add("active");
    }
  }
  left.classList.toggle("disabled", start === 0);
  right.classList.toggle("disabled", start + VISIBLE >= slides.length);
}

left.addEventListener("click", () => {
  if (start > 0) {
    start -= 1;
    render();
  }
});

right.addEventListener("click", () => {
  if (start + VISIBLE < slides.length) {
    start += 1;
    render();
  }
});

start = 0;
render();
