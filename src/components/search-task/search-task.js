import React, {Component} from "react";
import './search-task.css';


export default class SearchTask extends Component{

    state = {
        term:""
    };
    onSerchChange = (e) =>{
        const term = e.target.value;
        this.setState({term});
        this.props.onSerchChange(term);

    };

    render() { return (
        <input type="text"
               className="form-control search-input"
               placeholder="Type to search"
               value={this.state.term}
               onChange={this.onSerchChange}
        />
    );}
};
