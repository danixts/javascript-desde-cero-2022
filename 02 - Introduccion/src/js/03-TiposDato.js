// string 🚀
// number 🚀
// booleano 🚀
// bigint -
// object 🚀🚀🚀
// null 🚀
// undefined 🚀
// symbol

// date -

// Imprime el tipo de dato
function print(data, type) {
  console.log(
    `Esto es un ${type}`,
    data,
    `el tipo de dato es [${typeof data}]`
  );
}

// string
const cadena = "VEGETA";

print(cadena, "string");

// number
const numberInt = 100;
const numeroDouble = 10.3412;

print(numberInt, "number");
print(numeroDouble, "number");

// booleano
const isShow = false;
print(isShow, "BOOLEANO");

// bigint
const normalNumber = 9999999999999999999;
print(normalNumber, "NUMERO NORMAL");

const bigNumber = 999999999999999999999999n;
print(bigNumber, "NUMERO BIG");

// object
/* 
    {
      key: value,
      key1: value
    }
  */
const data = {
  id: 1,
  text: "Hola desde javascript",
  suma: function () {
    console.log("suma a + b = 10");
  },
  autores: [
    {
      id: 1,
      nombre: "Picaso",
    },
    {
      id: 2,
      nombre: "Daniel",
    },
  ],
  libros: {
    a: {
      id: 1,
    },
  },
};

// console.log(typeof print);
print(data, "OBJECTO");

// null
const IS_NULL = null;
print(IS_NULL, "NULO");

// undefined
const indefinido = undefined;
print(indefinido, "UNDEFINED");

// fechas
const fecha = new Date();
const actual = fecha.getDate();
print(actual, "FECHA");
