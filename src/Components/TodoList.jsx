import React from "react";
import TodoItems from "../Components/TodoItems.jsx";
import '../CSS/TodoList.css'

function TodoList(
    {
        todos,
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
    return (
        <div className='todo-list-container'>
            <ul className='todo-list'>
                {todos.map(function(todo){
                    return (
                        <TodoItems
                            key={todo.id}
                            todo={todo}
                            onToggle={onToggle}
                            onDelete={onDelete}
                            onStartEdit={onStartEdit}
                            onSaveEdit={onSaveEdit}
                            onCancelEdit={onCancelEdit}
                            editingId={editingId}
                            editingText={editingText}
                            setEditingText={setEditingText}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoList;