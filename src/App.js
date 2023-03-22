import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {count}
      <div />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <div />
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <div />
      <button onClick={() => {
        setCount(0);
      }}>Set to 0</button>
    </div>
  );
}

export default App;
