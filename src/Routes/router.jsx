import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DiscountForm from "../Pages/DiscountPage/DiscountForm";
import Position from "../Pages/Position/Position";
  
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
          },
          
          {
          path: '/ranking',
          element: <Position/>  
          }
      ]
    },
  ]);