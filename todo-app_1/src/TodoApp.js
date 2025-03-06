import React, { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = () => {
    if (task.trim()) {
      if (editingIndex !== null) {
        // Update existing task
        const updatedTasks = tasks.map((t, index) =>
          index === editingIndex ? task : t
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        // Add new task
        setTasks([...tasks, task]);
      }
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Todo List</h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <button
            onClick={handleAddTask}
            className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {editingIndex !== null ? 'Update' : 'Add'}
          </button>
        </div>
        <ul className="mt-4">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center p-2 border-b">
              {task}
              <div>
                <button
                  onClick={() => handleEditTask(index)}
                  className="text-yellow-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
