import { createBrowserRouter, redirect } from "react-router-dom";
import Error from "../components/Error/Error";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Terms from "../pages/Terms/Terms";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";



const checkLogin = () => {
  return localStorage.getItem('token') ? redirect('/home') : null // WAY TO CHECK IF LOGED
}

const check = () => {
  return localStorage.getItem('token') ? redirect('/login') : null // WAY TO PROTECT TYPING ADDRESS
}

export const router = createBrowserRouter([
  // ALL VIEWS -> PENDING LOGING
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn /> }, //, loader: checkLogin
      { path: "/terms", element: <Terms /> },
    ],
  },
  // COMPANY VIEW -> ALREADY LOGED
  {
    path: "/home",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/home/dashboard", element: <Home />}, //, loader: check 
    ],
  },
]);
