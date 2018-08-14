// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

// Components
import ProductTile from 'components/ProductTile/ProductTile';
// import TaxCalculator2 from 'components/TaxCalculator/TaxCalculator2';
import TaxCalculatorHoF from 'components/TaxCalculator/TaxCalculatorHoF';

// Actions

// Styles
import './SearchPage.scss';

const Foo = TaxCalculatorHoF(ProductTile, {
  isLoggedIn: false
});
console.log('Foo: ', Foo);

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
              {/* <ProductTile {...product} handleNotify={this.handleNotify} /> */}
              <ProductTile {...product} dispatch={dispatch} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
