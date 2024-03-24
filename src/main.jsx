import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './routs/about.jsx';
import BusinessVerification from './routs/Business-Verification.jsx';
import Blogs from './routs/Blogs.jsx';
import OurServices from './routs/Our-Services.jsx';
import Contact from './routs/contact.jsx';
import Featurs from './featurs.jsx';
import Nomatch from './components/nomatch.jsx';
import Soon from './components/soon.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Verification",
    element: <BusinessVerification/>,
  },
  {
    path: "about/Verification",
    element: <BusinessVerification/>,
  },
  {
    path: "about/Verification",
    element: <About />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "Verification/About",
    element: <About />,
  },
  {
    path: "Blogs",
    element: <Blogs />,
  },
  {
    path: "Verification/Blogs",
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
  {
    path: "*",
    element: <Nomatch />,
  },
  {
    path:"error",
    element:<Soon/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
