import React from "react";
import './TodoApp.css'

import Header from './Components/Header';
import AddTask from "./Components/AddTask";
import Footer from "./Components/Footer";

import {useTodo} from './Hooks/useTodo.js';

function TodoApp() {
    const {
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
    } = useTodo();

    return (
        <div className='container'>
            <Header />
            <AddTask onAddTodo={addTodo} />
            <Footer />
        </div>
    );
}

export default TodoApp;
