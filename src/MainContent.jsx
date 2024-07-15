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
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Jim",
        phoneNumber: null,
        address: { city: "Toronto" },
        photo: "https://picsum.photos/id/1020/60",
      },
      {
        id: 3,
        name: "Sara",
        phoneNumber: "112-131",
        address: { city: "Vancouver" },
        photo: "https://picsum.photos/id/1030/60",
      },
      {
        id: 4,
        name: "Marcus",
        phoneNumber: "",
        address: { city: "Austin" },
        photo: "https://picsum.photos/id/1040/60",
      },
      {
        id: 5,
        name: "Sam",
        phoneNumber: "718-192",
        address: { city: "Portland" },
        photo: "https://picsum.photos/id/1050/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
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
              <th>Photo</th>
              <th>Name</th>
              <th>Phone #</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //Executes when user clicks refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };

  getPhonetoRender = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-warning p-2 text-center">N/A</div>
    );
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhonetoRender(cust.phoneNumber)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
}

export default MainContent;
