import React from 'react'
import { Task } from '../interfaces/Task.interface'

interface Props {
  tasks: Task[]
}

export default function TaskList() {
  return (
    <div></div>
    /*{
      task.map(tasks => (
        <div>
        <h2 key={tasks.id}>{tasks.title}</h2>
        </div>
      ))
    }*/
  )
}
