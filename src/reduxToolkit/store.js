import {
	configureStore
} from "@reduxjs/toolkit";
import LoginSlice from "./loginSlice/LoginSlice";
import resumeSlice from "./resumeSlice/ResumeSlice";
import FreelanceSlice from "./freelancerSlice/FreelancerSlice";
import lenguage from "./lenguageSlice/LenguageSlice"
import contract from "./contractSlice/contractSlice"
import resumeControle from "./resumeControlsSlice/resumeControls"
import companyRegister from "./companyRegister/companyRegister";
import JobsSlice from "./jobsSlice/JobsSlice";
import projectSlice from "./resumeSlice/projectSlice";
import frilanserCardSlice from "./frilanserCardSlice/frilanserCardSlice";

import storage from 'redux-persist/lib/storage';
import {combineReducers} from "@reduxjs/toolkit";

import { 
	persistStore,
	 persistReducer,
	 FLUSH,
	 REHYDRATE,
	 PAUSE,
	 PERSIST,
	 PURGE,
	 REGISTER,
   } from 'redux-persist'



   const rootReducer = combineReducers({
	login: LoginSlice,
	resume: resumeSlice,
	freelance: FreelanceSlice,
	lenguage,
	contract,
	resumeControle,
	companyRegister,
	jobs: JobsSlice,
	project: projectSlice,
	frilanserCardSlice:frilanserCardSlice
  })


  const persistConfig = {
	key: 'root',
	storage,
  }
const persistedReducer  = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
export default store;