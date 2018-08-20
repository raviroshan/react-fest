// Packages
import React, { Component } from 'react';

// Components
import ProductTile from '../ProductTile/ProductTile';

// Styles
import './SearchPage.scss';

class SearchPage extends Component {
  render() {
    const {
      dispatch,
      cartPageReducer: { productList },
      searchPageReducer: { count: favCount }
    } = this.props;
    return (
      <div className="SearchPage">
        <h2 className="text-center">
          <span className="title">Favorite Count : </span>
          <span className="fav-count badge badge-primary">{favCount}</span>
        </h2>

        <div className="row justify-content-center">
          {productList.map(product => (
            <div className="col-12 col-md-3">
              <ProductTile {...product} dispatch={dispatch} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
