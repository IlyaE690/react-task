import { useState } from 'react';
import type { TodoItemType } from '../../shared/types';
import './TodoForm.css';

type TodoFormProps = {
    onAdd: (todoItem: TodoItemType) => void
}

export function TodoForm({ onAdd }: TodoFormProps) {
    const [text, setText] = useState('');

    const handleAdd = () => {
        const trimmedText = text.trim();

        if (trimmedText === '') {
            alert('Пожалуйста, введите текст задачи');
            return;
        }

        const newTodo: TodoItemType = {
            id: Date.now(),
            label: trimmedText,
            isChecked: false
        };

        onAdd(newTodo);
        setText('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <div className="todo-form-container">
            <div className="todo-form">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Введи задачу"
                    className="todo-input"
                />
                <button onClick={handleAdd} className="add-button">
                    Добавить задачу
                </button>
            </div>
        </div>
    );
}