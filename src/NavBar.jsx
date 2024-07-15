import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <a className="navbar-brand" href="/#">
            eCommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );

    /*
      - Inorder to return 2+ tags they must be wrapped in a container like div.
        - Inorder to hide nested divs in dev-tools, use React.Fragment.
      - Use className in place of class for HTML attributes.
      - Use /# to avoid warnings in in href attribtutes.
      - export default is required to make available the component in other components.
        - It must be declared in the class defintion or at the bottom of the file.
    */
  }
}

export default NavBar;
