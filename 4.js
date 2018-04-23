class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(this.name + ' Hello world!');
  }

  sayHi() {
    console.log('Hi, ' + this.name);
  }
}

const p1 = new Person('luokai', 26);
p1.sayHello();
p1.sayHi();

console.log(p1.__proto__);
