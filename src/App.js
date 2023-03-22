import "./App.css";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("blue");
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Click to Hide/Show
      </button>

      <button
        onClick={() => {
          setTextColor(textColor === "blue" ? "red": "blue" );
        }}
      >
        Change color
      </button>
      {showText && <h1 style={{color: textColor}}>Hello</h1>}
    </div>
  );
}

export default App;
