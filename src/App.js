import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😉": "Winking Face",
  "🤩": "Star Struck",
  "😐": "Neutral Face",
  "😏": "Smirking Face",
  "😑": "Expressionless Face",
  "😒": "Unamused Face",
  "🤔": "Thinking Face",
  "😭": "Crying Face",
  "😩": "Weary Face",
  "👿": "Angry Face",
  "🤙": "Call Me"
};

var emojistodisplay = Object.keys(emojiDictionary);
// console.log(emojistodisplay);
export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "User Input does not exist in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(item) {
    var click = emojiDictionary[item];
    setMeaning(click);
  }
  return (
    <div className="App">
      <h1>
        <span style={{ color: "orange" }}>emoji</span>
        <span style={{ color: "green" }}> dictionary</span>
      </h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      {/* <h3>emojis to display</h3> */}
      {emojistodisplay.map(function (item) {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
          >
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
