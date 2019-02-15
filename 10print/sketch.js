let x = 0;
let y = 0;
const STEP = 50;
let strokeColor = 0;
let page = {
  height: document.body.scrollHeight,
  width: document.body.scrollWidth
}
setup = () => {
  createCanvas(page.width, page.height);
  background(0);
}

draw = () => {
  stroke(strokeColor);
  if (random(1) < 0.5) {
    line(x, y, x + STEP, y + STEP);
  } else {
    line(x, y + STEP, x + STEP, y);
  }
  x+=STEP;

  if (x > width) {
    x = 0;
    y += STEP;
  strokeColor+=10;
  }
}