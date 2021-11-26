import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
	name: "location",
	initialState: {
		location: "",
	},
	reducers: {
		passLocation: (state, action) => {
			state.location = action.payload;
		},
		deleteLocation: (state) => {
			state.location = "";
		},
	},
});

export const { passLocation, deleteLocation } = locationSlice.actions;
export default locationSlice.reducer;
