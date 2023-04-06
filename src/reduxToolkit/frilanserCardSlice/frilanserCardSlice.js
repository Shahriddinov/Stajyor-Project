import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    freelancer:{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        address:{
            street:"",
            region: "",
            country:""
        },
        position: "",
        bio:"",
        skiils:[],
        hobbies:[],
        language:[],
        contacts:{
            whatsapp:"",
            facebook:"",
            instagram:"",
            telegram:"",
            github:"",
            twitter:""
        }
    }
}

const freelancerSlice = createSlice({
    name: "freelancer",
    initialState,
    reducers:{
        firstStep:(state, action)=>{
           state.freelancer.firstName = action.payload.firstName
           state.freelancer.lastName = action.payload.lastName
           state.freelancer.email = action.payload.email
           state.freelancer.phoneNumber = action.payload.phoneNumber
           console.log(state.freelancer.firstName)
        }
    }
})

export const {firstStep} =  freelancerSlice.actions
export default freelancerSlice.reducer