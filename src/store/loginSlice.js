import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
	name: "auth",
	initialState: {
		userId: -1,
		login: false,
	},
	reducers: {
		login: (state, action) => {
			state.userId = action.payload.userId;
			state.login = action.payload.login;
		},
		logout: (state) => {
			state.userId = -1;
			state.login = false;
		},
	},
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
