import "./src/css/tailwind.css";

// 0,1,2,3,4,5,6,7
const arr = [
  true,
  1,
  2,
  3,
  4,
  "JavaScript",
  12.32,
  function () {},
  { id: 1, name: "Daniel" },
  [1, 2, 3],
];

console.log(arr);
console.log(arr[8]);

// concat

const numeros = [1, 2, 3, 4, 5];
const letras = ["a", "b", "c", "d"];

console.log(numeros.concat(letras));
console.log(numeros + letras); // no es posible el concat

numeros.push("Hola");

console.log(numeros);

const numero5 = numeros.pop();
console.log(numero5);
numeros.pop();

console.log(numeros);

console.log(numeros.shift());

console.log(numeros);

console.log(numeros.unshift());

console.log(numeros);

const json = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

// FORMA QUE YA NO USA
for (let i = 0; i < json.length; i++) {
  console.log(json[i].id);
}

// for (let variable of array)

for (let item of json) {
  console.log(item.id);
}

for (let index in json) {
  console.log(index);
}

// arr.forEach()
// productos -> producto

json.forEach(function (item) {
  console.log(item);
});

function forEachValores(item) {
  console.log(item.completed);
}

console.log("FUNCION EXTERNA");
json.forEach(forEachValores);

// map
// cambiar los estados de los id pares a true
// quitame los titulos
const updateJson = json.map(function (item) {
  const esPar = item.id % 2 === 0;
  item.completed = esPar;
  return {
    completed: item.completed,
    userId: item.userId,
  };
});

console.log(updateJson);

// const userIds = json.map(function (user) {
//   return user.id;
// });

// function updateJson(element, index, arr){
// }

// const updateJson = (element, index, arr) => element

const userIds = json.map((user) => user.id);

console.log(userIds);

// filtrado, busqueda

const filterElement = json.filter((item) => item.id % 2 === 0);

console.log(filterElement);

const findElement = json.find((item) => item.id === 5);
console.log(findElement);

const findIndex = json.findIndex((item) => item.id === 2);
console.log(findIndex);

console.log(json[findIndex]);

const indexOf = letras.indexOf("c");

console.log(indexOf);

// Otros metodos de arrays

const cad = "Hola desde Javascript";

const arrCad = Array.from(cad);
console.log(arrCad);

const frutas = Array("🍉", "🥑", "🥝", "🍏", "🍒", "🍇", "🍏", "🍏", "🍏");

console.log(frutas);

const isArray = Array.isArray(frutas);

console.log(isArray);

console.log(Array(10).fill(0));

// REDUCE
const productos = [
  { id: 1, price: 22.99 },
  { id: 2, price: 50.99 },
  { id: 3, price: 12.99 },
  { id: 4, price: 56.99 },
  { id: 5, price: 43.99 },
];

let suma = 0;
for (let product of productos) {
  suma += product.price;
}

// console.log(0.1 + 0.2);
const sumaProduco = productos.reduce((acc, cur) => acc + cur.price, 0);
console.log("PRECIO TOTAL: ", sumaProduco.toFixed(2));

const numerosReverse = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numerosReverse);
console.log(numerosReverse.reverse());

const name = "Titan Expressions for Express";

const split = name.split(" ");
console.log(split);

const join = split.join("*");
console.log(join);

const jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const payloadBase64 = jwt.split(".")[1];

// btoa -> string a base64 || atob -> base64 a string

// const valuesJson = jwt.split(".").map((e) => window.atob(e));

// JSON.parse(stringJson) -> parseo a json || JSON.stringify(stringJson) -> string

const payload = window.atob(payloadBase64);

const parseJson = JSON.parse(payload);

// console.log(payload);
console.log(parseJson);
console.log(parseJson.name);

// includes

const _valores = ["Vite", "Vue.js", "Angular", "React", "Next.js", "Node"];

const search = "Vue.js";

console.log(_valores.includes(search));

console.log(frutas.splice(3, 5));

console.log(frutas.slice(2, 5));

console.log(_valores.some((e) => e === search));
console.log(_valores.every((e) => e === search));

// sort -> ordenar valores
console.log(_valores.sort());

console.log(productos.sort((a, b) => b.price - a.price));
