import { createBrowserRouter } from "react-router-dom";
import About from "../views/About/About";
import Category from "../views/Category/Category";
import Home from "../views/Home/Home";
import LoginPage from "../views/LoginPage/LoginPage";
import ProductPage from "../views/ProductPage/ProductPage";
import Register from "../views/Register/Register";
import NavBarWrapper from "../views/layouts/NavBarWrapper/NavBarWrapper";
import Favourites from "../views/Favourites/Favourites";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBarWrapper />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/product:name", element: <ProductPage /> },
            { path: "/caegory:name", element: <Category /> },
            { path: "/register", element: <Register /> },
            { path: "/login", element: <LoginPage/> },
            { path: "/favourites", element: <Favourites/> }
            
        ]
    }
])