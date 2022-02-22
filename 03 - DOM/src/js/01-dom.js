import "./src/assets/css/tailwind.css";

// .nombre-clase -> cuando es class
//  #nombre_div -> cuando es div
// <etiqueta> -> nombre de la etiqueta
const h1 = document.querySelector("h1");
const app = document.getElementById("app");

// const app2 = document.querySelectorAll(".container");
// h1.forEach((e) => {
//   e.textContent = "Texto modificado";
// });

h1.textContent = "Texto modificado";
// console.log(app);
// console.log(h1);

app.style.padding = "1rem";
app.style.backgroundColor = "orange";

const divs = app.querySelectorAll("div");

/* divs.forEach((e) => {
  e.style.backgroundColor = "white";
  e.style.borderRadius = "0.35rem";
}); */

// classList -> add remove | agrega o remueve clases a un elemto

divs.forEach((e, i) => {
  e.textContent = `Item ${i}`;
  e.classList.add("bg-white", "rounded-md", "shadow-2xl", "shadow-blue-500");
});
