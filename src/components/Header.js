import React from 'react'
import MyListsMenu from "./MyListMenu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { useSidebar } from './sidebarContext';

const Header = () => {
    const {showLists, toggleSidebar} = useSidebar();
    const handleSidebar = () => {
        toggleSidebar();
        // console.log(showLists);
    };
    return(

        <div className="header">
                <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={handleSidebar}/>
            <div className={"header-title"}>Listify!</div>
            {showLists && (
                <MyListsMenu/>
            )}
        </div>
    );
}

export default Header;