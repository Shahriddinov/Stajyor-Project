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
	reducers: {
		removeToken: (state, {type,payload}) => {
			state.loggedIn = null
		},
		resumeFinish: (state,{type,payload}) => {
			localStorage.setItem("resume",payload)
			state.resume = payload
		}
	},
	extraReducers: builder => {
		builder.addCase(logInRequest.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(logInRequest.fulfilled, (state, action) => {
			window.localStorage.setItem("token", action.payload.token);
			state.loggedIn = true;
		});
		builder.addCase(logInRequest.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	}
});

export const {removeToken,resumeFinish} = logInSlice.actions
export default logInSlice.reducer;
