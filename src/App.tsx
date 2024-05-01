import React, { useState } from 'react';
import logo from './logo.svg'
import './App.css';
import { Task } from './interfaces/Task.interface';


interface Props {
  title: string
}

export function App({title}:Props) {

  const [task, setTask] = useState<Task[]>([
    {
      id:1,
      title: 'Aprender React',
      description: 'Profundizar',
      completed: false
    }
  ])

  return (
    <div className="bg-dark text-white" style={{height: '100vh'}}>
      {/* Navbar */}
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <a href="/" className='navbar-brand'>
            <img src={logo} alt='React Logo' style={{width: '4rem'}}/>
            {title}
            </a>
        </div>
      </nav>
      <main className="container p-4">
      
      </main>
    </div>
  );
}

