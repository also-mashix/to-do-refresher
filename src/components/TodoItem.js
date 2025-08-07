import React from 'react'
function TodoItem({task, deleteTask, toggleIsComplete}) {
    function handleChange() {
        toggleIsComplete(task.taskId);
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.isComplete}
                onChange={handleChange}
            />
            <p>{task.text}</p>
            <span className={task.isComplete ? 'completed' : ''}>
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.taskId)}>X</button>
        </div>
    );
}
export default TodoItem;