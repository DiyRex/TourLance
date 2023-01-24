import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/login";
import Signup from "./views/signup";
import Home from "./views/home";
import NotFound from "./views/notfound";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/dashboard";
import DefaultLayout from "./components/DefaultLayout";
import Header from "./components/Header";
import Booking from "./views/booking.jsx"
import Pricing from "./views/pricing.jsx"

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
  {
    path: '*',
    element: <NotFound />
  },



])

export default router;
