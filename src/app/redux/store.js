import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducer/userSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice
    }
})