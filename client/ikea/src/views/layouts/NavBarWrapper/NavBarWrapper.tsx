import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Chat from "../../../components/Chat/Chat";


export default function NavBarWrapper(){
    return(
        <div>
        <NavBar/>
        <Chat/>
        <Outlet/>
        </div>
    )
}