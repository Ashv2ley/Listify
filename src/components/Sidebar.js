import React from "react"
import { useSidebar } from './sidebarContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faPencil} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () =>{
    const { toggleSidebar } = useSidebar();
    const handleSidebar = () => {
        toggleSidebar();
    };

    return(
        <div className="sidebar">
            <a href="/" className="tasks-home-button">
                <FontAwesomeIcon icon={faHouse} className="home-icon"/>HOME
            </a>
            <button className="my-lists" onClick={handleSidebar}>
                <FontAwesomeIcon icon={faPencil} className="pencil-icon"/>MY LISTS
            </button>
        </div>
    );
}

export default Sidebar;