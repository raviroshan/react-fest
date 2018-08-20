import React from 'react';
import { render, cleanup } from 'react-testing-library';
import LoginForm from '../components/LoginForm/LoginForm';

afterEach(cleanup);
test('calls onSubmit with the username and password when submitted', () => {
  const fakeUser = { username: 'test', password: 'test' };
  const handleSubmit = jest.fn();
  const { getByTestId, getByText } = render(<LoginForm onSubmit={handleSubmit} />);

  const usernameNode = getByTestId(/username/i);
  const passwordNode = getByTestId(/password/i);

  // Act
  usernameNode.value = fakeUser.username;
  passwordNode.value = fakeUser.password;
  getByText(/submit/i).click();

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
});

test('snapshot', () => {
  const { container } = render(<LoginForm />);
  expect(container).toMatchSnapshot();
});
