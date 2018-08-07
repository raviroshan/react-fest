// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

// Components
import ProductTile from 'components/ProductTile/ProductTile';

// Actions

// Styles
import './SearchPage.scss';

class SearchPage extends Component {
  render() {
    const { propName } = this.props;
    console.log('propName: ', propName);
    return (
      <div className="SearchPage">
        <h2 className="text-center">Search Page</h2>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-3">
            <ProductTile />
          </div>
          <div className="col-12 col-lg-3">
            <ProductTile />
          </div>
          <div className="col-12 col-lg-3">
            <ProductTile />
          </div>
          <div className="col-12 col-lg-3">
            <ProductTile />
          </div>
          <div className="col-12 col-lg-3">
            <ProductTile />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
