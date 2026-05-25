import './TodoItem.css';

type TodoItemProps = {
    id: number;
    label: string;
    done: boolean;
    onChange: (id: number) => void;
    onDelete: (id: number) => void;
}

export function TodoItem(props: TodoItemProps) {
    const { id, label, done, onChange, onDelete } = props;

    function handleChange() {
        onChange(id);
    }

    function handleDelete() {
        if (confirm('Удалить задачу?')) {
            onDelete(id);
        }
    }

    return (
        <div className={`todo-item ${done ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={done}
                onChange={handleChange}
                className="todo-checkbox"
            />
            <span className="todo-label">{label}</span>
            <button onClick={handleDelete} className="delete-button" title="Удалить">
                ✕
            </button>
        </div>
    )
}