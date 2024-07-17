import React, { Component } from "react";

export default class Product extends Component {
  state = {
    prod: this.props.prod,
  };

  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-1">
          <div className="card-body">
            <div className="text-muted">
              # {this.state.prod.id}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDel(this.state.prod);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>

            <h5 className="pt-2 border-top">{this.state.prod.prodName}</h5>
            <div>${this.state.prod.price}</div>
          </div>
          <div className="card-footer text-right">
            <div className="float-left">
              <span className="badge">{this.state.prod.qty}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onInc(this.state.prod);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDec(this.state.prod);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
