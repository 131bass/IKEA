import axios from "axios"
import { useState } from "react"


export const useLogin = () => {
    const initialState = { email: "", password: "" }
    const [user, setUser] = useState(initialState)


    const login = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            const { data } = await axios.post("/api/users/login", { email: user.email, password: user.password })
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }

    return { user, setUser, login }
}