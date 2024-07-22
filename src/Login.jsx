import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <div>
        <h4 className="m1 p-2 border-bottom">Login</h4>

        <div className="form-group form-row">
          <label className="col-lg-4">Email: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>

        <div className="form-group form-row">
          <label className="col-lg-4">Password: </label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>

        <div className="text-right">
          {this.state.message}
          <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
      /**
       * Unlike Angular, React doesn't support 2-way form binding.
       * The dev must manually specify this using the onChange Event Handler.
       */
    );
  }

  onLoginClick = async () => {
    console.log(this.state);
    let response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );
    let body = await response.json();

    console.log(body);

    if (body.length > 0) {
      this.setState({
        message: <span className="text-success">Successful Login!</span>,
      });
    } else {
      this.setState({
        message: <span className="text-danger">Login Failed.</span>,
      });
    }
  };
}
