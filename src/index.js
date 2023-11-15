import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./styles.css";
const array = ["Battle Grounds", "Clash of clans", "Disney World"];

function App() {
  const [arrayCopy, setArrayCopy] = useState(array);
  const [currentIndex, setCurrentIndex] = useState();

  const onItemCheck = (e, itemIndex) => {
    console.log(e, itemIndex);
    if (e) {
      setCurrentIndex(itemIndex);
    }
  };

  const onDeleteHandle = (itemIndex) => {
    // console.log(itemIndex);

    let filteredArray = [];
    filteredArray = arrayCopy.filter((item, index) => index !== itemIndex);
    setArrayCopy(filteredArray);
    setCurrentIndex("");
  };

  return (
    <>
      <div className="App">
        <ul>
          {arrayCopy.map((item, index) => {
            // console.log(index);
            return (
              <li key={index}>
                <input
                  checked={currentIndex === index}
                  type="checkbox"
                  onChange={(e) => onItemCheck(e.target.checked, index)}
                />
                {"  "} {item} {"   "}
                {currentIndex === index && (
                  <button key={index} onClick={() => onDeleteHandle(index)}>
                    Delete
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
