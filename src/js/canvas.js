import utils, {randomHue} from './utils'

const canvas = document.querySelector('canvas'); // Grabs the canvas
const c = canvas.getContext('2d'); // Sets the context to a 2d plane (required).

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

const gravity = 0.01; // Setting a gravity value to apply to each particle's y velocity to create a gravity-like effect.
const friction = 0.99; // Setting a friction coefficient to apply to each particle to slowly stop it.

// Track and store where each click occurs and spawn 400 unique particles each click.
addEventListener('click', (event) => {
  mouse.x = event.clientX; // Stores the x position of the click
  mouse.y = event.clientY; // Stores the y position of the click

  // Particle control variables. Change these to create different effects
  const particleCount = 400;
  const angle = (Math.PI * 2) / particleCount;
  const power = 7; // Explosion power

  // Spawns 400 particles for each click event, each with its own properties.
  for(let i = 0; i < particleCount; i++) {
    particles.push(
        new Particle(
            mouse.x,
            mouse.y,
            3,
            randomHue(),
            {
              x: Math.cos(angle * i) * Math.random() * power,
              y: Math.sin(angle * i) * Math.random() * power
            }
        )
    );
  }
});

// Resets the canvas each time window is resized and sets the canvas to the size of the new window.
addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.alpha = 1;
  }

  draw() {
    c.save();
    c.globalAlpha = this.alpha
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.draw();
    this.velocity.x *= friction; // Applying friction each particle's x velocity.
    this.velocity.y *= friction; // Applying friction each particle's y velocity.
    this.velocity.y += gravity; // Applying a gravity coefficient to each particle.
    this.x += this.velocity.x; // Applying a horizontal velocity to each particle.
    this.y += this.velocity.y; // Applying a vertical velocity to each particle.
    this.alpha -= 0.005; // Applying a slight reduction to each particle's alpha value.
  }
}

// Implementation
let particles;
function init() {
  particles = []; // Reset array to begin computation
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate); // Creates the animation loop by calling itself repeatedly.
  c.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Setting the color and alpha to set as the background.
  c.fillRect(0, 0, canvas.width, canvas.height); // Filling the defined shape with the fillStyle.


  particles.forEach((particle, index) => { // Looping through all particles.
    if (particle.alpha > 0) {
      particle.update(); // Calling the particle function to continuously redraw each particle.
    } else {
      particles.splice(index, 1); // Removes the particle from computation if its alpha value hits 0.
    }
  });
}

init();
animate();
