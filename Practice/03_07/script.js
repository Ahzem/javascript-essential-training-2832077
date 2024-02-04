/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2015,
  color: "white",
  owner: {
    name: "John Doe",
    age: 45,
  },
  engine: {
    type: "V4",
    fuel: "gas",
  },
  start: function () {
    console.log("Car started");
  },
  stop: function () {
    console.log("Car stopped");
  },
};

console.log(car);
console.log(car.owner);
console.log(car.owner.name);
console.log(car.engine);
console.log(car.start());
console.log(car.stop());
