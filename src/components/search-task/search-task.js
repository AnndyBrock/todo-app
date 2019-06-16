import React from "react";
import './search-task.css';


const SearchTask = () =>{
    return (
        <input type="text"
               className="form-control search-input"
               placeholder="Type to search" />
    );
};
export default SearchTask;