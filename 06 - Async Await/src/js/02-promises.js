import "./src/assets/css/tailwind.css";

import Data from "./src/js/data";

console.log(Data);

const getId = (id) => {
  const per = Data.find(({ id: dataId }) => dataId === id);
  return new Promise((resolve, reject) => {
    if (per) {
      resolve(per);
    } else {
      reject(`Error en obtener el personaje ${id}`);
    }
  });
};

const ID = 3;
const ID2 = 10;

getId(ID)
  .then((personaje) => {
    console.log("PERSONAJE 1", personaje);
    getId(ID2)
      .then((personaje2) => {
        console.log(
          `El Personaje 1 es: ${personaje.name}, Personaje 2: ${personaje2.name}`
        );
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("OPERACION FINALIZADA"));

Promise.all([getId(1), getId(20)])
  .then(([per1, per2]) => {
    console.log(`El Personaje 1 es: ${per1.name}, Personaje 2: ${per2.name}`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("FIN DEL PROCESO");
  });

// setTimeout(() => console.log("Hola soy timeout"), 3000);

const natzu = new Promise((resolve, reject) => {
  setTimeout(() => resolve("DE 1000ms Natzu"), 1000);
});

const erza = new Promise((resolve, reject) => {
  setTimeout(() => resolve("DE 500ms Erza"), 500);
});

const gray = new Promise((resolve, reject) => {
  setTimeout(() => resolve("DE 250ms Gray"), 250);
});

Promise.race([natzu, erza, gray]).then((res) =>
  console.log("RACE RESPONSE", res)
);
