import React from 'react'
function TodoItem({task, deleteTask, toggleIsComplete}) {
    function handleChange() {
        React.log('Checkbox toggled for task:', task.taskId);
        toggleIsComplete(task.taskId);
    }

    return (
        <div className={task.isComplete ? 'todo-item complete' : 'todo-item'}>
            <input className='toggle-checkbox'
                type="checkbox"
                checked={task.isComplete}
                onChange={handleChange}
            />
            <p className='task-text'>{task.text}</p>
            <button className='delete-task' onClick={() => deleteTask(task.taskId)}>X</button>
        </div>
    );
}
export default TodoItem;