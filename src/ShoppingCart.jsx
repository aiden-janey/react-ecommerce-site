import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      {
        id: 1,
        prodName: "iPhone",
        price: 1200,
        qty: 23,
      },
      {
        id: 2,
        prodName: "Sony Camera",
        price: 2200,
        qty: 12,
      },
      {
        id: 3,
        prodName: "Samsung TV",
        price: 4500,
        qty: 2,
      },
      {
        id: 4,
        prodName: "Xbox 360",
        price: 200,
        qty: 3,
      },
      {
        id: 5,
        prodName: "Acer Moniter",
        price: 500,
        qty: 30,
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
                id={prod.id}
                prodName={prod.prodName}
                price={prod.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
