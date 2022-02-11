/* 
    function nombreFuncion(param, param1,....){
        code...
    }

    function funcionRetornable(param, param1,....){
        code ...
        return valor;
    }
*/

// function verificaTypo(valor) {
//   console.log(`${valor} es [${typeof valor}]`);
// }

// verificaTypo("Cadena");
// verificaTypo(true);
// verificaTypo(false);
// verificaTypo(19.99);
// verificaTypo({});
// verificaTypo(10000n);

function typeValue(valor) {
  return typeof valor; // string, number, boolean
}

// const value = "10";

// const isNumber = verificaTypo(value) === "number";
// if (isNumber) {
//   console.log("SI ES UN NUMERO");
// } else {
//   console.log("NO ES UN NUMERO");
// }

// (number === number) && string === number
// true && false

function suma(a, b) {
  if (typeValue(a) === "number" && typeValue(b) === "number") {
    return a + b;
  } else if (typeValue(a) === "string" && typeValue(b) === "number") {
    return Number(a) + b;
  } else if (typeValue(a) === "number" && typeValue(b) === "string") {
    return a + Number(b);
  } else if (typeValue(a) === "string" && typeValue(b) === "string") {
    return +a + +b;
  }
  return false;
}

// number number
// string number
// number string
// string string

// debugger;
const a = 10;
const b = "10";

const result = suma(a, b);
if (result) {
  console.log(result);
} else {
  console.log("NO ES POSIBLE REALIZAR LA OPERACION");
}

// 6! = 1*2*3*4*5*6
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

for (let i = 1; i <= 8; i++) {
  console.log(`${i}! = ${factorial(i)}`);
}

let tamanio = 5;

for (let i = 1; i <= tamanio; i++) {
  // code...
}

/* 
  longitud 5
  
  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
  
  longitud 3
  
  __*__
  _***_
  *****
  __#__
  __#__
  
  */
