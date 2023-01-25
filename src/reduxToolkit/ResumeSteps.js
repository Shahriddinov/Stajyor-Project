import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const resumeSlice = createSlice({
	name: "image",
	initialState,
    reducers: {
    chooseWedding: (state) => {
      state.birthday = false;
      state.wedding = true;
      state.birthdayCard = false;
      state.weddingCard = true;
    }
});

export default resumeSlice.reducer;
