// Packages
import React, { Component } from 'react';

// import getValue from 'object-getvalue';

// Components

// Actions

// Styles
import './ProductTile.scss';

const someActionCreator = actionType => {
  console.log('actionType: ', actionType);
  return {
    type: actionType
  };
};

class ProductTile extends Component {
  state = {
    isFav: false
  };

  handleClick = () => {
    const { isFav: oldFavValue } = this.state;
    this.setState(
      {
        isFav: !oldFavValue
      },
      () => {
        const { isFav: newFavValue } = this.state;
        // this.props.handleNotify(newFavValue ? 'increment' : 'decrement');
        const actionType = newFavValue ? 'ITEM_ADDED' : 'ITEM_REMOVED';

        this.props.dispatch(someActionCreator(actionType));
      }
    );
  };

  render() {
    const { dispatch, productName, productId, basePrice, priceWithTax } = this.props;
    const { isFav } = this.state;

    const btnText = isFav ? 'Item Added' : 'Add to Bag';
    const btnClass = isFav ? 'btn-success' : 'btn-outline-dark';
    const iconClass = isFav ? 'fa-check-circle' : 'fa-plus-circle';

    return (
      <div className="ProductTile">
        <div className="card">
          <div className="img-wrapper">
            <img
              className="card-img-top"
              src={`/assets/images/products/${productId}.jpg`}
              alt="Product Tile"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text base">
              <span>base price : </span>
              <span>${basePrice} </span>
            </p>

            <p className="card-text vat">
              <span>including vat : </span>
              <span>$ {basePrice + basePrice * 0.18} </span>
            </p>

            <button type="button" className={`btn ${btnClass}`} onClick={this.handleClick}>
              <span>{btnText}</span>
              <i className={`fas ${iconClass}`} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductTile;
