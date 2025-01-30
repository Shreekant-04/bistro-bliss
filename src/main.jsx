import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout.jsx";
import Home from "./components/homepage/Home.jsx";
import About from "./components/About/About.jsx";
import NotFound from "./components/common/NotFound.jsx";
import Menu from "./components/menu/Menu.jsx";
import Contact from "./components/contact/Contact.jsx";
import BookTable from "./components/book/BookTable.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "book-table",
        element: <BookTable />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
