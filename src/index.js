import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Bootstrap CSS import करें
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css'; // Default CSS file
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
