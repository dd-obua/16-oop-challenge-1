'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const marcedes = new Car('Marcedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
console.log();

bmw.break();
bmw.break();
bmw.break();
bmw.break();
bmw.break();
bmw.break();
console.log();

marcedes.accelerate();
marcedes.accelerate();
marcedes.accelerate();
marcedes.accelerate();
marcedes.accelerate();
marcedes.accelerate();
console.log();

marcedes.break();
marcedes.break();
marcedes.break();
marcedes.break();
marcedes.break();
marcedes.break();
console.log();
