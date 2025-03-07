import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DiscountForm from "../Pages/DiscountPage/DiscountForm";
  
export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>
          },
          {
          path: '/discount_info',
          element: <DiscountForm/>  
          }
      ]
    },
  ]);