// Packages
import React, { Component } from 'react';

export default function TaxCalculatorHoF(ComponentName, params) {
  const { isLoggedIn } = params;
  return class SomeHoC extends Component {
    render() {
      const { basePrice, productId, children } = this.props;
      let priceWithTax = basePrice + basePrice * 0.18;

      if (productId === 'biryani') {
        priceWithTax = basePrice;
      }

      console.log('priceWithTax: ', priceWithTax);
      return (
        <div className="TaxCalculator2">
          <p>TaxCalculator Component </p>
          {isLoggedIn && <ComponentName />}
          {!isLoggedIn && <h3>Please log in</h3>}
        </div>
      );
    }
  };
}
