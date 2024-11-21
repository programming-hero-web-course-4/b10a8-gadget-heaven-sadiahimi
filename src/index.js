// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // এই লাইনটি স্টাইল ইম্পোর্টের জন্য

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
