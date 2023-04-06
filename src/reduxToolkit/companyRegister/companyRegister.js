import {
    createSlice
} from "@reduxjs/toolkit"
import { addUser, companyContacts, companyLocation, yourCompany } from "./companyRegisterActions"
// import { addCompanyContacts, addCompanyInformation, addCompanyLocation, createCompanyUserPost } from "reduxToolkit/extraReducers"


const initialState = {
    activeDote: {
        id: 1,
        label: "Company Information"
    },
    activeCard: {
        id: 1,
        label: "information"
    },
    loading: false,
    error: null,
    contactsIsSuccess: '',
    userData: {}
}

const companyRegister = createSlice({
    name: "companyRegister",
    initialState,
    reducers: {
        activeDoteAction: (state, {
            payload
        }) => {
            state.activeDote = payload[0]
            state.activeCard = payload[1]
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addUser, (state, action) => {
            state.userData = action.payload
            console.log(state.userData)
        })
        builder.addCase(yourCompany, (state, { payload }) => {
            state.userData = { ...state.userData, ...payload }
            console.log(state.userData)
        })
        builder.addCase(companyLocation, (state, { payload }) => {
            state.userData = { ...state.userData, ...payload }
            console.log(state.userData)
        })
        builder.addCase(companyContacts, (state, { payload }) => {
            state.userData = { ...state.userData, ...payload }
            console.log(state.userData)
        })
    }
})

export const {
    activeDoteAction,
    activeCardAction
} = companyRegister.actions

export default companyRegister.reducer