import "./src/assets/css/tailwind.css";

const fragment = document.createDocumentFragment();

const app = document.getElementById("app");

const tmpTitle = document.getElementById("tmp-title").content;
const tmpList = document.getElementById("tmp-li").content;

const contentTemplate = tmpTitle.cloneNode(true);

fragment.appendChild(contentTemplate); // 1

app.appendChild(fragment); // 0

Array(20)
  .fill(0)
  .forEach((e, i) => {
    const p = tmpList.querySelector("p");
    p.textContent = `Item ${i + 1}`;
    const cloneTemplate = tmpList.cloneNode(true);
    fragment.appendChild(cloneTemplate); // 1
  });

const ul = app.querySelector("ul");
ul.appendChild(fragment); // 0
