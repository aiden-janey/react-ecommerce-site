import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import CustomersList from "./CustomersList";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact Component={Login} />
            <Route path="/dashboard" exact Component={Dashboard} />
            <Route path="/cart" exact Component={ShoppingCart} />
            <Route path="/customers" exact Component={CustomersList} />
            <Route path="*" exact Component={ErrorPage} />
          </Routes>
          {/** Every <Route> must be b/w <Routes> */}
        </div>
      </BrowserRouter>
    );
  }
}
