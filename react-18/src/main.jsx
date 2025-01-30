import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import React from 'react';
// import ReactDOM from 'react-dom';

import './index.css'
import App from './App.jsx'
import reportWebVitals from '../reportWebVitals.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

reportWebVitals(console.log);

/** OLD WAY */
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );