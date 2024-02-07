import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [showLists, setShowLists] = useState(false);

    const toggleSidebar = () => {
        setShowLists((prevShowLists) => !prevShowLists);
    };

    return (
        <SidebarContext.Provider value={{ showLists, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    return useContext(SidebarContext);
};
