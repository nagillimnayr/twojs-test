import Two from 'two.js';

const params = {
  fullscreen: true,
};
const { body } = document;
const two = new Two(params).appendTo(body);

const radius = 50;
const x = two.width * 0.5;
const y = two.height * 0.5;
const circle = two.makeCircle(x, y, radius);
circle.fill = '#00A6FB';

// Draw
two.update();
