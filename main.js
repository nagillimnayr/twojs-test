import Two from 'two.js';

const params = {
  fullscreen: true,
};
const { body } = document;
const two = new Two(params).appendTo(body);

// Circle
// const radius = 50;
const x = two.width * 0.5;
const y = two.height * 0.5;
// const circle = two.makeCircle(x, y, radius);
// circle.fill = '#00A6FB';
// circle.noStroke();

// Rectangle
const width = 100;
const height = 100;
const rect = two.makeRectangle(x, y, width, height);
rect.fill = '#00A6FB';
rect.noStroke();

function update() {
  const angle = Math.PI / 180;
  const twoPi = 2 * Math.PI;
  // This code is called every time two.update() is called.
  rect.rotation += angle;
  while (rect.rotation > twoPi) {
    rect.rotation -= twoPi;
  }
}

two.bind('update', update);
// Draw
two.play();
