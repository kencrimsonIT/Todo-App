import {useState, useEffect} from 'react';

export function useTodo() {
    const [todos, setTodos] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        const tasks = [
            {
                id: 1,
                text: 'Go to the gym for 2 hours',
                completed: true,
                createdAt: new Date().toISOString()
            }
        ];
        setTodos(tasks);
    }, []);

    function addTodo(text) {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        setTodos(function(prev) {
            return [...prev, newTodo];
        });
    }

    function deleteTodo(id) {
        setTodos(function(prev) {
            return prev.filter(function(todo) {
                return todo.id !== id;
            });
        });
    }

    function toggleTodo(id) {
        setTodos(function(prev) {
            return prev.map(function(todo) {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        });
    }

    function startEditing(id, text) {
        setEditingId(id);
        setEditingText(text);
    }

    function saveEdit() {
        if (editingText.trim() !== '') {
            setTodos(function(prev) {
                return prev.map(function(todo) {
                    if (todo.id === editingId) {
                        return { ...todo, text: editingText.trim() };
                    }
                    return todo;
                });
            });
        }
        setEditingId(null);
        setEditingText('');
    }

    function cancelEdit() {
        setEditingId(null);
        setEditingText('');
    }

    return {
        todos,
        editingId,
        editingText,
        setEditingText,
        addTodo,
        deleteTodo,
        toggleTodo,
        startEditing,
        saveEdit,
        cancelEdit
    };
}