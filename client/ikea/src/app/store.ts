import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import userLoggedInReducer from '../features/loggedInUser/userSlice'

export const store = configureStore({
  reducer: {
    userLoggedIn:userLoggedInReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
