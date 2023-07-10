import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Calendar from "../components/Calendar/Calendar";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Terms from "../pages/Terms/Terms";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/signup", element: <SignUp /> },
      { path: "/terms", element: <Terms /> },
      { path: "/login", element: <LogIn /> },
    ],
  },
]);
