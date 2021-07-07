/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Global Object Binding.
      When in the global scope, the value of "this" will be the Window in browsers and the Console in Node

* 2.  Implicit Binding
      Implicit binding means automatic binding. This type of binding only applies to objects with methods.
      Implicit binding is typically the most common type of binding. With implicit binding, when a function
      is invoked, "this" refers to what is left of the .

* 3.  New Binding
      New binding is when we use a constructor function to build and return an object. With new binding, our
      reference to "this" is attached to the object the constructor returns.

* 4.  Explicit Binding
      Whenever .call(), .apply(), or .bind() are used, we're using explicit binding. We say explicit binding
      because we're explicitly passing our reference to "this" into a method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function helloGlobal(phrase) {
  return [phrase, this];
}
console.log(helloGlobal('Hello Global 👋'));

// Principle 2

// code example for Implicit Binding
const person = {
  name: 'Joe',
  favorite_food: 'pizza',
  favorite_exercise: 'swimming',
  location: {
    city: 'Seattle',
    state: 'Washington',
    country: 'USA',
    planet: 'Earth 2, the sequel to Earth',
  },
  speak: function() {
    return `My name is ${this.name}. I enjoy eating ${this.favorite_food}. I'm from a city called ${this.location.city},
    in the state of ${this.location.state} on the planet ${this.location.planet}. Have a nice day.`;
  },
};
console.log(person.speak());

// Principle 3

// code example for New Binding
function User(attributes) {
  this.name = attributes.name;
  this.role = attributes.role;
  this.email = attributes.email;
  this.username = attributes.username;
}

User.prototype.description = function() {
  return `${this.name} is a ${this.role}`;
};

const user_1234 = new User({
  name: 'Bob Ross',
  role: 'painter',
  email: 'bob.ross@paints.fun',
  username: 'bor_boss',
});

console.log(user_1234.description());

// Principle 4

// code example for Explicit Binding
const pet = {
  name: 'Batman',
  species: 'dog',
  breed: 'labradoodle',
  weight: '55lbs',
  favorite_food: 'Chicken',
  sound: 'honk honk',
};

function makeSound() {
  return `${this.name} is a ${this.species} who eats ${this.favorite_food} and likes to say: ${this.sound}!`;
}

console.log(makeSound.call(pet));
const myPetSounds = makeSound.bind(pet);
console.log(myPetSounds());
