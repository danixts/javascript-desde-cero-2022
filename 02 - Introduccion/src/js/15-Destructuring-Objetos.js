// destructuring
// Objetos y Arrays
const id = 10;

const obj = {
  userId: 1,
  id: 5,
  title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
  completed: false,
};

const { userId, id: idObj, title, completed } = obj;

console.log(userId, idObj, title, completed);

const array = ["A", "B", "C"];

// const [a, b, c, d] = array;

// console.log(a, b, c, d);

// React
// const [isShow, setIsShow] = useState(false);

const valores = (a, b) => {
  const suma = (a, b) => a + b;
  const resta = a - b;
  const modulo = a % b;
  return { suma, resta, modulo };
};

const a = 20;
const b = 30;

const { modulo, resta, suma } = valores(a, b);

console.log(suma(a, b));
console.log(resta, modulo);

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

/* 
  item  
    - userId
    - id
    - title
    - completed 
*/
const updateJson = json.map(({ id, userId }) => {
  const esPar = id % 2 === 0;
  return {
    completed: esPar,
    userId,
  };
});

console.log(updateJson);

const filterElement = json.filter(({ id }) => id % 2 === 0);

console.log(filterElement);

// spread operator
// ...

const letras1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const letras2 = ["j", "k", "l", "m", "n", "o", "p", "q"];

console.log(letras2.concat(letras1));

const concat = [...letras1, ...letras2];

console.log(concat);

const updateJsonNotTitle = json.map(({ title, ...data }) => data);

console.log(updateJsonNotTitle);

const obj1 = [
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

const jsonObj = [...json, ...obj1];

console.log(jsonObj);

const sumarArray = (...args) => args.reduce((acc, cur) => acc + cur, 0);

const result = sumarArray(10, 20, 30);

console.log(result);

// optional chaining -> obj?.key?.key?

const data = {
  Goku: {
    id: 1,
    name: "Goku",
  },
  Vegeta: {
    id: 1,
    name: "Vegeta",
  },
};

console.log(data?.completed || "no");

// keys de objeto

const keys = Object.keys(data);

console.log(keys);

keys.forEach((key) => console.log(data[key]));

const entries = Object.entries(data);

const mapEntries = entries.map(([key, value]) => {
  return key;
});

console.log(mapEntries);

for (const [key, value] of entries) {
  console.log(`KEY = ${key}, VALUES ${JSON.stringify(value)}`);
}

const obj3 = { id: 1, value: "Javascript" };
const assingObj = Object.assign(obj3, { id: 4, color: "#343" });
console.log(assingObj.color);
