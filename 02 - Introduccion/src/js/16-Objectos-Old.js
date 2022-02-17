import "./src/css/tailwind.css";

const obj1 = {
  id: 1,
  tipo: "COLOR",
  valor: 100,
  print() {
    console.log(`id = ${this.id},tipo = ${this.tipo}, valor = ${this.valor}`);
  },
};

obj1.print();

const obj2 = {
  id: 2,
  tipo: "TAMAÑO",
  valor: 500,
  print() {
    console.log(`id = ${this.id},tipo = ${this.tipo}, valor = ${this.valor}`);
  },
};

obj2.print();

function Elemento(id, tipo, valor) {
  this.id = id;
  this.tipo = tipo;
  this.valor = valor;
  this.print = function () {
    console.log(`id = ${this.id},tipo = ${this.tipo}, valor = ${this.valor}`);
  };
}

const color = new Elemento(1, "COLOR", 100);
const tamanio = new Elemento(2, "TAMANIO", 500);

console.log(typeof color);

color.print();
tamanio.print();
