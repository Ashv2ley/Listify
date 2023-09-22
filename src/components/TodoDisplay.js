import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const TodoDisplay = ({task, toggleComplete, deleteTodo, editTodo}) =>{
    
    
    const deleteFunc = (id) => {
        deleteTodo(id)
        
    }

    return(
        <div className="task-display">
            <p className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faCircleCheck} className="done-icon" onClick={() => toggleComplete(task.id)}/>
                <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} className='trash-icon' onClick={() => deleteFunc(task.id)} />
                
            </div>
        </div>
    );
}
export default TodoDisplay;