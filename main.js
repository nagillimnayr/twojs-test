import Two from "two.js";

const params = {
  fullscreen: true,
  autostart: true,
};
const { body } = document;
const two = new Two(params).appendTo(body);

// Circle
// const radius = 50;
// const x = two.width * 0.5;
// const y = two.height * 0.5;
// const circle = two.makeCircle(x, y, radius);
// circle.fill = '#00A6FB';
// circle.noStroke();

// Rectangle
const width = 50;
const height = 50;
const rect = two.makeRectangle(0, 0, width * 2, height * 2);
// rect.fill = "#00A6FB";
// rect.noStroke();

// Array of rectangles
const rects = [];
rects.push(rect);

const numOfRects = 8;
let angle = (2 * Math.PI) / numOfRects;
const twoPi = 2 * Math.PI;
const radius = 200;
for (let i = 0; i < numOfRects; i += 1) {
  const x = radius * Math.cos(angle * i);
  const y = radius * Math.sin(angle * i);
  rects.push(two.makeRectangle(x, y, width, height));
}

const group = two.makeGroup(rects);
group.fill = "#00A6FB";
group.position.set(two.width / 2, two.height / 2);

angle = Math.PI / 180;
function update() {
  // This code is called every time two.update() is called.
  group.rotation += angle;
  while (group.rotation > twoPi) {
    group.rotation -= twoPi;
  }
}

two.bind("update", update);
