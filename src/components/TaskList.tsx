import React from "react";
import { Task } from "../interfaces/Task.interface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <div className="col-md-3">
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}
