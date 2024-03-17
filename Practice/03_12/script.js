/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Clothing {
  constructor(type, color, size, price, brand) {
    this.type = type;
    this.color = color;
    this.size = size;
    this.price = price;
    this.brand = brand;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const shirt = new Clothing("shirt", "blue", "M", 20, "Nike");
const pants = new Clothing("pants", "black", "L", 30, "Adidas");
const socks = new Clothing("socks", "white", "M", 5, "Hanes");

console.log("Before: ", shirt.price);
shirt.changePrice(25);
console.log("After: ", shirt.price);
console.log("Before: ", pants.price);
pants.changePrice(35);
console.log("After: ", pants.price);
console.log("Before: ", socks.price);
socks.changePrice(10);
console.log("After: ", socks.price);
