import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_FREELANCER } from "./URLS";

const initialState = {
	loading: false,
	error: "",
	data: [],
	freelancerData: [],
	sidePage: false,
	isActive: false
};



export const getFreelancerData = createAsyncThunk("freelancerData/getData", async payload => {
	const token = window.localStorage.getItem("token");
	return axios({
		method:"GET",
		url:GET_FREELANCER,
		headers:{
			Authorization: "Bearer " + token
		}
	}).then(res => res.data)
	
});

const FreelanceSlice = createSlice({
	name: "freelancer",
	initialState,
	reducers: {
		sidePage: state => {
			state.sidePage = true;
		},
		modalIsActive: state => {
			state.isActive = !state.isActive;
		}
	},
	extraReducers: builder => {
		builder.addCase(getFreelancerData.pending, (state) => {
			state.loading = true
		} )
		builder.addCase(getFreelancerData.fulfilled, (state,{payload}) => {
			state.freelancerData = payload.data
			// console.log(payload);
		} )
		builder.addCase(getFreelancerData.rejected, (state,action) => {
			state.loading = true
			// console.log(action);	
			} )
	}

});
export const { sidePage,modalIsActive } = FreelanceSlice.actions; /*resumeSlice.actions*/
export default FreelanceSlice.reducer;
