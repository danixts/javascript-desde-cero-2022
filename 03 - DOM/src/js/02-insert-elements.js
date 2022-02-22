const app = document.getElementById("app");
const p = document.querySelector("p");
const span = document.querySelector("span");
// crear etiquetas html
const h1 = document.createElement("h1");
h1.textContent = "Soy un h1 desde javascript";
h1.classList.add("text-center", "font-bold", "text-4xl");

// app.appendChild(h1);

// app.insertBefore(h1, p);

// app.insertAdjacentElement("afterend", h1);
// app.insertAdjacentElement("beforebegin", h1);

// app.insertAdjacentElement("afterbegin", h1);
// app.insertAdjacentElement("beforeend", h1);

app.insertAdjacentHTML(
  "afterbegin",
  /* html */ `<span>Soy un span desde insert</span>`
);

app.insertAdjacentText("beforeend", "BERORE END INSERT");

// remover elemtos del dom

// app.remove();
// app.removeChild(p);
// app.replaceChild(span, p);

const img = document.createElement("img");
img.src = "https://vitejs.dev/logo.svg";

// app.appendChild(img);

// const app2 = app; no se puede realizar

// const app2 = app.cloneNode(true);

// app.appendChild(app2);
// app2.appendChild(img);
// document.body.appendChild(app2);
// document.body.appendChild(app2);

const box = document.getElementById("box");
const boxDivsOne = box.querySelector("div.bg-primary-300");
const boxDivsAll = box.querySelectorAll("div.bg-primary-300");
const flexBox = box.querySelector(".flex");

const attr = boxDivsOne.hasAttributes();
const nameAttrs = boxDivsOne.getAttributeNames();
console.log(attr);
console.log("name attr", nameAttrs);

const classAttr = boxDivsOne.getAttribute("class");
console.log(classAttr.split(" "));

// agregar atributos a un elemento
box.setAttribute("data-id", 35);

// remover atributos
flexBox.removeAttribute("class");
