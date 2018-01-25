import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Controller from './Controller';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();
