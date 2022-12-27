import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import {InterfaceTask} from "./components/interfaces"

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<InterfaceTask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
       setTask(event.target.value)
    }
  }

  const addTask = (): void => {
      const newTask = { taskName: task };
      setTodo([...todo, newTask]);
      console.log(todo);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." name="task" onChange={handleChange}/>
          <button className="buttonForAddingTask" onClick={addTask}>Add task</button>
        </div>
        <div className="todo"></div>
      </div>
    </div>
  );
};

export default App;
