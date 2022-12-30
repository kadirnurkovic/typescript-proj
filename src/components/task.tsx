import React from "react";
import { InterfaceTask } from "./interfaces";
import "./task.css";

interface Props {
  task: InterfaceTask;
  completeTask(taskDelete: string): void;
}

const TDTask = ({ task, completeTask }: Props) => {
  return (
    <div className="taskClass">
      <div>{task.taskName}</div>
      <div>
        <button
          className="btn"
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          Task completed
        </button>
      </div>
    </div>
  );
};

export default TDTask;
