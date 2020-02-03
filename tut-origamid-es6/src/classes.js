///////////////////////////////////////  CONSTRUCTOR
function Hero(name, level) {
    this.name = name;
    this.level = level;
  }
  
  // Adding a method to the constructor
  Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
  };
  
  // Creating a new constructor from the parent
  function Mage(name, level, spell) {
    // Chain constructor with call
    Hero.call(this, name, level);
  
    this.spell = spell;
  }
  
  // Creating a new object using Hero's prototype as the prototype for the newly created object.
  Mage.prototype = Object.create(Hero.prototype);



/////////////////////////////////////// CLASS
// Initializing a class
class Herox {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
  
    // Adding a method to the constructor
    greet() {
      return `${this.name} says hello.`;
    }
  }
  
  // Creating a new class from the parent
  class Magex extends Herox {
    constructor(name, level, spell) {
      // Chain constructor with super
      super(name, level);
  
      // Add a new property
      this.spell = spell;
    }
  }




  // Initializing a function with a function expression
const x = function() {};

// Initializing a class with a class expression
const y = class {};