import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import './index.css';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <BrowserRouter basename="testreact">
    <App />
    </BrowserRouter>
    
   </React.StrictMode>
);
