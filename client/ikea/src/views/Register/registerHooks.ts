import axios from "axios"
import { useState } from "react"
import { User } from "../../types/user"


export const useRegister = () => {

    const initialState = { firstName: "", lastName: "", email: "", phoneNumber: "", password: "" }
    const [user, setUser] = useState<User>(initialState)

    const handleRegister = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            const { data } = await axios.post("/api/users/register", { firstName: user.firstName, lastName: user.lastName, email: user.email, phoneNumber: user.phoneNumber, password: user.password })
            console.log(data);

        } catch (error) {
            console.error(error)
        }
    }
    return { user, setUser, handleRegister }
}