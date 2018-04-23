function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(this.name + ',Hello !');
  };
}

// console.log(Person.prototype);
Person.prototype.sayHi = function() {
  console.log('Hi!' + this.name);
};

const p1 = new Person('luokai', 25);

p1.sayHello();
p1.sayHi();
console.log(p1.__proto__);
