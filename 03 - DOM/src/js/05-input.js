import "./src/assets/css/tailwind.css";

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const border = document.getElementById("border");
const p = document.querySelector("p");

function renderColor(e) {
  const r = red.value;
  const g = green.value;
  const b = blue.value;
  const borderValue = border.value;
  red.nextElementSibling.textContent = `${r}`;
  green.nextElementSibling.textContent = `${g}`;
  blue.nextElementSibling.textContent = `${b}`;
  border.nextElementSibling.textContent = `${borderValue}`;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  p.textContent = `rgb(${r}, ${g}, ${b})`;
  box.style.borderWidth = `${borderValue}px`;
}

red.addEventListener("input", renderColor);
green.addEventListener("input", renderColor);
blue.addEventListener("input", renderColor);
border.addEventListener("input", renderColor);
