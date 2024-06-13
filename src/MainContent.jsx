import React, { Component } from "react";

class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Alicia",
        phoneNumber: "123-456",
        address: { city: "New York" },
      },
      {
        id: 2,
        name: "Jim",
        phoneNumber: null,
        address: { city: "Toronto" },
      },
      {
        id: 3,
        name: "Sara",
        phoneNumber: "112-131",
        address: { city: "Vancouver" },
      },
      {
        id: 4,
        name: "Marcus",
        phoneNumber: "",
        address: { city: "Austin" },
      },
      {
        id: 5,
        name: "Sam",
        phoneNumber: "718-192",
        address: { city: "Portland" },
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {" "}
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone #</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>
                    {cust.phoneNumber ? (
                      cust.phoneNumber
                    ) : (
                      <div className="bg-warning p-2 text-center">N/A</div>
                    )}
                  </td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  //Executes when user clicks refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
}

export default MainContent;
