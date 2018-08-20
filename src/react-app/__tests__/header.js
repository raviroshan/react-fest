import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/Header/Header';
import { api } from '../utils';

jest.mock('../utils/api', () => ({
  findItem: jest.fn(() => Promise.resolve('abc'))
}));

const flushPromises = () => new Promise(resolve => {
  setTimeout(resolve, 0);
});

test('calls onSubmit with the search keyword', async () => {
  const container = document.createElement('div');

  const fakeSearchedItem = jest.fn();
  ReactDom.render(<Header searchedItem={fakeSearchedItem} />, container);

  const form = container.querySelector('form');
  const { search } = form.elements;
  search.value = 'pizza';

  const submit = new window.Event('submit');

  form.dispatchEvent(submit);

  await flushPromises();

  expect(fakeSearchedItem).toHaveBeenCalledTimes(1);
  expect(fakeSearchedItem).toHaveBeenCalledWith('abc');

  expect(api.findItem).toHaveBeenCalledTimes(1);
  expect(api.findItem).toHaveBeenCalledWith('pizza');
});
