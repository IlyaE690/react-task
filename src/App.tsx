import { TodoItem } from './components/TodoItem/TodoItem.tsx';
import './App.css'
import type { TodoItemType } from "./shared/types.ts";
import { useState } from "react";
import { TodoForm } from './components/TodoForm/TodoForm.tsx';

const mockTodos: TodoItemType[] = [{
  id: 1,
  label: 'Сдать чекпоинт по проектно-технологической практике СРОЧНО !!!',
  isChecked: false
}, {
  id: 2,
  label: 'Сдать семестровку Кириллу!',
  isChecked: false
}, {
  id: 3,
  label: 'Купить хлеб и сосиски :)',
  isChecked: true
}]

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(mockTodos);

  const handleTaskCheckedChange = (id: number) => {
    setTodos((prevState) => {
      return prevState.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            isChecked: !value.isChecked
          }
        }
        return value;
      })
    });
  }

  const handleAddTodo = (newTodo: TodoItemType) => {
    setTodos([...todos, newTodo]);
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const completedCount = todos.filter(t => t.isChecked).length;

  return (
    <div className="app-wrapper">
      <div className="app-header">
        <div className="logo-block">
          <img
            src="https://img.icons8.com/fluency/48/todo-list.png"
            alt="Todo logo"
            className="logo"
          />
          <h1>Todo List</h1>
        </div>
        <p className="subtitle">Организуй свои задачи</p>
      </div>

      <div className="stats-bar">
        <div className="stat">Всего: {todos.length}</div>
        <div className="stat">Выполнено: {completedCount}</div>
        <div className="stat">Осталось: {todos.length - completedCount}</div>
      </div>

      <TodoForm onAdd={handleAddTodo} />

      <div className="todo-list-container">
        <h2>Мои задачи</h2>
        {todos.length === 0 ? (
          <div className="empty-state">
            <img src="https://img.icons8.com/ios/100/empty-box.png" alt="empty" />
            <p>Нет задач. Добавьте первую!</p>
          </div>
        ) : (
          <div className="todo-list">
            {todos.map((value) => (
              <TodoItem
                id={value.id}
                key={value.id}
                label={value.label}
                done={value.isChecked}
                onChange={handleTaskCheckedChange}
                onDelete={handleDeleteTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App