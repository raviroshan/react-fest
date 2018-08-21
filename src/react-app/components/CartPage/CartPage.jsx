// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';
import { connect } from 'react-redux';

// Components
import ProductTile from 'components/ProductTile/ProductTile';

// Actions

// Styles
import './CartPage.scss';

class CartPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      import('./SomeRandomCode' /* webpackChunkName: "some-random" */).then(module => {
        console.log('module: ', module);
        module.default();
      });
    }, 2000);
  }

  render() {
    console.log(' this.props: ', this.props);
    const {
      cartPageReducer: { cartItemList }
    } = this.props;
    return (
      <div className="CartPage">
        <h2>CartPage Component</h2>
        <div className="row justify-content-center">
          {cartItemList.length === 0 && <h3>Cart is Empty</h3>}
          {cartItemList.map(productDetails => (
            <div className="col-12 col-md-3" key={productDetails.productId}>
              <ProductTile productDetails={productDetails} isCartItem />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    cartPageReducer: store.cartPageReducer
  };
}

export default connect(mapStateToProps)(CartPage);
