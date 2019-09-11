import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator';

ReactDOM.render(<Calculator />, document.getElementById('root'));

if(module.hot) {
    module.hot.accept();
}

