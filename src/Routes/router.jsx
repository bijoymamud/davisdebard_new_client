import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DiscountForm from "../Pages/DiscountPage/DiscountForm";
import Position from "../Pages/Position/Position";
import ContactForm from "../Pages/Contact/ContactForm";
import ThankYou from "../Pages/Thankpage/ThankYou";
import NewsLetter from "../Pages/Position/Position";
import Subcription_Confirm from "../Pages/Thankpage/Subcription_Confirm";
import Software from "../Pages/Software/Software";
import TermsConditions from "../Pages/T&C/TermsConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Books from "../Pages/Books/Books";
  
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
          path: '/contact',
          element: <ContactForm/>  
          },
          
          {
          path: '/news_latter',
          element: <NewsLetter/>  
          }, 
          {
            path: "/thank-you",
            element: <ThankYou/>
          },
          {
            path: "/confirmation",
            element: <Subcription_Confirm/>
          },
          {
            path: "/software",
            element: <Software/>
          },
          {
            path: "/books_collection",
            element: <Books/>
          },
          {
            path: "/terms_condition",
            element: <TermsConditions/>
          },
          {
            path: "/privacy_policy",
            element: <PrivacyPolicy/>
          }
      ]
    },
  ]);