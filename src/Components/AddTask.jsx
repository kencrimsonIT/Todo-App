import React, {useState} from 'react';
import {Plus} from "lucide-react";
import '../CSS/AddTask.css'

function AddTask({onAddTodo}) {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if (input.trim() !== '') {
            onAddTodo(input.trim());
            setInput('');
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className='add-task-wrapper'>
            <div className='task-input-row'>
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='Add your task'
                    className='task-input-field'
                />
                <button onClick={handleSubmit} className='add-btn'>
                    <Plus className='icon'/>
                    <span className='btn-text'>Add</span>
                </button>
            </div>
        </div>
    );
}

export default AddTask;