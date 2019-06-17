import React, {Component} from 'react';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchTask from '../search-task/search-task';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItem from '../add-item/add-item';
import './app.css';

export default class App extends Component{
    constructor() {
        super();
        this.state = {
            term:'',
            filter:'all',
            itemList: [
                {label: 'Coffee',done:false, important: false, id: 1},
                {label: 'Tea',done:false, important: false, id: 2},
                {label: 'React',done:false, important: false, id: 3}
            ]
        }
    };
    onUpdate = (text) =>{
        const len= this.state.itemList.length;
        let newId = 1;
        if(this.state.itemList.length!==0){
            newId = this.state.itemList[len-1].id+1
        }
          const item = {
              label:text,
              important:false,
              id:newId
          };

          this.setState(({itemList})=>{
              const newItem = [...itemList, item];
              return {itemList:newItem};
          });
    };
    onDelete = (id)=>{
        this.setState(({itemList})=>{
            const idx = itemList.findIndex((el) => el.id===id);
            const bfr = itemList.slice(0, idx);
            const aft = itemList.slice(idx+1);
            const newArr = [...bfr, ...aft];
            return {itemList:newArr}
        });
    };
    onTogleChange (arr, id, propName){
            const idx = arr.findIndex((el) => el.id===id);
            const oldtask = arr[idx];
            const newtask = {...oldtask,[propName]:!oldtask[propName]};
            return [...arr.slice(0, idx),newtask, ...arr.slice(idx+1)];
    };
    onDone = (id)=>{
        this.setState(({itemList})=>{
            return {
                itemList:this.onTogleChange(itemList, id, 'done')
            }
        })
    };
    onImportant = (id)=>{
        this.setState(({itemList})=>{
            return {
                itemList:this.onTogleChange(itemList, id, 'important')
            }
        })
    };
    filte(items, filter){
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((items) => !items.done);
            case 'done':
                return items.filter((items) => items.done);
            default:
                return items;
        }
    }

    search (items, term) {
        if(term.length===0){
            return items;
        }
        return items.filter((items)=>{
            return items.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onSerchChange = (term) =>{
        this.setState({term})
    };
    onFilterChange = (filter) =>{
        this.setState({filter})
    };
    render() {

        const countDone = this.state.itemList.filter((el)=>el.done).length;
        const countTodo = this.state.itemList.length - countDone;
        const countTotal = this.state.itemList.length;

        const {itemList, term, filter} = this.state;
        const visible = this.filte(this.search(itemList, term),filter);
        return(
            <div className="todo-app">
                <AppHeader total={countTotal} toDo={countTodo} done={countDone} />
                <div className="top-panel d-flex">
                    <SearchTask onSerchChange={this.onSerchChange}/>
                    <ItemStatusFilter onFilterChange={this.onFilterChange} filter={filter}/>
                </div>
                <TodoList
                    onDone={this.onDone}
                    onImportant={this.onImportant}
                    onDelete={this.onDelete}
                    itemList={visible}/>
                   <AddItem onUpdate={this.onUpdate}/>
            </div>
        )
    }

};