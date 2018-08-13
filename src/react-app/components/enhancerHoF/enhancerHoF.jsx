// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

export default function TaxCalculatorHoF(TargetComponent, params) {
  return class TaxCalculator extends Component {
    render() {
      const { isSecured } = params;
      return (
        <div className="TaxCalculator">
          <p>TaxCalculator Component</p>
          {!isSecured && <p>Please login</p>}
          {isSecured && <TargetComponent {...this.props} />}
        </div>
      );
    }
  };
}
