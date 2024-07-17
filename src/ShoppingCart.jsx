import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      {
        id: 1,
        prodName: "iPhone",
        price: 1200,
        qty: 0,
      },
      {
        id: 2,
        prodName: "Sony Camera",
        price: 2200,
        qty: 0,
      },
      {
        id: 3,
        prodName: "Samsung TV",
        price: 4500,
        qty: 0,
      },
      {
        id: 4,
        prodName: "Xbox 360",
        price: 200,
        qty: 0,
      },
      {
        id: 5,
        prodName: "Acer Moniter",
        price: 500,
        qty: 0,
      },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                prod={prod}
                onInc={this.handleIncrement}
                onDec={this.handleDecrement}
                onDel={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  handleIncrement = (prod) => {
    //... gets all elems from products
    let allProds = [...this.state.products];
    let idx = allProds.indexOf(prod);
    if (allProds[idx].qty < 10) allProds[idx].qty++;
    this.setState({ products: allProds });
  };

  handleDecrement = (prod) => {
    //... gets all elems from array
    let allProds = [...this.state.products];
    let idx = allProds.indexOf(prod);
    if (allProds[idx].qty > 0) allProds[idx].qty--;
    this.setState({ products: allProds });
  };

  handleDelete = (prod) => {
    //... gets all elems from array
    let allProds = [...this.state.products];
    let idx = allProds.indexOf(prod);
    if (
      window.confirm(
        `Are you sure you want to delete ${allProds[idx].prodName}?`
      )
    ) {
      allProds.splice(idx, 1);
      this.setState({ products: allProds });
    }
  };
}
