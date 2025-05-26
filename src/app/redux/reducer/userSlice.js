import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        data: null
    },
    reducers: {
        login(state, data) {
            state.token = data.payload.userToken
            localStorage.setItem('userToken', data.payload.userToken)
        },
        logout(state) {
            state.token = null;
            state.data = null;
            localStorage.removeItem('userToken')
        },
        lsDataUpdate(state, data) {
            if (localStorage.getItem('userToken')) {
                state.token = localStorage.getItem('userToken');
                state.data = data.payload.user
            }
        },

    }
})
export const { login, logout, lsDataUpdate } = UserSlice.actions;
export default UserSlice.reducer