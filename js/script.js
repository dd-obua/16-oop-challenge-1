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

const car1 = new Car('BMW', 120);
const car2 = new Car('Marcedes', 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
console.log();

car1.break();
car1.break();
car1.break();
car1.break();
car1.break();
car1.break();
console.log();

car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
console.log();

car2.break();
car2.break();
car2.break();
car2.break();
car2.break();
car2.break();
console.log();
