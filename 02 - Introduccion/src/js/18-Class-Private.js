// private #

class Forma {
  #suma = 0;
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.#suma = this.a + this.b;
  }

  print() {
    console.log(`a + b = ${this.#suma}`);
  }
}

const cuadrada = new Forma(5, 10);

cuadrada.print();
