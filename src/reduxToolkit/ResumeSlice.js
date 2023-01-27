import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PHOTO, COUNTRYLIST, COUNTRY_LIST_UPLOAD, POSITIONS, HOBBIES, POSITION_POST } from "./URLS";

const initialState = {
	loading: false,
	error: "",
	data: [],
	countryList: [],
	positionList: [],
	hobbiesList: [],
	photoPage: true,
	countryPage: false,
	yourselfPage: false,
	languagePage: false,
	experiencePage: false,
	educationPage: false,
	contactsPage: false,
	resumePage: false,
	resumeFinishPage: false
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
		return response.data;
	});
});

export const countryList = createAsyncThunk("get/countryList", async () => {
	return axios.get(COUNTRYLIST).then(response => {
		return response.data;
	});
});

export const countryUpload = createAsyncThunk("token/countryUpload", async payload => {
	const token = window.localStorage.getItem("token");
	return axios({
		method: "post",
		url: COUNTRY_LIST_UPLOAD,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data;`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

export const positions = createAsyncThunk("get/positions", async () => {
	return axios.get(POSITIONS).then(response => {
		return response.data;
	});
});

export const hobbies = createAsyncThunk("get/hobbies", async () => {
	return axios.get(HOBBIES).then(response => {
		return response.data;
	});
});

export const positionUpload = createAsyncThunk("token/positionUpload", async payload => {
	const token = window.localStorage.getItem("token");
	return axios({
		method: "post",
		url: POSITION_POST,
		// data: {
		// 	description: payload.description,
		// 	positionId: payload.positionId,
		// 	freelancerHobbies: payload.freelancerHobbies,
		// 	freelancerSkills: payload.freelancerSkills
		// },
		data: {
			description: "test",
			positionId: 1,
			freelancerHobbies: [0],
			freelancerSkills: [0]
		},
		headers: {
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

const resumeSlice = createSlice({
	name: "resume",
	initialState,
	extraReducers: builder => {
		builder.addCase(photoUpload.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(photoUpload.fulfilled, (state, action) => {
			state.photoPage = false;
			state.countryPage = true;
		});
		builder.addCase(photoUpload.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		//CoutryList reducer
		builder.addCase(countryList.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(countryList.fulfilled, (state, action) => {
			state.countryList = action.payload.data;
		});
		builder.addCase(countryList.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		//CoutryList Upload reducer
		builder.addCase(countryUpload.fulfilled, (state, action) => {
			state.countryPage = false;
			state.yourselfPage = true;
		});

		//Positions List reducer
		builder.addCase(positions.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(positions.fulfilled, (state, action) => {
			state.positionList = action.payload.data;
		});
		builder.addCase(positions.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		//Positions List reducer
		builder.addCase(hobbies.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(hobbies.fulfilled, (state, action) => {
			state.hobbiesList = action.payload.data;
		});
		builder.addCase(hobbies.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		//Positions Upload List reducer
		builder.addCase(positionUpload.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(positionUpload.fulfilled, (state, action) => {});
		builder.addCase(positionUpload.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	}
});

export default resumeSlice.reducer;
