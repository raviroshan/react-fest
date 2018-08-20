import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer/Footer';

test('renders the footer', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Footer />, container);
  expect(container.textContent).toMatch('Footer Component');
});
