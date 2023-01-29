import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/login";
import Signup from "./views/signup";
import Home from "./views/home";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/dashboard";
import DefaultLayout from "./components/DefaultLayout";
import Booking from "./views/booking.jsx"
import Pricing from "./views/pricing.jsx"
import AboutUS from "./views/AboutUS";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/pricing',
        element: <Pricing />
      },
      {
        path: '/booking',
        element: <Booking />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutUS />,
      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children:[
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  },


])

export default router;
