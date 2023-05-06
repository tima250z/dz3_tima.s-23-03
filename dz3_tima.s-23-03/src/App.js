// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Input from './components/input';


const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodoText) => {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
      <div>
        <h1>Todo List</h1>
        <Input
            name="newTodo"
            placeholder="Add new todo"
            onChange={handleAddTodo}
        />
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      </div>
  );
};

export default App;