function print(msg, result) {
  console.log(`Funcion ${msg}, resultado = ${result}`);
}

// Math
print("POW", Math.pow(2, 6));
print("PI", Math.PI);
print("E", Math.E);
print("RAIZ", Math.sqrt(25));
print("RANDOM", Math.floor(Math.random() * 10 + 1));
print("ROUND", Math.round(67.56));
print("ABS", Math.abs(-1));
print("SIN", Math.sin(1)); // cos, tan
print("CEIL", Math.ceil(44.2));

print("MAX", Math.max(3, 5, 1, 7, 8, 10, -1));
print("MIN", Math.min(3, 5, 1, 7, 8, 10, -1));

// String
let cad = "Curso JavaScript";

print("LONGITUD", cad.length);

print("RECUPERAR UNA LETRA", cad[10]);

print("CHAR AT", cad.charAt(10));

print("ASCII Code", String.fromCharCode(64));

for (var i = 32; i <= 127; i++) {
  console.log(`${i} = ${String.fromCharCode(i)}`);
}

print("+", cad + " 2022");
print("CONCAT", cad.concat(" 2022"));

print("TRIM", "   Daniel ".trim());

print("MAYUSCULAS", cad.toUpperCase());
print("MINUSCULAS", cad.toLowerCase());

const indexOf = cad.indexOf("Java");
print("INDEX OF", indexOf);

if (indexOf !== -1) {
  print("SUBSTRING", cad.substring(indexOf, cad.length));
} else {
  console.log("CADENA NO ENCONTRADA");
}

print("INCLUDES", cad.includes("Java"));
print("START WITH", cad.startsWith("Java"));
print("END WITH", cad.endsWith("JavaScript"));

cad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

print("SLICE", cad.slice(-6, -1));

print("REPEAT", "*".repeat(10));

print("PAD START", "7".padStart(2, "0"));
print("PAD START", "1".padEnd(2, "0"));

cad = "Hola Hola";
print("REPLACE", cad.replace(/Hola/gi, "JavaScript"));
print("REPLACE", cad.replaceAll("Hola", "JavaScript"));

print("SPLIT", "Vue JavaScript Vite".split(" "));

// Numerica
const number = 56.9872;
const dec = 10;

print("REDONDEO", number.toFixed(2));
print("BINARIA", dec.toString(2));
print("OCT", dec.toString(8));
print("HEX", dec.toString(16));

print("PARSE INT", parseInt(number));
print("PARSE FLOAT", parseFloat("10.232"));
