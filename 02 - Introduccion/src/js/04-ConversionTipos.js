// string to number
function print(value) {
  console.log(`El valor es ${value}, con el tipo de dato [${typeof value}]`);
}

let number = "10.231";
print(number);

number = Number(number);
print(number);

// number = parseInt(number); // parte entera
number = parseFloat(number);
print(number);

// number to string
number = 100.2;
number = String(number);
print(number.toString());
print(number);

// booleano to number
let booleano = true; // false 0 true 1

booleano = Number(false);
print(booleano);

// false -> null, undefined -> "", 0 caso contradio true
booleano = Boolean(null);
print(booleano);

// como dato
let a = +"10.11"; // + operador unario
let b = 10;
console.log(a + a + b);
print(a);
