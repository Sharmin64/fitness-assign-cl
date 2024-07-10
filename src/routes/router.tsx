import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/homepage/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/checkout/CheckOut";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ProductManageDashboard from "../pages/productManageDashboard/ProductManageDashboard";
import ProductPage from "../pages/productPage/ProductPage";
import Login from "../pages/authRoute/Login";
import Signup from "../pages/authRoute/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/productDetails",
    element: <ProductDetails />,
  },
  {
    path: "/productManagementDeshboard",
    element: <ProductManageDashboard />,
  },
  {
    path: "/productPage",
    element: <ProductPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
