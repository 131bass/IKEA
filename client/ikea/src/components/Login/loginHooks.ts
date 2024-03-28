import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { setUserLoggedIn } from "../../features/loggedInUser/userSlice"


export const useLogin = () => {
    const initialState = { email: "", password: "" }
    const [user, setUser] = useState(initialState)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const login = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            const { data } = await axios.post("/api/users/login", { email: user.email, password: user.password })
            console.log(data);
            dispatch(setUserLoggedIn(data.userDB))
            navigate(`/profile`)
        } catch (error) {
            console.error(error)
        }
    }

    return { user, setUser, login }
}

