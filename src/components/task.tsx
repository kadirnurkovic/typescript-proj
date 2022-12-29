import React from "react";
import { InterfaceTask } from "./interfaces";

interface Props {
  task: InterfaceTask;
  completeTask(taskDelete: string): void;
}

const TDTask = ({ task, completeTask }: Props) => {
  return (
    <div>
      <div>{task.taskName}</div>
      <div>
        <button
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
