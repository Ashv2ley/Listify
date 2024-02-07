import React from "react";
import { useSidebar } from './sidebarContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const MyListsMenu = () => {
    const { toggleSidebar } = useSidebar();
    const handleSidebar = () => {
        toggleSidebar();
    };
    return(
            <div className={`flex flex-col myListsMenu`}>
                <FontAwesomeIcon icon={faX} className={"x-icon"} onClick={handleSidebar}/>
                <ul className="flex flex-col gap-4">
                    <li><a href="/" className="list-links">Home</a></li>
                    <li><a href="/tasks" className="list-links">All Tasks</a></li>
                    <li><a href="/personal" className="list-links">Personal</a></li>
                    <li><a href="/work" className="list-links">Work</a></li>
                    <li><a href="/grocery-list" className="list-links">Grocery List</a></li>
                </ul>
            </div>
    );
}

export default MyListsMenu