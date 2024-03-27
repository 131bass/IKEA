import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { User } from "../../types/user";

export interface UserState {
    value: User,
}

const initialState: UserState = {
    value: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        isAdmin:false
    }
};

export const userLoggedInSlice = createSlice({
    name: "userLoggedIn",
    initialState,
    reducers: {
        setUserLoggedIn: (state, action) => {
            state.value = action.payload;
        },
        setlogOut: (state) => {
            state.value = initialState.value

        }

    }
})

export const { setUserLoggedIn, setlogOut } = userLoggedInSlice.actions

export const userLoggedInSelector = (state: RootState) => state.userLoggedIn.value

export default userLoggedInSlice.reducer


