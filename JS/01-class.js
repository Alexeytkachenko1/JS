/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */

class Car {
  static description = 'Class described auto';
  static logInfo(carObj) {
    console.log('Car.logInfo -> carObj', carObj);
  }
  #test = 'test';
  mySuperPublicField = 555; // = this.mySuperPublicField=555
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  //   changePrice = newPrice => {
  //     this.price = newPrice;
  //   };
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
    // console.log(this.#test);
  }
  get model() {
    return this._model;
  }
  set model(newModel) {
    this._model = newModel;
  }
}
const carInstance = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

Car.logInfo(carInstance);
console.dir(Car);
console.log(carInstance);
console.log(carInstance.price);
carInstance.price = 50000;
console.log(carInstance.price);
console.log(carInstance.model);
carInstance.model = 'Q4';
console.log(carInstance.model);

const obj = {
  _a: 100,
  get a() {
    return this._a;
  },
  set a(x) {
    this._a = x;
  },
};
console.log(obj);
