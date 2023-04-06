import { createAction } from "@reduxjs/toolkit"

// const ADD_USER = "ADD_USER"

//  const addUser = (payload)=> ({
//     type: ADD_USER,
//     payload,
// })

export const addUser = createAction('addUser')
export const yourCompany = createAction('yourCompany')
export const companyLocation = createAction('companyLocation')
export const companyContacts = createAction('companyContacts')
