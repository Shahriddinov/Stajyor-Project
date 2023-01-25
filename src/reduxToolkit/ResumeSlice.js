import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PHOTO } from "./URLS";

const initialState = {
	loading: false,
	error: "",
	data: []
};

export const photoUpload = createAsyncThunk("token/photoUpload", async payload => {
	const token = window.localStorage.getItem("token");
	return axios({
		method: "post",
		url: PHOTO,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data;`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		console.log(response.data);
		return response.data;
	});
});

const resumeSlice = createSlice({
	name: "image",
	initialState,
	extraReducers: builder => {
		builder.addCase(photoUpload.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(photoUpload.fulfilled, (state, action) => {});
		builder.addCase(photoUpload.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	}
});

export default resumeSlice.reducer;
