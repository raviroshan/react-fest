// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

// Components

// Actions

// Styles
import './Main.scss';

class Main extends Component {
  render() {
    const { userName } = this.props;
    return (
      <div className="Main">
        <h2>Main Component</h2>
        <p>Welcome, {userName}</p>

        <div>
          <button type="button" className="btn btn-outline-dark">
            <span>Dark</span>
            <i className="fas fa-star" />
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
