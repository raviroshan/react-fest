// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

class TaxCalculator extends Component {
  render() {
    const { children, ...others } = this.props;
    console.log('children: ', children);

    const { productId, basePrice } = others;

    let priceWithTax = basePrice + basePrice * 0.18;
    if (productId === 'biryani') {
      priceWithTax = basePrice;
    }

    return (
      <div className="TaxCalculator">
        <p>TaxCalculator Component</p>
        {/* {children} */}
        {/* <children.type {...others} priceWithTax={priceWithTax} /> */}
        {/* https://reactjs.org/docs/react-api.html#cloneelement */}
        {React.cloneElement(children, {
          ...others,
          priceWithTax
        })}
      </div>
    );
  }
}

export default TaxCalculator;
