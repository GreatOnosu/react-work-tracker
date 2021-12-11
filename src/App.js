import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 50,
      eyeColor: 'blue',
      reminder: true,
    },
    {
      id: 2,
      firstName: 'Peter',
      lastName: 'Dave',
      age: 30,
      eyeColor: 'blue',
      reminder: true,
    },
    {
      id: 3,
      firstName: 'James',
      lastName: 'Doe',
      age: 50,
      eyeColor: 'red',
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) 
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
};

export default App;
