import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const baseUrl = 'https://cropper-api.herokuapp.com';

ReactDOM.render(
  <App baseUrl={baseUrl}/>,
  document.getElementById('root')
);
