/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.querySelector('canvas'); // Grabs the canvas

var c = canvas.getContext('2d'); // Sets the context to a 2d plane (required).

canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
var gravity = 0.01; // Setting a gravity value to apply to each particle's y velocity to create a gravity-like effect.

var friction = 0.99; // Setting a friction coefficient to apply to each particle to slowly stop it.
// Track and store where each click occurs and spawn 400 unique particles each click.

addEventListener('click', function (event) {
  mouse.x = event.clientX; // Stores the x position of the click

  mouse.y = event.clientY; // Stores the y position of the click
  // Particle control variables. Change these to create different effects

  var particleCount = 400;
  var angle = Math.PI * 2 / particleCount;
  var power = 7; // Explosion power
  // Spawns 400 particles for each click event, each with its own properties.

  for (var i = 0; i < particleCount; i++) {
    particles.push(new Particle(mouse.x, mouse.y, 3, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomHue"])(), {
      x: Math.cos(angle * i) * Math.random() * power,
      y: Math.sin(angle * i) * Math.random() * power
    }));
  }
}); // Resets the canvas each time window is resized and sets the canvas to the size of the new window.

addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); // Objects

var Particle = /*#__PURE__*/function () {
  function Particle(x, y, radius, color, velocity) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.alpha = 1;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.globalAlpha = this.alpha;
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
      c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.velocity.x *= friction; // Applying friction each particle's x velocity.

      this.velocity.y *= friction; // Applying friction each particle's y velocity.

      this.velocity.y += gravity; // Applying a gravity coefficient to each particle.

      this.x += this.velocity.x; // Applying a horizontal velocity to each particle.

      this.y += this.velocity.y; // Applying a vertical velocity to each particle.

      this.alpha -= 0.005; // Applying a slight reduction to each particle's alpha value.
    }
  }]);

  return Particle;
}(); // Implementation


var particles;

function init() {
  particles = []; // Reset array to begin computation
} // Animation Loop


function animate() {
  requestAnimationFrame(animate); // Creates the animation loop by calling itself repeatedly.

  c.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Setting the color and alpha to set as the background.

  c.fillRect(0, 0, canvas.width, canvas.height); // Filling the defined shape with the fillStyle.

  particles.forEach(function (particle, index) {
    // Looping through all particles.
    if (particle.alpha > 0) {
      particle.update(); // Calling the particle function to continuously redraw each particle.
    } else {
      particles.splice(index, 1); // Removes the particle from computation if its alpha value hits 0.
    }
  });
}

init();
animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomHue() {
  return "hsl(".concat(Math.random() * 360, ", 50%, 50%)");
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  randomHue: randomHue
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map