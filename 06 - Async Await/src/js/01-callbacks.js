// const root = document.querySelector(".root");
// root.addEventListener("click", function (e) {
// code ...
// });

// callback(err, success)
const getId = (id, callback) => {
  const per = Data.find(({ id: dataId }) => dataId === id);
  if (per) {
    callback(null, per);
  } else {
    callback(`Error en obtener el personaje ${id}`);
  }
};

const ID = 3;
const ID_2 = 10;
getId(ID, function (err, personaje) {
  if (err) {
    console.log(err);
  } else {
    getId(ID_2, function (err, personaje2) {
      if (err) {
        console.log(err);
      } else {
        console.log(
          `El Personaje 1 es: ${personaje.name}, Personaje 2: ${personaje2.name}`
        );
      }
    });
  }
});
