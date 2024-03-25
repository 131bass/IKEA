import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const useLogin = () => {
    const initialState = { email: "", password: "" }
    const [user, setUser] = useState(initialState)

    const navigate = useNavigate()
    const login = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            const { data } = await axios.post("/api/users/login", { email: user.email, password: user.password })
            console.log(data);
            navigate(`/profile/:${data.userDB._id}`)
        } catch (error) {
            console.error(error)
        }
    }

    return { user, setUser, login }
}