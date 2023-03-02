import { createSlice } from "@reduxjs/toolkit";
import { talantsData } from 'reduxToolkit/extraReducers';

const initialState = {
    loading: false,
    error: '',
    data: []
}


const talantSlice = createSlice({
    name: 'talant',
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder.addCase(talantsData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(talantsData.fulfilled, (state, action) => {
            state.data = action.payload.data
            state.loading = false
        })
        builder.addCase(talantsData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})



export default talantSlice.reducer