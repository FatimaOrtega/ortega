import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(20);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      {count}
      <div />
      <button
        onClick={increase}
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
