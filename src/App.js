import "./App.css";
import { useState } from "react";
import { Planet } from "./Planet.js";

function App() {
  const [age, setAge] = useState(0);
  const [word, setWord] = useState("");

  const increaseAge = () => {
    setAge(age + 1);
  };

  const displayInputValue = (event) => {
    setWord(event.target.value);
  };

  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase the age</button>
      <div />
      <input type="text" onChange={displayInputValue} />
      {word}
      <Planet name="Jupiter" age={22} />
    </div>
  );
}

export default App;
