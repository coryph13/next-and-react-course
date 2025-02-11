import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router";
// import App from "./App.jsx";
// import { FavoritesContextProvider } from "./store/favorites-context.jsx";
import { StrictMode } from "react";
// import TodoApp from "./TodoApp.jsx";

import "./index.css";
import reportWebVitals from "../reportWebVitals.jsx";
import {
  // BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "./routes/RootLayout.jsx";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails.jsx";

// createRoot(document.getElementById("root")).render(
//   <FavoritesContextProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </FavoritesContextProvider>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        path: "/",
        element: <Posts />,
        hydrateFallbackElement: <div>Loading...</div>,
        loader: postsLoader,
        children: [
          {
            path: "/create",
            hydrateFallbackElement: <div>Loading...</div>,
            action: newPostAction,
            element: <NewPost />,
          },
          {
            path: "/:id",
            loader: postDetailsLoader,
            element: <PostDetails />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
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
