import "./App.css";
import { useState } from "react";

function App() {
  // creating a variable that will make a list of tasks
  const [toDoList, setToDoList] = useState([]); //Creating an empty array
  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
  };

  const addTask = () => {
    //We can create a new variable or just add the code in setToDoList function
    // const newTodoList = [...toDoList, newTask];
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (taskName) => {
    const newTodoList = toDoList.filter((task) => task !== taskName);


    setToDoList(newTodoList);
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        {toDoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>Delete Task</button>
            </div>

          );
        })}
      </div>
    </div>
  );
}

export default App;
