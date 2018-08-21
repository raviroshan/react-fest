// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';
import { Link } from 'react-router-dom';

// Components

// Actions

// Styles
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <img src="/assets/images/react.png" width="30" height="30" alt="" />
            React Fest
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown" />
            </ul>
          </div>
          <Link className="header-navigation" to="/search">
            Search
          </Link>
          <Link className="header-navigation" to="/cart">
            Cart
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
