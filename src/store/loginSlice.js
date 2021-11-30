import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
	name: "auth",
	initialState: {
		userId: -1,
		username: "",
		login: false,
		imgLink: "",
	},
	reducers: {
		login: (state, action) => {
			state.userId = action.payload.userId;
			state.username = action.payload.username;
			state.login = action.payload.login;
			state.imgLink = action.payload.imgLink;
		},
		logout: (state) => {
			state.userId = -1;
			state.username = "";
			state.login = false;
			state.imgLink = "";
		},
	},
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
