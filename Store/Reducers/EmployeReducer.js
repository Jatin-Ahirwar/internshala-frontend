import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employe:null,
    jobs:null,
    internships:null,
    errors:[],
    isAuthenticated:false
}

export const EmployeReducer = createSlice({
    name: 'employe',
    initialState,
    reducers: {
    addemploye: (state,action) =>{
    (state.employe = action.payload),
    (state.isAuthenticated = true)
    },
    addjobs: (state,action) =>{
    state.jobs = action.payload
    },
    addinternships: (state,action) =>{
    state.internships = action.payload
    },
    removeemploye: (state,action) =>{
    (state.employe = null),
    (state.isAuthenticated = false)
    state.errors = []
    },
    iserror: (state,action) =>{
        state.errors.push(action.payload)
    },  
    removeerror: (state,action) =>{
        state.errors = []
    },   
  },
})

export const { addemploye , removeemploye , iserror , removeerror , addjobs , addinternships } = EmployeReducer.actions

export default EmployeReducer.reducer