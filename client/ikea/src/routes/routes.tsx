import { createBrowserRouter } from "react-router-dom";
import About from "../views/About/About";
import Home from "../views/Home/Home";
import LoginPage from "../views/LoginPage/LoginPage";
import ProductPage from "../views/ProductPage/ProductPage";
import Register from "../views/Register/Register";
import NavBarWrapper from "../views/layouts/NavBarWrapper/NavBarWrapper";
import Favourites from "../views/Favourites/Favourites";
import Admin from "../views/Admin/Admin";
import Profile from "../views/Profile/Profile";
import SubCategory from './../views/SubCategory/SubCategory';
import Category from "../views/Category/Category";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBarWrapper />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/product/:itemNumber", element: <ProductPage /> },
            { path: "/subcategory/:name", element: <SubCategory /> },
            { path: "/category/:name", element: <Category /> },
            { path: "/register", element: <Register /> },
            { path: "/login", element: <LoginPage/> },
            { path: "/favourites", element: <Favourites/> },
            { path: "/admin", element: <Admin/> },
            { path: "/profile/:id", element: <Profile/> }

            
        ]
    }
])