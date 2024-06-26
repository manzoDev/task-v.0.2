import React from "react";
import { Task } from "../interfaces/Task.interface";

interface Props {
  task: Task;
  deleteATask: (id:number) => void;
}

export default function TaskCard({ task, deleteATask }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <a>{task.id}</a>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button className="btn btn-danger" onClick={() => task.id && deleteATask(task.id)}>
        delete
      </button>
    </div>
  );
}
