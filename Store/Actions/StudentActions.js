import axios from "@/utils/axios";
import { addstudent,removestudent,addjobs,addinternships,iserror,removeerror ,addsingleinternships } from "../Reducers/StudentReducer";

export const asynccurrentstudent = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student")
       dispatch(addstudent(data.student))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncsignupstudent = (student) => async(dispatch,getstate) =>{
        try {
            const { data } = await axios.post("/student/signup", student )
            asynccurrentstudent()      
        } catch (error) {
            dispatch(iserror(error.response.data.message))
        }
}


export const asyncinstudent = (student) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/signin" , student)
        asynccurrentstudent()      
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}



export const asyncsignoutstudent = (student) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.get("/student/signout" , student)
        dispatch(removestudent())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncstudentupdate = (student) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().StudentReducer.student
        const { data } = await axios.post("/student/update/" + _id , student)
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}



export const asyncstudentavatar = (avatar) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().StudentReducer.student
        const { data } = await axios.post(`/student/avatar/${_id}`, avatar)
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        // dispatch(iserror(error.response.data.message))
    }
}



export const asyncresetpassword = (password) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().StudentReducer.student
        const { data } = await axios.post("/student/reset-password/" + _id , password)
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncforgetpassword = (email) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/send-mail" ,  email)
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncotpstudentpassword = (newpass) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/forget-link" ,  newpass)
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncshowinternships = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/read/internships/"  )
        dispatch(addinternships(data.internships))
        dispatch(asynccurrentstudent())

    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

// 
export const asyncshowsingleinternships = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/readsingleinternship/" + id  )
        console.log(data)
        dispatch(addsingleinternships(data.internship))
        dispatch(asynccurrentstudent())

    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncshowjobs = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/read/jobs/"  )
        dispatch(addjobs(data.jobs))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}




export const asyncapplyjobstudent = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/apply/job/" + id  )
        dispatch(asynccurrentstudent())
        dispatch(addjobs())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncapplyinternshipstudent = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/apply/internship/" + id  )
        dispatch(asynccurrentstudent())
        dispatch(addinternships())

    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}
