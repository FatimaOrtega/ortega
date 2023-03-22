import "./App.css";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        
        Click to Hide/Show
      </button>
      {showText && <h1>Hello</h1>}
    </div>
  );
}

export default App;
