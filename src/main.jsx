import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './routs/about.jsx';
import BusinessVerification from './routs/Business-Verification.jsx';
import Blogs from './routs/Blogs.jsx';
import OurServices from './routs/Our-Services.jsx';
import Contact from './routs/contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Business-Verification",
    element: <BusinessVerification/>,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "Blogs",
    element: <Blogs />,
  },
  {
    path: "Our-Services",
    element: <OurServices />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
