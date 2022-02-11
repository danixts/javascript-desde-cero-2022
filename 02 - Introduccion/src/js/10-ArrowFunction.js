/* 
    () => {code...}
    () => expresion simple
    () => { return valor }  

    const nombreFuncion = (param, param1,...) => {}
    const nombreFuncion = (param, param1,...) => { return valor }
    const nombreFuncion = (param, param1,...) => expresion simple
*/

// function suma(a, b) {
//   return a + b;
// }

// Forma #1
// const suma = (a, b) => {
//   return a + b;
// };

const suma = (a, b) => a + b;

const a = 20;
const b = 50;

const result = suma(a, b);

console.log(result);

const factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

for (let i = 1; i <= 8; i++) {
  console.log(`${i}! = ${factorial(i)}`);
}
