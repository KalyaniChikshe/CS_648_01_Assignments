import React, {Component} from "react";
import '../App.css';

class Filter extends Component {
    constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

    handleChange(e) {
        const value = e.target.value
        const name = e.target.name
   
        this.props.onFilter({
             [name]: value
        });
   }
   render() {
        return (
            <div className="my-3">
                <input className="form-control" type="text" placeholder="Search..." onChange={this.handleChange} />
            </div>
        )
    }
}

export default Filter;