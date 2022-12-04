import React, { Component }  from 'react';
import '../App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';


let PRODUCTS = {
    '1': {id: 1, category: 'Electronics', price: '$999', name: 'iPhone14 pro'},
    '2': {id: 2, category: 'Electronics', price: '$1149.00', name: 'MacBook pro'},
    '3': {id: 3, category: 'Electronics', price: '$429', name: 'Apple watch series 8'},
    '4': {id: 4, category: 'Toys', price: '$699', name: 'Lego'},
    '5': {id: 5, category: 'Grocery essentials', price: '$30', name: 'Berries'},
    '6': {id: 6, category: 'Clothing', price: '$150', name: 'Jacket'}
 };
 

class Product extends Component {

    state = { products: PRODUCTS }

	constructor(props) {
		super(props);
		this.handleDestroy = this.handleDestroy.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

    handleFilter(filterInput) {
        this.setState(filterInput)
    }

    handleSave(product) {
        if (!product.id) {
             product.id = new Date().getTime()
        }
        this.setState((prevState) => {
             let products = prevState.products
             products[product.id] = product
             return { products }
        });
   }

   handleDestroy(productId) {
    this.setState((prevState) => {
         let products = prevState.products
         delete products[productId]
         return { products }
    })
}
render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-left">My Inventory</h1>
            <Filter 
                onFilter={this.handleFilter}/>

            <ProductTable 
                products={this.state.products} 
                filterText={this.state.filterText}
                onDestroy={this.handleDestroy}/>

            <ProductForm
                onSave={this.handleSave}/>
            </div>
        </div>
      </div>
    )
  } 

}

export default Product;