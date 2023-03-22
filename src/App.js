import "./App.css";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          alert("Hey");
        }}
      >
        {" "}
        Click to Alert{" "}
      </button>
      {showText && <h1>Hello</h1>}
    </div>
  );
}

export default App;
