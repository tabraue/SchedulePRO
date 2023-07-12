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
import CreateDepartment from "../pages/Departments/CreateDepartment/CreateDepartment";



const checkLogin = () => {
  return localStorage.getItem('token') ? redirect('/home') : null // WAY TO CHECK IF LOGED
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
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn />, loader: checkLogin}, //, loader: checkLogin
      { path: "/terms", element: <Terms /> },
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
      { path: "/home/departments/create", element: <CreateDepartment />, loader: check }, //, loader: check 
      //{ path: "/home/departments/:departmentId", element:, loader: check }, //, loader: check   VIEW ONE SINGLE DEPARTMENT
      { path: "/home/employees", element: <Employees />, loader: check }, //, loader: check 
      //{ path: "/home/employees/create", element: , loader: check }, //, loader: check   CREATE EMPLOYEE
      //{ path: "/home/employees/:employeeId", element: , loader: check }, //, loader: check    VIEW ONE SINGLE EMPLOYEE


    ],
  },
]);
