import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { FavoritesContextProvider } from "./store/favorites-context.jsx";
// import { StrictMode } from "react";
// import TodoApp from "./TodoApp.jsx";

import "./index.css";
import reportWebVitals from "../reportWebVitals.jsx";

createRoot(document.getElementById("root")).render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <TodoApp />
//   </StrictMode>
// );

reportWebVitals(console.log);

/** OLD WAY */
// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
