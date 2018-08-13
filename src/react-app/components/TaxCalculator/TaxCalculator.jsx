// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

class TaxCalculator extends Component {
  render() {
    const { productId, basePrice, TargetComponent } = this.props;

    let priceWithTax = basePrice + basePrice * 0.18;
    if (productId === 'biryani') {
      priceWithTax = basePrice;
    }

    return (
      <div className="TaxCalculator">
        <p>TaxCalculator Component</p>
        <TargetComponent {...this.props} priceWithTax={priceWithTax} />
      </div>
    );
  }
}

export default TaxCalculator;
