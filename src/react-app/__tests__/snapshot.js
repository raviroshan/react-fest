import React from 'react';
import ReactDOM from 'react-dom';
import { getProductsBycategory } from '../../../test/snapshot-mock';

const renderer = require('react-test-renderer');

test('manual "snapshot"', () => {
  const products = getProductsBycategory();
  expect(products).toEqual([
    { name: 'product1', Price: 100, category: ['food'] },
    { name: 'product7', Price: 700, category: ['food'] },
  ]);
});

test('automatic snapshot', () => {
  const products = getProductsBycategory();
  expect(products).toMatchSnapshot();

  // DOM NODES!!!
  const div = document.createElement('div');
  const title = '<h2 class="title">Product List</h2>';
  expect(div).toMatchSnapshot('title of a snapshot!');


  // And react elements!
  const onClick = () => {};
  const element = React.createElement('div', { onClick }, 'Hello World');
  expect(element).toMatchSnapshot('react element');


  // and rendered elements
  const rendered = renderer.create(element);
  expect(rendered).toMatchSnapshot('rendered');

  // and DOM nodes rendered via react
  const app = document.createElement('div');
  ReactDOM.render(element, app);
  expect(app).toMatchSnapshot('react-dom');
});
