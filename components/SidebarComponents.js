import React, {useState} from "react"
import MyListsMenu from "./myListsMenu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faPencil} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () =>{
    const [showLists, setShowLists] = useState(false);
    return(
        <div className="sidebar">
            <a href="/" className="tasks-home-button">
            <FontAwesomeIcon icon={faHouse} className="home-icon"/>HOME
            </a>          
            <button className="my-lists" onClick={() => setShowLists(!showLists)}>
                <FontAwesomeIcon icon={faPencil} className="pencil-icon"/>MY LISTS
            </button>
            {showLists && <MyListsMenu/>}
        </div>
    );
}

export default Sidebar;