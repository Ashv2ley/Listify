import React, { useState, useEffect } from "react";
import TodoDisplay from "./TodoDisplay";
import TodoInput from "./TodoInput";
import Sidebar from "./Sidebar";
import Header from "./Header";
import EditForm from "./EditForm";
import {v4 as uuidv4} from 'uuid';
import { SidebarProvider } from './sidebarContext';

const PageLayout = ({PageName}) => {

    const getInitialState = () => {
        const todo = localStorage.getItem(PageName);
        return todo ? JSON.parse(todo) : [];
    }

    const [todos, setTodos] = useState(getInitialState);
    const [allTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem("All Tasks")) || getInitialState);

    useEffect(() => {

        localStorage.setItem("All Tasks", JSON.stringify(allTasks));
        localStorage.setItem("Personal", JSON.stringify(allTasks.filter((todo) => todo.page === "Personal")))
        localStorage.setItem("Work", JSON.stringify(allTasks.filter((todo) => todo.page === "Work")))
        localStorage.setItem("Grocery List", JSON.stringify(allTasks.filter((todo) => todo.page === "Grocery List")))

    }, [todos, allTasks])

    const addTodo = (todo) =>{
        let idCode = uuidv4();
        setTodos([...todos, {id: idCode, task: todo, completed: false, isEditing: false, page: PageName}]);
        allTasks.push({id: idCode, task: todo, completed: false, isEditing: false, page: PageName});

    }

    const toggleComplete = id =>{
        setAllTasks(allTasks.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));

    }

    const deleteTodo = id => {
        setAllTasks(allTasks.filter((todo) => todo.id !== id))
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo));
        setAllTasks(allTasks.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo));
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo));
        setAllTasks(allTasks.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo));

    }


    return(
        <SidebarProvider>
        <div className="all-tasks-background">
            <Header/>
            <Sidebar/>
            <div className="page-name">{PageName}
                <div className="list-box" >
                    <TodoInput addTodo={addTodo}/>
                    {todos.map((todo, index) => (
                        todo.isEditing ? <EditForm addTodo={addTodo} editTodo={editTask} task={todo}/> :
                            <TodoDisplay task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    ))}
                </div>
            </div>
        </div>
        </SidebarProvider>
    );
}

export default PageLayout;