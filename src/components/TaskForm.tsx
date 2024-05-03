import React, { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task.interface";

interface Props {
  newANewTask: (task: Task) => void 
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function TaskForm({newANewTask}: Props) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newANewTask(task)
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>

      <form onSubmit={handleNewTask}>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Write a title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
        ></textarea>

        <button className="btn btn-primary ">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
