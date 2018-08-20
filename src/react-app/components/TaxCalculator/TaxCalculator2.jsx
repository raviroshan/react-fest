// Packages
import React, { Component } from 'react';

class TaxCalculator2 extends Component {
  render() {
    const { basePrice, productId, children } = this.props;
    let priceWithTax = basePrice + basePrice * 0.18;

    if (productId === 'biryani') {
      priceWithTax = basePrice;
    }

    return (
      <div className="TaxCalculator2">
        <p>TaxCalculator Component </p>
        {/* <children.type {...this.props} priceWithTax={priceWithTax} /> */}
        {React.cloneElement(children, {
          ...this.props,
          priceWithTax
        })}
      </div>
    );
  }
}

export default TaxCalculator2;
