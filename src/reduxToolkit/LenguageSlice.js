const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    lenguage: localStorage.getItem("lengage") ? localStorage.getItem("lengage") : "uz"
}

const lenguageSlice = createSlice({
	name: "image",
	initialState,
    reducers:{
        changeLenguage: (state, {type,payload}) => {
            localStorage.setItem("lenguage", payload)
            state.lenguage = payload
        }
    }
});

export const {changeLenguage} = lenguageSlice.actions

export default lenguageSlice.reducer