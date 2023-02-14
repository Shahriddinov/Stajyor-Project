import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import resumeSlice from "./ResumeSlice";
import FreelanceSlice from "./FreelancerSlice";
import lenguage  from "./LenguageSlice"
import contract from "./contractSlice"

const store = configureStore({
	reducer: {
		login: LoginSlice,
		resume: resumeSlice,
		freelance: FreelanceSlice,
		lenguage,
		contract,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export default store;
