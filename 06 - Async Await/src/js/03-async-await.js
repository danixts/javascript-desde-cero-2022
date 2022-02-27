import "./src/assets/css/tailwind.css";

import Data from "./src/js/data";

console.log(Data);

const getId = async (id) => {
  const per = Data.find(({ id: dataId }) => dataId === id);
  if (per) {
    return per;
  } else {
    throw `Error en obtener el personaje ${id}`;
  }
};

let idSearch = {};

getId(1)
  .then((res) => {
    console.log(res);
    Object.assign(idSearch, res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("FIN DE PROCESO");
  });

console.log(idSearch);

const getIdAwait = async (id) => {
  try {
    const returnValue = await getId(id);
    return returnValue;
  } catch (err) {
    console.log(err);
  }
};

getIdAwait(4)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const ids = [2, 3, 4];

const arrGetPersonajes = async () => {
  const personajes = [];
  for (let id of ids) {
    const per = await getId(id);
    personajes.push(per);
  }
  return personajes;
};

console.log(arrGetPersonajes());

async function getPersonajeName() {
  try {
    const per = await getId(3);
    return per;
  } catch (err) {
    console.log(err);
    return {
      status: 400,
      err,
    };
  }
}

getPersonajeName()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

(async () => {
  console.log(await getPersonajeName());
  try {
    const [per1, per2] = await Promise.all([getId(3), getId(2)]);
    console.log("Personaje1", per1, "Personaje 2", per2);
  } catch (err) {
    console.error(err);
  }
})();
