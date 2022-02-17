class Elemento {
  static PESO = 100;
  static INCREMENT = 0;

  static get increment() {
    return Elemento.INCREMENT;
  }

  constructor(id, tipo, valor) {
    this.id = id;
    this.tipo = tipo;
    this.valor = valor;
    Elemento.INCREMENT++;
  }

  get type() {
    return `${this.tipo} ${this.id}`;
  }

  set setType(tipo) {
    this.tipo = tipo;
  }

  print() {
    console.log(`id = ${this.id},tipo = ${this.tipo}, valor = ${this.valor}`);
  }

  lowercase() {
    return this.tipo.toLowerCase();
  }
}

const color = new Elemento(1, "COLOR", 100);
const tamanio = new Elemento(2, "TAMANIO", 500);
const forma = new Elemento(2, "FORMA", 500);

console.log(typeof color);

console.log("GET COLOR ORIGINAL", color.tipo);
console.log("GET TYPE COLOR", color.type);

color.setType = "FORMA";
color.valor = 2000;

color.print();
forma.print();
console.log(color.lowercase());
tamanio.print();

console.log(Elemento.PESO);
console.log(Elemento.INCREMENT);

class TipoElemento extends Elemento {
  constructor(id, tipo, valor, peso) {
    super(id, tipo, valor);
    this.peso = peso;
  }

  printConPeso() {
    console.log(
      `id = ${this.id},tipo = ${this.tipo}, valor = ${this.valor}, peso = ${this.peso}`
    );
  }

  printSuper() {
    super.print();
    console.log("PRINT SUPER DESDE TIPO ELEMENTO");
  }
}

const version = new TipoElemento(4, "VESION", 600, 60000);
version.printSuper();
version.printConPeso();
