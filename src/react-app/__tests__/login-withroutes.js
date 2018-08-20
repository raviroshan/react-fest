import React from 'react';

import { renderWithRouter, fireEvent } from '../../../test/client-test-utils';
import App from '../app';


test('login as an existing user', async () => {
  const {
    getByTestId,
    getByText,
    getByLabelText,
    finishLoading,
  } = renderWithRouter(<App />);

  expect(window.location.href).toContain('/');
  const submitNode = getByText(/Submit/i);
  expect(submitNode.textContent).toMatch('Submit');
});
