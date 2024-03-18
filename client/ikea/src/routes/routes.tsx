import { createBrowserRouter } from "react-router-dom";
import About from "../views/About/About";
import Category from "../views/Category/Category";
import Home from "../views/Home/Home";
import ProductPage from "../views/ProductPage/ProductPage";
import NavBarWrapper from "../views/layouts/NavBarWrapper/NavBarWrapper";
import Register from "../views/Register/Register";
import Login from "../views/Login/Login";





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
            { path: "/login", element: <Login /> }
        ]
    }
])