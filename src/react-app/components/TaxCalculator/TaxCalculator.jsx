// Packages
import React, { Component } from 'react';

class TaxCalculator extends Component {
  render() {
    const { TargetComponent, basePrice, productId } = this.props;
    let priceWithTax = basePrice + basePrice * 0.18;

    if (productId === 'biryani') {
      priceWithTax = basePrice;
    }

    return (
      <div className="TaxCalculator">
        <p>TaxCalculator Component </p>
        <TargetComponent {...this.props} priceWithTax={priceWithTax} />
      </div>
    );
  }
}

export default TaxCalculator;
