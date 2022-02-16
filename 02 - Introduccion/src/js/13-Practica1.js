import "./src/css/tailwind.css";

// Resolucion ejercio arbol

/* 
  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
*/

const longitud = document.getElementById("longitud");
const copy = document.getElementById("copy");
const result = document.getElementById("result");

// let longitud = 10;

const repeat = (type, limit) => {
  let result = "";
  for (let i = 1; i <= limit; i++) {
    result += type;
  }
  return result;
};

function render(h) {
  let tree = "";
  let count = 1;
  for (let i = 1; i <= h; i++) {
    const spaces = repeat("_", h - i);
    const starts = repeat("*", count);
    count += 2;
    tree += `${spaces}${starts}${spaces}\n`;
  }
  for (let i = 1; i <= 2; i++) {
    const spaces = repeat("_", h - 1);
    tree += `${spaces}#${spaces}\n`;
  }
  return tree;
}

longitud.addEventListener("input", function (e) {
  e.preventDefault();
  const h = e.target.value;
  if (h >= 1 && h <= 20) {
    result.textContent = render(h);
  } else {
    alert("Valor no permitido rango [1-20]");
  }
});

copy.addEventListener("click", function (e) {
  e.preventDefault();
  const text = result.textContent;
  if (text !== "") {
    navigator.clipboard.writeText(text);
    alert("Texto copiado");
  }
});
