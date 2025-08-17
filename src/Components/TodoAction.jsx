import React from "react";
import {Check, X, Edit2, Trash2} from "lucide-react";
import '../CSS/TodoAction.css'

function TodoAction(
    {
        isEditing,
        onStartEdit,
        onSaveEdit,
        onCancelEdit,
        onDelete
    }
) {
    if (isEditing) {
        return (
            <div className='todo-actions-container'>
                <button onClick={onSaveEdit} className='save-btn'>
                    <Check className='icon' />
                </button>
                <button onClick={onCancelEdit} className='cancel-btn'>
                    <X className='icon' />
                </button>
            </div>
        );
    }

    return (
        <div className='todo-actions-container'>
            <button onClick={onStartEdit} className='edit-btn'>
                <Edit2 className='icon' />
            </button>
            <button onClick={onDelete} className='delete-btn'>
                <Trash2 className='icon' />
            </button>
        </div>
    );
}

export default TodoAction;