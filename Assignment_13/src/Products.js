import React, { Component } from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

// let PRODUCTS = {
//     '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
//     '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
//     '3': {id: 3, category: 'Music', price: '$3,500', name: 'Tuba'},
//     '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
//     '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
//     '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
// };

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            products: {},
            formData: null
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:3000/products/get/')
        .then(data => data.json())
        .then(data => this.setState({products:data}))
    }

    handleFilter(filterInput) {
        this.setState(filterInput)
    }

    handleSave(product) {
        if (!product.productid) {
            product.productid = new Date().getTime()
            fetch('http://localhost:3000/products/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(() => {
                this.setState((prevState) => {
                    let products = prevState.products
                    products[product.productid] = product
                    return { products }
                })
            })
            .catch(error => console.log(error))
        }
    }

    handleUpdate(productId) {
        fetch(`http://localhost:3000/products/update/${productId}`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: productId})
        })
        .then(() => {
            this.setState((prevState) => {
                let products = prevState.products
                products[productId] = productId
                return { products }
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }

    handleDestroy(productId) {
        fetch(`http://localhost:3000/products/delete/${productId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: productId})
        })
        .then(() => {
            this.setState((prevState) => {
                let products = prevState.products
                delete products[productId]
                return { products }
            });
        })
        .catch(error => console.log(error))
    }
  
    render () {
        return (
            <div>
                <h1>My Inventory</h1>
                <Filters 
                    onFilter={this.handleFilter}></Filters>
                <ProductTable 
                    products={this.state.products}
                    filterText={this.state.filterText}
                    onUpdate={this.handleUpdate}
                    onDestroy={this.handleDestroy}></ProductTable>
                <ProductForm
                     onUpdate={this.handleUpdate}
                     onSave={this.handleSave}
                     ref={this.child}></ProductForm>
            </div>
        )
    }
}

export default Products