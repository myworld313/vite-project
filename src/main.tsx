import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { Layout } from "./components/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1 className="text-2xl">Page Not Found</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About name="My Website" company="My Company" IsCeo={true} /> },
      { path: "/contact", element: <Contact /> },
      { path: "/portfolio", element: <Portfolio /> },
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
