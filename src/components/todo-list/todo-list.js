import React from "react";
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const TodoList = ({itemList, onDelete, onImportant, onDone}) => {
    const item = itemList.map((item)=>{
        const {id,...itemProps}= item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    onDone={()=>onDone(id)}
                    onImportant={()=>onImportant(id)}
                    onDeleted = {()=>onDelete(id)}
                    {...itemProps}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {item}
        </ul>
    )
};

export default TodoList;