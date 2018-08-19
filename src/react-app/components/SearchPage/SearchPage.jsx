// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

// Components
import ProductTile from 'components/ProductTile/ProductTile';

// Actions
import { getProductListLocal, getProductListFromServer } from '../../actions/search-actions';

// Styles
import './SearchPage.scss';

class SearchPage extends Component {
  componentDidMount() {
    // this.props.dispatch(getProductListLocal());
    this.props.dispatch(getProductListFromServer());
  }

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
          {productList.length === 0 && <p>Loading....</p>}

          {productList.map(product => (
            <div className="col-12 col-md-3" key={product.productId}>
              <ProductTile {...product} dispatch={dispatch} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
