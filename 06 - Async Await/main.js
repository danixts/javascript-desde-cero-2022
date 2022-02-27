import "./src/assets/css/tailwind.css";

import Data from "./src/js/data";
import axios from "axios";

console.log(Data);

const BASE_URL = "https://rickandmortyapi.com";
const URL = "/api/character";

const ENPOINT = `${BASE_URL}${URL}`;

console.log(ENPOINT);

// const getData = async () => {
//   try {
//     const data = await fetch(ENPOINT);
//     return await data.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

const getData = async () => {
  try {
    const res = await axios.get(ENPOINT, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.headers);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const app = document.getElementById("app");

async function render() {
  try {
    const { results } = await getData();
    const mapResult = results.map(({ id, name, image, species }) => ({
      id,
      name,
      image,
      species,
    }));

    let template = "";
    console.log(mapResult);
    mapResult.forEach((per) => {
      const templateTmp = /* html */ `
        <div class="flex flex-row bg-gray-800 rounded-md">
        <img class="w-[120px] h-[120px] rounded-md" src="${per.image}"/>
        <div class="p-4">
          <div class="text-white">${per.name}</div>
          <div class="text-gray-500 text-sm">${per.species}</div>
        </div>
        </div>
      `;
      template += templateTmp;
    });

    app.innerHTML = template;
  } catch (err) {
    console.log(err);
  }
}

render();
