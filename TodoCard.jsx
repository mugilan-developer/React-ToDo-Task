import React from "react";
import './TodoCard.css';

const TodoCard = ({ todo, deleteTodo, editTodo, changeStatus }) => {
  const handleStatusChange = (e) => {
    changeStatus(todo.id, e.target.value);
  };

  return (
    <div className="todo-card">
      <div className="todo-header">
        <h3>{todo.name}</h3>
        <div className="actions">
          <button onClick={() => editTodo(todo)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      </div>
      <p>{todo.description}</p>
      <select value={todo.status} onChange={handleStatusChange}>
        <option value="not completed">Not Completed</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default TodoCard;
