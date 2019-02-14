let video;
let x = 0;

function setup() {
  createCanvas(1600, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(640,480);
  background(255);
}

function draw() {

  let w = video.width;
  let h = video.height;

  copy(video, w / 2, 0, 1, h, x, 0, 1, h);

  x++;

  if (x > width) {
    x = 0;
  }
}