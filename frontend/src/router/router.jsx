import { createBrowserRouter, redirect } from "react-router-dom";
import Error from "../components/Error/Error";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Terms from "../pages/Terms/Terms";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import Departments from "../pages/Departments/Departments";
import Employees from "../pages/Employees/Employees";
import Welcome from "../pages/Welcome/Welcome";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import CreateSchedule from "../pages/CreateSchedule/CreateSchedule";


const checkLogin = () => {
  return localStorage.getItem('token') ? redirect('/home/dashboard') : null // WAY TO CHECK IF LOGED
}

const check = () => {
  return !localStorage.getItem('token') ? redirect('/login') : null // WAY TO PROTECT TYPING ADDRESS
}

export const router = createBrowserRouter([
  // ALL VIEWS -> BEFORE LOGING
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/welcome", element: <Welcome /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn />, loader: checkLogin}, //, loader: checkLogin
      { path: "/terms", element: <Terms /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  // COMPANY VIEW -> ALREADY LOGED
  {
    path: "/home",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/home/dashboard", element: <Home />, loader: check }, //, loader: check 
      { path: "/home/details", element: <Details />, loader: check }, //, loader: check 
      { path: "/home/departments", element: <Departments />, loader: check }, //, loader: check 
      { path: "/home/employees", element: <Employees />, loader: check }, //, loader: check 
/*       { path: "/home/schedule", element: <CreateSchedule />, loader: check }, //, loader: check  */
    ],
  },
]);
