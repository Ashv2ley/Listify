import React, {useState} from "react"

const EditForm = ({editTodo, task}) =>{

    const [input, setInput] = useState(task.task);
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(input, task.id);
        setInput("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="">
                <input type="text" className="edit-display"
                placeholder="Edit Task" value={input} onChange={(e) => setInput(e.target.value)}></input>
                
            </div>
        </form>
    );
}

export default EditForm;