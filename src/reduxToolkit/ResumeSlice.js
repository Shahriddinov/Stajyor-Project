import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {LANGUAGESUPLOAD, CONTACTSUPLOAD, PHOTO, COUNTRYLIST, COUNTRY_LIST_UPLOAD, POSITIONS, HOBBIES, POSITION_POST, LANGUAGES, EXPERIENCE, EXPERIENCEDELETE, EDUCATION, EDUCATIONDELETE } from "./URLS";

const initialState = {
	loading: false,
	error: "",
	data: [],
	countryList: [],
	positionList: [],
	hobbiesList: [],
	languageList: [],
	experienceList: [],
	educationList: [],
	photoPage: true,
	countryPage: false,
	yourselfPage: false,
	languagePage: false,
	experiencePage: false,
	newExperiencePage:false,
	educationPage: false,
	createEducationPage: false,
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

// export const positionUpload = createAsyncThunk("token/positionUpload", async payload => {
// 	const token = window.localStorage.getItem("token");
// 	return axios({
// 		method: "post",
// 		url: POSITION_POST,
// 		// data: {
// 		// 	description: payload.description,
// 		// 	positionId: payload.positionId,
// 		// 	freelancerHobbies: payload.freelancerHobbies,
// 		// 	freelancerSkills: payload.freelancerSkills
// 		// },
// 		data: {
// 			description: "test",
// 			positionId: 1,
// 			freelancerHobbies: [0],
// 			freelancerSkills: [0]
// 		},
// 		headers: {
// 			Authorization: `bearer ${token}`
// 		}
// 	}).then(response => {
// 		return response.data;
// 	});
// });

export const languages = createAsyncThunk("get/languages", async () => {
	return axios.get(LANGUAGES).then(response => {
		return response.data;
	});
});

export const languageUpload = createAsyncThunk("token/languageUpload", async payload => {
	const token = window.localStorage.getItem("token");
	return axios({
		method: "post",
		url: LANGUAGESUPLOAD,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data;`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

export const contactUpload = createAsyncThunk("token/contactUpload", async payload => {
	const token = window.localStorage.getItem("token");
	return axios({
		method: "put",
		url: CONTACTSUPLOAD,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data;`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////Experience post//////////

export const exsperiencePost = createAsyncThunk("post/exsperiencePost", async payload => {
	const token = window.localStorage.getItem("token");

	return axios({
		method: "POST",
		url: EXPERIENCE,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data;`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});


////////////////////////////Experience get//////////

export const exsperienceGet = createAsyncThunk("post/exsperienceGet", async payload => {
	const token = window.localStorage.getItem("token");
	return axios({
		method: "GET",
		url: EXPERIENCE,
		headers: {
			"Content-Type": `application/json`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});


////////////////////////////Experience Delete//////////

export const  exsperienceDelete = createAsyncThunk("post/exsperienceDelete", async payload => {
	const token = window.localStorage.getItem("token");

	console.log(payload);
	return axios({
		method: "DELETE",
		url: EXPERIENCEDELETE + payload,
		headers: {
			"Content-Type": `application/json`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});


///////////////////////////EDUCATION POST//////////

export const educationPost = createAsyncThunk("freelancer/educationPost", async payload => {
	const token = window.localStorage.getItem("token");

	return axios({
		method: "POST",
		url: EDUCATION,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});


///////////////////////////EDUCATION GET//////////

export const educationGet = createAsyncThunk("freelancer/educationGet", async payload => {
	const token = window.localStorage.getItem("token");

	return axios({
		method: "GET",
		url: EDUCATION,
		headers: {
			"Content-Type": `application/json`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});


///////////////////////////EDUCATION DELETE//////////

export const educationDelete = createAsyncThunk("freelancer/educationDelete", async payload => {
	const token = window.localStorage.getItem("token");

	return axios({
		method: "Delete",
		url: EDUCATIONDELETE + payload,
		data: payload,
		headers: {
			"Content-Type": `application/json`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

const resumeSlice = createSlice({
	name: "resume",
	initialState,
	reducers: {
		temporary: state => {
			console.log("tem working");
			state.yourselfPage = false;
			state.languagePage = true;
		},
		temporary2: state => {
			console.log("experiens page none, new experience page active")
			state.experiencePage = false;
			state.newExperiencePage = true;
			state.educationPage = false;
			state.createEducationPage = false;
		},
		temporary3: state => {
			console.log("experiens page none, aducation page active")
			state.experiencePage = false;
			state.educationPage = true;
		},
		temporary4: state => {
			console.log("experiens page true, aducation page false")
			state.experiencePage = true;
			state.educationPage = false;
		},
		temporary5: state => {
			console.log("experiens page active, new experience page none")
			state.experiencePage = true;
			state.newExperiencePage = false;
		},
		temporary6: state => {
			console.log("aducation page none, add education page activa")
			state.educationPage = false;
			state.createEducationPage = true
		},
		temporary7: state => {
			console.log("aducation page active, add education page none")
			state.educationPage = true;
			state.createEducationPage = false;
		},
		temporary8: state => {
			console.log("aducation page none, resume page activa")
			state.educationPage = false;
			state.resumePage = true;
		}

	},
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
		// builder.addCase(positionUpload.pending, (state, action) => {
		// 	state.loading = true;
		// });
		// builder.addCase(positionUpload.fulfilled, (state, action) => {});
		// builder.addCase(positionUpload.rejected, (state, action) => {
		// 	state.loading = false;
		// 	state.error = action.error.message;
		// });

		//Languages List reducer
		builder.addCase(languages.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(languages.fulfilled, (state, action) => {
			state.languageList = action.payload.data;
			state.languagePage = false;
			state.experiencePage = true
		});
		builder.addCase(languages.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		//Languages upload reducer
		builder.addCase(languageUpload.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(languageUpload.fulfilled, (state, action) => {
			state.languagePage = false;
			state.experiencePage = true;
		});
		builder.addCase(languageUpload.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		//Experiens post reducer

		builder.addCase(exsperiencePost.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(exsperiencePost.fulfilled, (state, {type,payload}) => {
			state.experiencePage = true;
			state.newExperiencePage = false;

		});
		builder.addCase(exsperiencePost.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		//Experiens get reducer

		builder.addCase(exsperienceGet.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(exsperienceGet.fulfilled, (state, {type,payload}) => {
			state.experienceList = payload.data
			state.loading = false;

		});
		builder.addCase(exsperienceGet.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
			state.experienceList = []
		});

		//Experiens delete reducer

		builder.addCase(exsperienceDelete.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(exsperienceDelete.fulfilled, (state, {type,payload}) => {
			state.loading = false;
		});
		builder.addCase(exsperienceDelete.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});


////////////////////////////////////EDUCATION POST REDUCER//////////////////////
		builder.addCase(educationPost.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(educationPost.fulfilled, (state, {type,payload}) => {
			state.createEducationPage = false;
			state.educationPage = true;
			console.log(payload);

		});
		builder.addCase(educationPost.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
			console.log(action.error.message);
		});

		////////////////////////////////////EDUCATION GET REDUCER//////////////////////
		builder.addCase(educationGet.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(educationGet.fulfilled, (state, {type,payload}) => {
			state.educationList = payload.data

		});
		builder.addCase(educationGet.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
			state.educationList = []
		});

		////////////////////////////////////EDUCATION DELETE REDUCER//////////////////////

		builder.addCase(educationDelete.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(educationDelete.fulfilled, (state, {type,payload}) => {
			state.loading = false;
		});
		builder.addCase(educationDelete.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	}
});
export const { temporary,temporary2,temporary3,temporary4,temporary5,temporary6,temporary7,temporary8} = resumeSlice.actions;
export default resumeSlice.reducer;
