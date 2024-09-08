import React, { useState, useEffect } from "react";
import './TodoForm.css';

const TodoForm = ({ addTodo, isEditing, currentTodo, updateTodo }) => {
  const [todo, setTodo] = useState({ name: "", description: "" });

  useEffect(() => {
    if (isEditing) {
      setTodo(currentTodo);
    } else {
      setTodo({ name: "", description: "" });
    }
  }, [isEditing, currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateTodo({ ...todo });
    } else {
      addTodo({ ...todo });
    }
    setTodo({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Task Name"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Task Description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        required
      />
      <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TodoForm;
