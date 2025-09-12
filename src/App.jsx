import { useEffect } from 'react'
import './App.css'
import Home from './Components/home'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Route/RootLayout';
import About from './NavHome/About';
import Services from './NavHome/Services';
import Works from './NavHome/Works';
import Contact from './NavHome/Contact';
  

function App() {

  useEffect(() => {
  document.documentElement.setAttribute("data-theme", "luxury");
}, []);

const router = createBrowserRouter([
  {

     index: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
       path: "Home",
        Component: Home 
      },
         {
      path: "about",
      Component: About
    },
    {
      path: "services",
      Component: Services
    },
    {
      path: "works",
      Component: Works
    },
    {
      path: "contact",
      Component: Contact
    }
    ]
   
  },
  // Add more routes as needed
]);

  return (
    <>
     <RouterProvider router={router} />
    </>
    
  )
}

export default App
