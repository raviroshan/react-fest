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
    const {
      dispatch,
      cartPageReducer: { cartItemCount },
      searchPageReducer: { productList }
    } = this.props;
    return (
      <div className="SearchPage">
        <h2 className="text-center">
          <span className="title">Cart Count : </span>
          <span className="fav-count badge badge-primary">{cartItemCount}</span>
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
