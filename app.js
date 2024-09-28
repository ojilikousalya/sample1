import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // Handle adding a new task
  const addTask = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { text: task, isCompleted: false }]);
    setTask('');
  };

  // Handle marking a task as completed
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  // Handle deleting a task
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Input and Add Button */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Display the list of tasks */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            {todo.text}
            <button onClick={() => toggleComplete(index)}>
              {todo.isCompleted ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
