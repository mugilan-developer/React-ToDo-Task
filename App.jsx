import React, { useState } from "react";
import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
import Filter from "./components/Filter";
import TodoApp from "./components/TodoApp";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), status: "not completed" }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...updatedTodo } : todo
      )
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  const changeStatus = (id, status) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "completed") return todo.status === "completed";
    if (filterStatus === "not completed") return todo.status === "not completed";
    return true;
  });

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoForm
        addTodo={addTodo}
        isEditing={isEditing}
        currentTodo={currentTodo}
        updateTodo={updateTodo}
      />
      <Filter setFilterStatus={setFilterStatus} />
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            changeStatus={changeStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
