import React,{Component} from 'react';

import './add-item.css'

export default class AddItem extends Component{

    state= {
        label : ''
    };


    updateNewtask = (e) =>{
        this.setState({
            label: e.target.value
        })
    };
    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.label!=='') {
            this.props.onUpdate(this.state.label);
            this.setState({
                label: ''
            })
        }
    };

    render() {
        return (
            <form className="top-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input type="text"
                       className="form-control search-input"
                       placeholder="Add new Task"
                       value={this.state.label}
                       onChange={this.updateNewtask}
                />
                <button className="btn btn-info">
                    Add item
                </button>

            </form>
        )
    }
}