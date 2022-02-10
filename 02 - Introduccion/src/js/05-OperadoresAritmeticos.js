function print(a, b, result, type) {
  console.log(
    `El valor de a= ${a}, b= ${b}, para la ${type} el resultado es ${result}`
  );
}

function printOtraForma(value, type) {
  console.log(`El valor ${value} para la operacion de ${type}`);
}

// debugger;
let a = 10;
let b = 20;

// SUMA (+)
let result = a + b;
print(a, b, result, "SUMA");

a = "HOLA" + " " + "JAVASCRIPT";
result = a + b;
print(a, b, result, "SUMA");

// RESTA (-)
a = 20;
b = 30;
result = a - b;
print(a, b, result, "RESTA");

// MULTI (*)
a = 5;
b = 7;
result = a * b;
print(a, b, result, "MULTI");

// debugger;
// DIVISION (/)
a = 45;
b = 7; // si se divide entre 0 el valor es infinito
result = a / b;
print(a, b, result, "DIVISION");

// MODULO (%)
result = a % b;
print(a, b, result, "MODULO");

// POTENCIA Math.pow  (**)

a = 2;
b = 7;
result = Math.pow(a, b);
print(a, b, result, "CON MATH");

result = a ** b;
print(a, b, result, "CON OPERADOR");

// debugger;
a = 2;
a = a + 1;
a++;
console.log("SUMA INCREMENTAR", a);

a = 10;
a = a - 1;
a--;
console.log("SUMA DECREMEMTO", a);

console.log("********** OTRA FORMA ********");

let valores = 0;

valores += 10; // valores = valores + 10
printOtraForma(valores, "SUMA");

valores /= 2;
printOtraForma(valores, "DIVISION");
