// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

// Components
import ProductTile from 'components/ProductTile/ProductTile';
import TaxCalculator from 'components/TaxCalculator/TaxCalculator';

// Actions

// Styles
import './SearchPage.scss';

class SearchPage extends Component {
  render() {
    const {
      search: { productList },
      favProducts: { count: favCount },
      dispatch
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
              <TaxCalculator {...product} handleNotify={this.handleNotify}>
                <ProductTile discount="10%" dispatch={dispatch} />
              </TaxCalculator>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
