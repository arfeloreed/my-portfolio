import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// routes
import Home from "./routes/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
