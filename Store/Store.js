import { configureStore } from '@reduxjs/toolkit'
import  EmployeReducer  from './Reducers/EmployeReducer'
import  StudentReducer from './Reducers/StudentReducer'

export const store = configureStore({
  reducer: {
    StudentReducer,
    EmployeReducer
  },
})