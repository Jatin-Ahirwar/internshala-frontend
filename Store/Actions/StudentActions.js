import axios from "@/utils/axios";
import { addjob, addstudent,removestudent,addjobs,addinternships,iserror,removeerror ,addsingleinternships, addinternship } from "../Reducers/StudentReducer";
import { toast } from "react-toastify";

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
            dispatch(asynccurrentstudent())      
            toast.success("Successfully Signed Up.")      

        } catch (error) {
            dispatch(iserror(error.response.data.message))
        }
}


export const asyncinstudent = (student) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/signin" , student)
        dispatch(asynccurrentstudent())
        toast.success("Successfully Logged In.")      
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}



export const asyncsignoutstudent = (student) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.get("/student/signout" , student)
        dispatch(removestudent())
        toast.success(data.message)      
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncforgetpassword = (email) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/send-mail" ,  email)
        dispatch(asynccurrentstudent())
        toast.success(data.message)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}


export const asyncotpstudentpassword = (newpass) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/forget-link" ,  newpass)
        dispatch(asynccurrentstudent())
        toast.success(data.message)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}


export const asyncresetpassword = (password) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().StudentReducer.student
        const { data } = await axios.post("/student/reset-password/" + _id , password)
        dispatch(asynccurrentstudent())
        toast.success("Password reset done.")
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}


export const asyncstudentupdate = (student) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().StudentReducer.student
        const { data } = await axios.post("/student/update/" + _id , student)
        dispatch(asynccurrentstudent())
        toast.success("Details Updated Successfully.")      
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}


export const asyncstudentavatar = (avatar) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().StudentReducer.student
        const { data } = await axios.post(`/student/avatar/${_id}`, avatar)
        dispatch(asynccurrentstudent())
        toast.success("Profile Image Updated Successfully.")      
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncshowinternships = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/read/internships/"  )
        dispatch(addinternships(data.internships))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}

export const asyncshowsingleinternships = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/readsingleinternship/" + id  )
        dispatch(addinternship(data.internship))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}

export const asyncapplyinternshipstudent  = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/apply/internship/" + id  )
        dispatch(asyncshowsingleinternships(id))
        toast.success(data.message)
        dispatch(asynccurrentstudent())
        dispatch(asyncshowinternships())
    }  catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}


export const asyncshowjobs = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/read/jobs/"  )
        dispatch(addjobs(data.jobs))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}


export const asyncshowsinglejob = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/readsinglejob/" + id  )
        dispatch(addjob(data.job))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}
export const asyncapplyjobstudent = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/student/apply/job/" + id  )
        dispatch(asynccurrentstudent())
        dispatch(asyncshowsinglejob(id))
        toast.success(data.message)
        dispatch(asyncshowjobs())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}
