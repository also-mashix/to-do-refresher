import React, {useState} from "react";
import TodoItem from "./TodoItem.js";
function TodoList() {
    const [tasks, setTasks] = useState([
        {
            taskId: 1,
            text: 'build a react project',
            isComplete: true
        },
        {
            taskId: 2,
            text: 'build out a basic to do app',
            isComplete: false
        },
        {
            taskId: 3,
            text: 'integrate the to do app in a chrome extension',
            isComplete: false
        }
    ]);

    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            taskId: Date.now(),
            text,
            isComplete: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.taskId !== taskId))
    }

    function togggleIsComplete(taskId) {
        setTasks(tasks.map(task => {
            if(task.taskId === taskId) {
                return {...task, isComplete: !task.isComplete}
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                key = {task.taskId}
                task = {task}
                deleteTask = {deleteTask}
                toggleIsComplete = {togggleIsComplete}
                />
            ))}
            <input 
                className="todo-input"
                value = {text}
                onChange={e => setText(e.target.value)}
            />
            <button className='add-task' onClick={() => addTask(text)}>Add</button>
        </div>
    );
    }
export default TodoList