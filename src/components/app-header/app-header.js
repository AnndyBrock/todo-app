import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done, total}) => {
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{toDo} more to do<br/>{done} done<br/>{total} total</h2>
        </div>
    );
};

export default AppHeader;