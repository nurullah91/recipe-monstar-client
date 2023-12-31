import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Chef from "../Pages/Chef/Chef";
import LoginLayout from "../Layout/LoginLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ComingSoon from "../Pages/CommingSoon/ComingSoon";





const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Navigate to='/chefs'></Navigate>

      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/registration',
        element:<Registration></Registration>
      },
      {
        path:'/coming',
        element: <ComingSoon></ComingSoon>
      }
    ]

  },

  {
    path: 'chefs',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/chefs',
        element: <Home></Home>,
        loader:() => fetch('https://recipe-monstar-server-nurllah91.vercel.app/chefs')
      },
      {
        path:'/chefs/:id',
        element:<PrivateRoute><Chef></Chef></PrivateRoute>,
        loader: ({params}) => fetch(`https://recipe-monstar-server-nurllah91.vercel.app/chefs/${params.id}`)
      }
      
    ]

  }
  
]);

export default router;