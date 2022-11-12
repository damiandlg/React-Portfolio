import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const head = ReactDOM.createRoot(document.querySelector('head'));

head.render(
  <>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Damian De La Garza Portfolio</title>
        <link rel ="stylesheet" href="assets/css/style.css" />
        </>
);
root.render(
  
    <App />
);

