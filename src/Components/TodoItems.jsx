import React from "react";
import {Check} from 'lucide-react';
import TodoAction from '../Components/TodoAction';
import '../CSS/TodoItems.css';

function TodoItems(
    {
        todo,
        onToggle,
        onDelete,
        onStartEdit,
        onSaveEdit,
        onCancelEdit,
        editingId,
        editingText,
        setEditingText
    }
) {
    const isEditing = editingId === todo.id;

    const handleEditKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSaveEdit();
        } else if (e.key === 'Escape') {
            onCancelEdit();
        }
    }

    return (
        <li className='todo-tasks-container'>
            <div className='check-button'>
                <button
                    onClick={() => onToggle(todo.id)}
                    className={`todo-toggle-button ${todo.completed ? 'completed' : 'incompleted'}`}
                >
                    {todo.completed && <Check className='check-icon' />}
                </button>

                <div className='editing-section'>
                    {isEditing ? (
                        <input
                            type="text"
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            onKeyPress={handleEditKeyPress}
                            onBlur={onSaveEdit}
                            autoFocus
                            className='todo-input'
                        />
                    ) : (
                        <div>
                            <p className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                                {todo.text}
                            </p>
                            <p className='todo-date'>
                                {new Date(todo.createdAt).toLocaleDateString('vi-VN')}
                            </p>
                        </div>
                    )}
                </div>

                <TodoAction
                    isEditing={isEditing}
                    onStartEdit={() => onStartEdit(todo.id, todo.text)}
                    onSaveEdit={onSaveEdit}
                    onCancelEdit={onCancelEdit}
                    onDelete={() => onDelete(todo.id)}
                />
            </div>
        </li>
    );
}

export default TodoItems;