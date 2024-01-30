import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const getData = async (value) => {
  try {
    const res = await fetch(url + value);
    const json = await res.json();
    return json;
  } catch (err) {
    return { error: `${value} is not an id or name` };
  }
};
const data = [];
for (let i = 1; i <= 16; i++) {
  const datum = await getData(i);
  data.push(datum);
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
