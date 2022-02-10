/* 
// AND &&
true && true -> true
true && false -> false
false && true -> false
false && false -> false

// OR ||
true || true -> true
true || false -> true
false || true -> true
false || false -> false
*/

const PORT = import.meta.env.VITE_PORT || 4000;
console.log(PORT);

/*
    if (expresion boolena){
        code ...
    } else {
        code ...
    }
*/

if (+PORT === 3000) {
  console.log(`Server on port ${PORT}`);
} else {
  console.log(`PORT not found`);
}

const nombre = "Goku";
const raza = "Super X";

if (nombre === "Vegeta" && raza === "Super") {
  console.log(`${nombre} super`);
} else {
  console.log("No pertenece");
}

// Operador termario
// (expresion boolena) ? verdad : false

const isActive =
  nombre === "Vegeta" ? (nombre === "Goku" ? "SIII" : "SI") : "NO";

// let mensaje = "";
// if (nombre === "Vegeta") {
//   mensaje = "SI";
// } else {
//   mensaje = "NO";
// }

console.log(`${nombre} correcto ->`, isActive);
