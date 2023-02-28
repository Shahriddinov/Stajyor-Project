import {
	configureStore
} from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import resumeSlice from "./ResumeSlice";
import FreelanceSlice from "./FreelancerSlice";
import lenguage from "./LenguageSlice"
import contract from "./contractSlice"
import resumeControle from "./resumeControls"
import companyRegister from "./companyRegister";

const store = configureStore({
	reducer: {
		login: LoginSlice,
		resume: resumeSlice,
		freelance: FreelanceSlice,
		lenguage,
		contract,
		resumeControle,
		companyRegister,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export default store;