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
import FaqPage from "./utilities/Faq.jsx";
import Privacy from "./utilities/Privacy.jsx";
import Terms from "./utilities/Terms.jsx";
import Disclaimer from "./utilities/Disclaimer.jsx";
import { Analytics } from "@vercel/analytics/react";

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
        path: "faq",
        element: <FaqPage />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "book-table",
        element: <BookTable />,
      },
      {
        path: "reservation",
        element: <BookTable />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </StrictMode>
);
