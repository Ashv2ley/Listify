import React from "react"
import PageLayout from "./PageLayout"

const GroceryList = () => {
    const name = "Grocery List";
    return(
        <div>
            <PageLayout PageName={name}/>
        </div>
    );
}

export default GroceryList;