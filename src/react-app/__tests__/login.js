import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../components/LoginForm/LoginForm';

test('calls onSubmit with the username and password when submitted', () => {
  const handleSubmit = jest.fn();
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm onSubmit={handleSubmit} />, div);

  const form = div.querySelector('form');
  const { username, password } = form.elements;
  username.value = 'test';
  password.value = 'test2';

  const event = new window.Event('submit');
  form.dispatchEvent(event);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({ username: 'test', password: 'test2' });
});
