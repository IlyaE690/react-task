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

  // TODO: реализовать компонент TodoForm для добавления новой задачи.
  //
  // Подсказки:
  // 1. Создайте новый компонент в src/components/TodoForm/TodoForm.tsx
  // 2. Внутри компонента понадобится:
  //    - поле ввода <input /> для текста новой задачи
  //    - локальное состояние через useState для хранения введённого текста
  //    - кнопка "Добавить задачу", по клику на которую вызывается колбэк из props
  // 3. Опишите тип пропсов, например:
  //      type TodoFormProps = { onAdd: (todoItem: TodoItemType) => void }
  // 4. В App.tsx:
  //    - импортируйте TodoForm
  //    - напишите функцию handleAddTodo, которая через setTodos добавит новую задачу в список
  //      (не забудьте сгенерировать уникальный id — например, через Date.now() или crypto.randomUUID())
  //    - добавьте <TodoForm onAdd={handleAddTodo} /> над списком задач
  // 5. Подумайте про крайние случаи: пустая строка, пробелы, очистка инпута после добавления.


  const handleAddTodo = (newTodo: TodoItemType) => {
    setTodos([...todos, newTodo]);
  }

  return (
      <div className="todo-list">
        <TodoForm onAdd={handleAddTodo} />
        {todos.map((value) => (
            <TodoItem id={value.id} key={value.id} label={value.label} done={value.isChecked} onChange={handleTaskCheckedChange} />
        ))}
      </div>
  )
}

export default App
