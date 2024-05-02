import React from "react";
import { Task } from "../interfaces/Task.interface";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button className="btn btn-danger">
        delete
      </button>
    </div>
  );
}
