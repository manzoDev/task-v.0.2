import React from "react";
import { Task } from "../interfaces/Task.interface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[],
  deleteATask: (id: number) => void;
}

export default function TaskList({ tasks, deleteATask }: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <div className="col-md-3 pb-2" key={task.id}>
          <TaskCard task={task} deleteATask={deleteATask}/>
        </div>
      ))}
    </div>
  );
}
