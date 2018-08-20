import React from 'react';

import './LoginForm.scss';

function LoginForm({ onSubmit }) {
  return (
    <div>
      <form
        className="container login"
        onSubmit={e => {
          e.preventDefault();
          const { username, password } = e.target.elements;
          onSubmit({
            username: username.value,
            password: password.value,
          });
        }}
      >
        <div className="form-group">
          <input
            data-testid="username"
            placeholder="Username..."
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">

          <input
            data-testid="password"
            placeholder="Password..."
            type="password"
            name="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
