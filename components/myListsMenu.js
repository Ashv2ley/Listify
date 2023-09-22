import React from "react";
import "./styles.css"


const MyListsMenu = () => {
    return(
        <div className="flex flex-col myListsMenu">
            <ul className="flex flex-col gap-4">
                <li><a href="/tasks" className="list-links">All Tasks</a></li>
                <li><a href="/personal" className="list-links">Personal</a></li>
                <li><a href="/work" className="list-links">Work</a></li>
                <li><a href="/grocery-list" className="list-links">Grocery List</a></li>
            </ul>
        </div>
    );
}

export default MyListsMenu