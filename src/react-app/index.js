import React from 'react';
import ReactDOM from 'react-dom';

import './dependencies';

import Main from './Main/Main.jsx';

const el = document.getElementById('app-root');
ReactDOM.render(<Main userName="Ravi" />, el);
