import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import resumeSlice from "./ResumeSlice";
import FreelanceSlice from "./ResumeSlice";

const store = configureStore({
	reducer: {
		login: LoginSlice,
		resume: resumeSlice,
		freelance: FreelanceSlice
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export default store;
