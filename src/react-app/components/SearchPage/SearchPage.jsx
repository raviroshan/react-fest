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
  state = {
    favCount: 0,
    productList: [
      {
        productName: 'Pizza',
        productId: 'pizza',
        basePrice: 400
      },
      {
        productName: 'Choco Lava',
        productId: 'chocolava',
        basePrice: 200
      },
      {
        productName: 'Garlic Bread',
        productId: 'garlic_bread',
        basePrice: 100
      },
      {
        productName: 'Sprite',
        productId: 'sprite',
        basePrice: 50
      },
      {
        productName: 'Biryani',
        productId: 'biryani',
        basePrice: 250
      },
      {
        productName: 'Samosa',
        productId: 'samosa',
        basePrice: 30
      },
      {
        productName: 'Gulab Jamun',
        productId: 'gulab_jamun',
        basePrice: 70
      },
      {
        productName: 'Gajar ka Halwa',
        productId: 'gajar_halwa',
        basePrice: 180
      }
    ]
  };

  handleNotify = param => {
    let { favCount: newCount } = this.state;

    if (param === 'increment') {
      newCount++;
    } else {
      newCount--;
    }

    this.setState({
      favCount: newCount
    });
  };

  render() {
    const { productList, favCount } = this.state;
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
                <ProductTile discount="10%" />
              </TaxCalculator>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
