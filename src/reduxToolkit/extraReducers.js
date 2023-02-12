import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CREATECONTRACT, DAGAVOR, DAGAVORITEM, LOG_IN, REGISTER, RESUMEFINISH, RESUMESELECT } from "./URLS";
const token = window.localStorage.getItem("token");

/////////////////////////////////////REGISTER POST///////////////////////
export const registerRequest = createAsyncThunk("token/register", async payload => {
	return axios({
		method:"POST",
		url:REGISTER,
		data: payload,
		headers:{
			"Content-Type": "application/json-patch+json",
		}
	}).then(res => res.data)
	
});

/////////////////////////////////////LLOGIN POST///////////////////////
export const logInRequest = createAsyncThunk("token/logIn", async payload => {
	return axios({
		method:"POST",
		url:LOG_IN,
		data: {
			email: payload.email,
			password: payload.password,
			confirmPassword: payload.password
		},
		headers:{
			"Content-Type": "application/json-patch+json",
		}
	}).then(res => res.data)
});

/////////////////////////////////////RESUME FINISH POST///////////////////////
export const resumeFinishPost = createAsyncThunk("resume/resumeFinish", async payload => {
	return axios({
		method:"PUT",
		url: RESUMEFINISH,
		data: payload,
		headers:{
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
		
});


///////////////////////////RESUMESELECT POST///////////////////////
const resumeSelect = createAsyncThunk("freelancer/resumeSelect", async payload => {
	return axios({
		method: "PUT",
		url: RESUMESELECT,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////CONTRACT CREATE POST///////////////////
export const contractCreate = createAsyncThunk("contract/createContract", async payload => {
	return axios({
		method: "POST",
		url: CREATECONTRACT,
		data: payload,
		headers:{
			'Content-Type': 'application/json-patch+json',
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
})

///////////////////////////DAGAVOR ITEM GET///////////////////
export const dagavorItem = createAsyncThunk("contract/dagavorItem", async payload => {
	return axios({
		method: "GET",
		url: DAGAVORITEM + payload,
		headers:{
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
})

///////////////////////////DAGAVOR POST///////////////////
export const dagavor = createAsyncThunk("contract/dagavor", async payload => {
	return axios({
		method: "POST",
		url: DAGAVOR,
		data: payload,
		headers:{
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
})
export {resumeSelect}