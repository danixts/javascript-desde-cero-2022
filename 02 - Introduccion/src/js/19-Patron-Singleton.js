class Singleton {
  static instance;

  constructor(tipo) {
    if (!!Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.tipo = tipo;
  }

  print() {
    console.log(`El tipo es: ${this.tipo}`);
  }
}

const obj1 = new Singleton("forma");
const obj2 = new Singleton("color");
const obj3 = new Singleton("tamaño");

obj1.print();
obj2.print();
obj3.print();
