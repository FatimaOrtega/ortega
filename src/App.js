import "./App.css";
import { useState } from "react";
import { Planet } from "./Planet.js";

function App() {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
   
    setAge(age + 1);
  };

  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase the age</button>
      <Planet name="Jupiter" age={22} />
    </div>
  );
}

export default App;
