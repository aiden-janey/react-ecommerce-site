import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //executes when component is mounted
  constructor(props) {
    // console.log("constructor - ShoppingCart");
    //dont make HTTP req within constructor
    super(props);
    //init the state
    this.state = { products: [] };
  }

  render() {
    // console.log("render - ShoppingCart");
    return (
      <div>
        <h4 className="pt-2">Shopping Cart</h4>

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

  //executes after constructor & render method (including child comp) of current comp
  async componentDidMount() {
    //fetch data from datasource
    // console.log("componentDidMount - ShoppingCart");

    let response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    let prods = await response.json();
    this.setState({ products: prods });
    console.log(prods);
    // let promise = fetch("http://localhost:5000/products", { method: "GET" });
    // promise.then((res) => {
    //   let promise2 = res.json();
    //   promise2.then((prods) => {
    //     console.log(prods);
    //     this.setState({ products: prods });
    //   });
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   "componentDidUpdate - ShoppingCart",
    //   prevProps,
    //   prevState,
    //   this.props,
    //   this.state
    // );
    // if (prevProps.x != this.props.x) {
    //   http req can be made here conditionally
    // }
  }

  //executes when user navigates to another route
  componentWillUnmount() {
    // console.log("componentWillUnmount - ShoppingCart");
  }

  componentDidCatch(error, info) {
    // console.log("componentDidCatch - ShoppingCart");
    // console.log(`${error}: ${info}`);
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
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
