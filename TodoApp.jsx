import React, { useState } from 'react';
import './TodoApp.css';
const TodoApp = () => {
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');

  const addTodo = () => {
    if (todoName && todoDescription) {
      const newTodo = {
        id: todos.length + 1,
        name: todoName,
        description: todoDescription,
        status: 'Not Completed',
      };
      setTodos([...todos, newTodo]);
      setTodoName('');
      setTodoDescription('');
    }
  };

  const updateStatus = (id, status) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (statusFilter === 'All') return true;
    return todo.status === statusFilter;
  });

  return (
    <div className="todo-app">
      <h1>My ToDo</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Todo Name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Todo Description"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className="status-filter">
        <label>Status Filter: </label>
        <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>

      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h3>{todo.name}</h3>
            <p>{todo.description}</p>
            <div className="todo-status">
              <label>Status: </label>
              <select
                value={todo.status}
                onChange={(e) => updateStatus(todo.id, e.target.value)}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="todo-actions">
              <button onClick={() => alert('Edit Todo not implemented')}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
