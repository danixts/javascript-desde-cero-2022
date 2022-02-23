import "./src/assets/css/tailwind.css";

function $(select, isDiv = true) {
  return !isDiv
    ? document.querySelector(select)
    : document.getElementById(select);
}

const app = $("app");

const title = $("title");

const isPrime = (n) => {
  if (n === 0 || n == 1) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return;
    }
  }
  return true;
};

const render = (limit) => {
  app.innerHTML = "";
  let index = 2;
  let count = 1;
  while (count <= limit) {
    if (isPrime(index)) {
      const span = document.createElement("span");
      span.textContent = `${index}`;
      if (count % 2 === 1) {
        span.setAttribute(
          "class",
          "bg-gradient-to-br w-[52px] from-blue-500 to-cyan-400 text-white p-3 rounded-md font-bold text-center hover:scale-110 transition-transform cursor-pointer"
        );
      } else {
        span.setAttribute(
          "class",
          "bg-gradient-to-br w-[52px] from-amber-300 to-orange-400 text-white p-3 rounded-md font-bold text-center hover:scale-110 transition-transform cursor-pointer"
        );
      }
      app.appendChild(span);
      count++;
    }
    index++;
  }
  // template = app.cloneNode(true);
  // return template;
};

const limit = $("limit");

const app1 = document.createElement("app");
limit.addEventListener("input", function (e) {
  e.preventDefault();
  const limitInput = limit.value;
  title.textContent = `Numeros primos : ${limitInput}`;
  render(limitInput);
});
