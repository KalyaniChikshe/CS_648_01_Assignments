import React, { Component } from 'react'

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {

    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this);
		this.state = {
			product: Object.assign({}, RESET_VALUES), errors: {}
		}
   }
   handleSave(e) {
        e.preventDefault();
        this.props.onSave(this.state.product)
        this.setState({
            product: Object.assign({}, RESET_VALUES), errors: {}
        })
    }

    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        })
    }

    render() {
        return (
          <div>
          <h2 className="text-left">Add New Product</h2>
          <div className="col-md-6">
              <form> 
                  <div className="form-group text-left">
                      <label htmlFor="name">Name</label>
                      <input className="form-control" id="name" type="text" onChange={this.handleChange} value={this.state.product.name} name="name"></input>
                  </div>
                  <div className="form-group text-left">
                      <label htmlFor="category">Category</label>
                      <input className="form-control" id="category" type="text" onChange={this.handleChange} value={this.state.product.category} name="category"></input>
                  </div>
                  <div className="form-group text-left" >
                      <label htmlFor="price">Price</label>
                      <input className="form-control" id="price" type="text" onChange={this.handleChange} value={this.state.product.price} name="price"></input>
                  </div>
                  <div className="text-left">
                  <button className="btn btn-info" type="button" onClick={this.handleSave}>Save</button>
                  </div>
              </form>
          </div>
      </div>
        )
    }
   
}

export default ProductForm;