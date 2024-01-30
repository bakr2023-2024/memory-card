import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const getPokemon = async (value) => {
  try {
    const res = await fetch(url + value);
    const json = await res.json();
    return json;
  } catch (err) {
    return { error: `${value} is not an id or name` };
  }
};
const setData = async () => {
  const data = [];
  for (let i = 1; i <= 16; i++) {
    const datum = await getPokemon(i);
    data.push(datum);
  }
  return data;
};
setData().then((data) => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>
  );
});
