// import { createSlice } from "@reduxjs/toolkit";

// export const UserSlice = createSlice({
//     name: user,
//     initialState: {
//         data: null
//     },
//     reducers: {
//         login(state, data) {
//             state.data = data.payload.admin
//             localStorage.setItem('userDetails', JSON.stringify(data.payload.admin));
//             if (data.payload.adminToken) {
//                 localStorage.setItem('userToken', data.payload.adminToken)
//             }
//         },
//         logout(state) {
//             state.data = null;
//             localStorage.removeItem('userDetails')
//             localStorage.removeItem('userToken')
//         }
//     }
// })
// export const { login, logout } = UserSlice.actions;
// export default UserSlice.reducer