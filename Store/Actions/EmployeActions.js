import axios from "@/utils/axios";
import { addemploye,removeemploye,addjobs,addinternships,iserror,removeerror } from "../Reducers/EmployeReducer";
import { toast } from "react-toastify";

export const asynccurrentemploye = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/employe")
        dispatch(addemploye(data))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncsignupemploye = (employe) => async(dispatch,getstate) =>{
        try {
            const { data } = await axios.post("/employe/signup", employe )
            dispatch(asynccurrentemploye())
            toast.success("Employe Account Created Successfully.")      
        } catch (error) {
            dispatch(iserror(error.response.data.message))
            toast.error(error.response.data.message)
        }
}


export const asyncinemploye = (employe) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/signin" , employe)
        dispatch(asynccurrentemploye())      
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}



export const asyncsignoutemploye = (employe) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.get("/employe/signout" , employe)
        dispatch(removeemploye())
        toast.success(data.message)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncemployeupdate = (employe) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().EmployeReducer.employe
        const { data } = await axios.post("/employe/update/" + _id , employe)
        dispatch(asynccurrentemploye())
        toast.success(data.message)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}



export const asyncemployeavatar = (avatar) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().EmployeReducer.employe
        const { data } = await axios.post(`/employe/avatar/${_id}` , avatar)
        dispatch(asynccurrentemploye())
        toast.success(data.message)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}

// export const asyncemployeavatar = (avatar) => async(dispatch,getstate) =>{
//     try {
//         const { _id } = await getstate().employeReducer.employe
//         const { data } = await axios.post(`/employe/avatar/${_id}` , avatar)
//         dispatch(asynccurrentemploye())
//     } catch (error) {
//         dispatch(iserror(error.response.data.message))
//         // dispatch(iserror(error.response.data.message))
//     }
// }



export const asyncresetpassword = (password) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().employeReducer.employe
        const { data } = await axios.post("/employe/reset-password/" + _id , password)
        dispatch(asynccurrentemploye())
        toast.success(data.message)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncforgetpassword = (email) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/send-mail" ,  email)
        dispatch(asynccurrentemploye())
        toast.success(data.message)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}



export const asyncotpemployepassword = (newpass) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/forget-link" ,  newpass)
        dispatch(asynccurrentemploye())
        toast.success(data.message)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}

export const asyncshowinternships = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/read/internships/"  )
        dispatch(addinternships(data.internships))
        dispatch(asynccurrentemploye())

    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncshowjobs = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/read/jobs/"  )
        dispatch(addjobs(data.jobs))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}

export const asyncshowsingleinternships = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/readsingle/internship/" + id  )
        dispatch(addinternships(data.internship))
        dispatch(asynccurrentemploye())

    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}

export const asyncCreateInternship = (internship) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/internship/create" , internship  )
        dispatch(asynccurrentemploye())
        toast.success("Internship Created Successfully")


    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}

export const asyncCreatejob = (job) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/job/create" , job  )
        dispatch(asynccurrentemploye())
        toast.success("Job Created Successfully")
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)

    }
}





