import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Task } from "./interfaces/Task.interface";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  title?: string;
}

export function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Aprender React",
      description: "Profundizar",
      completed: false,
    },
  ]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const newAddTask = (task: Task) =>
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false },
    ]);

  const deleteATask = (id:number) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm newANewTask={newAddTask} />
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
