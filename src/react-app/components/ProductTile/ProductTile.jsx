// Packages
import React, { Component } from 'react';

// import getValue from 'object-getvalue';

// Components

// Actions

// Styles
import './ProductTile.scss';

class ProductTile extends Component {
  render() {
    const { propName } = this.props;
    console.log('propName: ', propName);
    return (
      <div className="ProductTile">
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
            alt="Product Tile"
          />
          <div className="card-body">
            <h5 className="card-title">Product Title</h5>
            <p className="card-text">some random desctiption</p>

            <button type="button" className="btn btn-outline-dark">
              <span>Add To Bag</span>
              <i className="fas fa-star" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductTile;
