function print(a, b, result, type) {
  console.log(
    `El valor de a= ${a}, b= ${b}, para la [${type}] el resultado es ${result}`
  );
}

let a = 10;
let b = 9;

let result = a == b;
print(a, b, result, "==");

result = a != b;
print(a, b, result, "!=");

a = "10";
b = 10;

// De diferente tipo
result = a == b;
print(a, b, result, "==");

result = a === b;
print(a, b, result, "===");

result = a != b;
print(a, b, result, "!=");

result = a !== b;
print(a, b, result, "!==");

// >, >=, <, >=

a = 5;
b = 10;
result = a >= b;

print(a, b, result, ">=");

result = a <= b;
print(a, b, result, "<=");

console.log("0" == false);
console.log("0" === false);

// Operador de negación
a = true;
console.log(!a);

console.log("TOGGLE");
let isActive = false;
console.log(isActive);

isActive = !isActive;
console.log(isActive);

isActive = !isActive;
console.log(isActive);
