import { useState } from "react";
import "./App.css";
const shuffle = (arr) => {
  let currIdx = arr.length,
    randomIdx;
  while (currIdx > 0) {
    randomIdx = Math.floor(Math.random() * currIdx--);
    let temp = arr[currIdx];
    arr[currIdx] = arr[randomIdx];
    arr[randomIdx] = temp;
  }
};
function App({ data }) {
  const [info, setInfo] = useState({
    currScore: 0,
    highestScore: 0,
    lastIds: [],
  });
  const gameOver = () => {
    setInfo((prevInfo) => ({
      highestScore:
        prevInfo.currScore > prevInfo.highestScore
          ? prevInfo.currScore
          : prevInfo.highestScore,
      currScore: 0,
      lastIds: [],
    }));
    shuffle(data);
  };
  const handleClick = (id) => {
    if (info.lastIds.indexOf(id) !== -1) gameOver();
    else {
      setInfo((prevInfo) => {
        info.lastIds.push(id);
        return {
          ...prevInfo,
          currScore: prevInfo.currScore + 1,
        };
      });
      shuffle(data);
    }
  };
  return (
    <div>
      <h1>Memory Card</h1>
      <p>
        current score: {info.currScore} highest score: {info.highestScore}
      </p>
      <div id="cards">
        {data.map((el) => (
          <div
            key={el.id}
            className="card"
            onClick={() => {
              handleClick(el.id);
            }}
          >
            <img src={el.sprites.front_default} />
            <p>{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
