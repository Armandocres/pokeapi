import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PokeApi from './PokeApi';
//npm test -- --coverage --watchAll=false

ReactDOM.render(
  <PokeApi />,
  document.getElementById('root')
);

