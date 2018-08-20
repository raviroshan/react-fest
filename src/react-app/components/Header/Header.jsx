// Packages
import React, { Component } from 'react';

import { api } from '../../utils';
// Styles
import './Header.scss';
// Components

// Actions
class Header extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { search } = e.target.elements;
    api.findItem(search.value).then((data) => {
      this.props.searchedItem(data);
    });
  }

  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img src="/assets/images/react.png" width="30" height="30" alt="" />
            React Fest
          </a>
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
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
              <input
                name="search"
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
