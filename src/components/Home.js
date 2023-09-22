import React from  'react'
import { Link } from 'react-router-dom'

let allTasks = JSON.parse(localStorage.getItem("All Tasks")) || [];
let personalTasks = JSON.parse(localStorage.getItem("Personal")) || [];
let workTasks = JSON.parse(localStorage.getItem("Work")) || [];
let groceryTasks = JSON.parse(localStorage.getItem("Grocery List")) || [];

const Home = () => {
    return(
        <div>
            <h1 className='title'>Listify!</h1>
            <div className="base">
                <div className='base-title'>My Lists</div>
                
                <p><Link to="/tasks" className="tasks">All Tasks
                    <div className="all-items">{allTasks.length}</div>
                </Link></p>

                <p><Link to="/personal" className="personal">Personal
                    <div className="personal-items">{personalTasks.length}</div>
                </Link></p>
            
                <p><Link to="/work" className="work">Work
                    <div className="work-items">{workTasks.length}</div>
                </Link></p>
            
                <p><Link to="/grocery-list" className="grocery-list">Grocery List
                    <div className="grocery-items">{groceryTasks.length}</div>
                </Link></p>
            
            </div>
        </div>
        
    );
};

export default Home;