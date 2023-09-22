import React, {useState} from "react"
const TodoInput = ({addTodo}) =>{

    const [input, setInput] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        if (input){
            addTodo(input);
            
        }
        setInput("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input type="text" className="todo-input" 
                placeholder="Add a task" value={input} onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit" className="todo-button">↑</button>
            </div>
        </form>
    );
}

export default TodoInput;