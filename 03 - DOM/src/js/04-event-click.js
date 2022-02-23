const btnDecrement = document.getElementById("btnDecrement");
const btnIncrement = document.getElementById("btnIncrement");

const textValue = document.querySelector("p");
const box = document.getElementById("box");
const btnToggle = document.getElementById("btnToggle");

let count = 1;

// btnIncrement.addEventListener("click", function (e) {
// console.log("DESDE INCREMENT");
// textValue.textContent = `${count++}`;
// this.textContent = `${count++}`;
// });

function decrementValue(e) {
  console.log("DECREMENT");
  textValue.textContent = `${count > 0 ? count-- : "0"}`;
}

function incrementValue(e) {
  console.log("DECREMENT");
  textValue.textContent = `${count++}`;
}

btnDecrement.addEventListener("click", decrementValue);

btnIncrement.onclick = incrementValue;

let isToggle = true;

btnToggle.addEventListener("click", function (e) {
  isToggle = !isToggle;
  box.classList.remove(isToggle ? "bg-white" : "bg-gray-700");
  box.classList.add(isToggle ? "bg-gray-700" : "bg-white");
});
