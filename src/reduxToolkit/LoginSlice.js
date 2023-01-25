import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LOG_IN } from "./URLS";

const initialState = {
	loading: false,
	error: "",
	loggedIn: false
};

export const logInRequest = createAsyncThunk("token/logIn", async payload => {
	return axios
		.post(LOG_IN, {
			email: payload.email,
			password: payload.password,
			confirmPassword: payload.password
		})

		.then(response => {
			return response.data;
		});
});

const logInSlice = createSlice({
	name: "image",
	initialState,
	extraReducers: builder => {
		builder.addCase(logInRequest.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(logInRequest.fulfilled, (state, action) => {
			localStorage.setItem("token", action.payload.token);
			state.loggedIn = true;
		});
		builder.addCase(logInRequest.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	}
});

export default logInSlice.reducer;
