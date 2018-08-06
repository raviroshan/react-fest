import React from 'react';
import ReactDOM from 'react-dom';

const reactApp = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Welcome from React')
);

const el = document.getElementById('app-root');

ReactDOM.render(reactApp, el);
