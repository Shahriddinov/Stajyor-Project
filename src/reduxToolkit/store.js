import {
	configureStore
} from "@reduxjs/toolkit";
import LoginSlice from "./loginSlice/LoginSlice";
import resumeSlice from "./resumeSlice/ResumeSlice";
import FreelanceSlice from "./freelancerSlice/FreelancerSlice";
import lenguage from "./lenguageSlice/LenguageSlice"
import contract from "./contractSlice/contractSlice"
import resumeControle from "./resumeControlsSlice/resumeControls"

const store = configureStore({
	reducer: {
		login: LoginSlice,
		resume: resumeSlice,
		freelance: FreelanceSlice,
		lenguage,
		contract,
		resumeControle
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export default store;