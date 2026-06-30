import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import AboutMe from "./pages/AboutMe.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App berfungsi sebagai layout utama (Parent)
    children: [
      {
        index: true, // Loads HomePage by default
        element: <HomePage />,
      },
      {
        path: "/AboutMe", // Jalur About (domain.com/about)
        element: <AboutMe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
