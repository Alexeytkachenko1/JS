// /*
//  * Наследование
//  *  - extends
//  *  - super()
//  */

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

const ajax = new Berserk({
  name: 'ajax',
  xp: 500,
  weapon: 'axe',
  warcry: 'waaaaaaaah',
});

console.log(ajax);

ajax.babyRage();
ajax.attack();
ajax.gainXp(100);

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} что-то там кастует 🧙‍♂️`);
  }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
console.log(mango);
mango.attack();
mango.gainXp(1000);

const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
console.log(poly);
poly.cast();
poly.gainXp(200);

console.log(
  'mango.__proto__ === Warrior.prototype ',
  mango.__proto__ === Warrior.prototype,
);
// console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

console.log(
  'Warrior.prototype.__proto__ === Hero.prototype ',
  Warrior.prototype.__proto__ === Hero.prototype,
);

console.log(
  'Hero.prototype.__proto__ === Object.prototype ',
  Hero.prototype.__proto__ === Object.prototype,
);

//

//

//

//

//

//

//
// class Car {
//   #speed = 0;
//   constructor({ maxSpeed = 0 }) {
//     this.maxSpeed = maxSpeed;
//   }
//   get speed() {
//     return this.#speed;
//   }
//   set speed(value) {
//     if (value <= this.maxSpeed) {
//       this.#speed = value;
//     } else {
//       this.#speed = this.maxSpeed;
//     }
//   }
// }

// const car = new Car({ maxSpeed: 100 });

// console.log(car);
// car.speed = 88;
// console.log(car);
//========================proto kostil//========================
// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;
// console.log(dog.barks);
// console.log(dog.eats);

//========================proto po  normalnomu//========================
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog.barks);
// console.log(dog.eats);

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog.barks);
// console.log(dog.eats);
//======================== методы и наследование по старому========================
function LegacyAnimal(name) {
  this.name = name;
}
LegacyAnimal.prototype.walk = function () {
  console.log(`${this.name} is walking`);
};
const animal = new LegacyAnimal('Tuzik');
console.log(animal);

function Dog({ name, age }) {
  LegacyAnimal.call(this, name);
  this.age = age;
}
Dog.prototype = Object.create(LegacyAnimal.prototype);
Dog.prototype.walk = function () {
  console.log(`${this.name} is walking on 4 legs`);
};

Dog.prototype.constructor = Dog;
const strelka = new Dog({
  name: 'strelka',
  age: 3,
});
console.log(strelka);
strelka.walk();
animal.walk();

////========================unique value//========================
// function getUniqueValue(text) {
//   return text
//     .toUpperCase()
//     .split('')
//     .filter((value, index, array) => array.indexOf(value) === index);
// }
// //     .filter((value, index, array) => array.indexOf(value) === index);
// // }
// console.log(getUniqueValue('AAAaBBBCCC'));

////========================pairs========================
// function solutions(str) {
//   const result = [];
//   for (let i = 0; i < str.length; i += 2) {
//     const s1 = str[i];
//     const s2 = str[i + 1] || '_';
//     result.push(`${s1}${s2}`);
//   }
//   console.log(result);
// }
// function solutions(str) {
//   const result = [];
//   for (let index = 0; index < str.length; index += 2) {
//     const s1 = str[index];
//     // const s2 = str[index + 1] || '_';
//     const s2 = str[index + 1] ? str[index + 1] : '_';
//     result.push(`${s1}${s2}`);
//   }
//   console.log(result);
// }
// solutions('abc');
// solutions('abcdef');
