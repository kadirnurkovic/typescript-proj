import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import {InterfaceTask} from "./components/interfaces"
import Task from "./components/task"

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
      setTask("");
      console.log(task)
      console.log(todo);
  }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
          <button className="buttonForAddingTask" onClick={addTask}>Add task</button>
        </div>
        <div className="todo">
            {todo.map((task: InterfaceTask, key: number) => (
              <Task key={key} task={task}/> 
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
