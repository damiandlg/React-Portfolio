import React from 'react';
import { render } from 'react-dom';
import 'src/Index.css';
import App from './App';


const root = document.getElementById('root');
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();


