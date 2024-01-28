import axios from "@/utils/axios";
import { addemploye,removeemploye,addjobs,addinternships,iserror,removeerror } from "../Reducers/EmployeReducer";

export const asynccurrentemploye = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/employe")
        dispatch(addemploye(data))
        // console.log("employe",data.employe)
        console.log(data)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncsignupemploye = (employe) => async(dispatch,getstate) =>{
        try {
            const { data } = await axios.post("/employe/signup", employe )
            dispatch(asynccurrentemploye())      
        } catch (error) {
            dispatch(iserror(error.response.data.message))
        }
}


export const asyncinemploye = (employe) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/signin" , employe)
        dispatch(asynccurrentemploye())      
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}



export const asyncsignoutemploye = (employe) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.get("/employe/signout" , employe)
        dispatch(removeemploye())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncemployeupdate = (employe) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().EmployeReducer.employe
        const { data } = await axios.post("/employe/update/" + _id , employe)
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}



export const asyncemployeavatar = (avatar) => async(dispatch,getstate) =>{
    try {
        const { _id } = await getstate().EmployeReducer.employe
        const { data } = await axios.post(`/employe/avatar/${_id}` , avatar)
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
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
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncforgetpassword = (email) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/send-mail" ,  email)
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}



export const asyncotpemployepassword = (newpass) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/forget-link" ,  newpass)
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}





export const asyncshowinternships = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/read/internships/"  )
        dispatch(addinternships(data.internships))
        dispatch(asynccurrentemploye())

    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

// 
export const asyncshowsingleinternships = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/readsingle/internship/" + id  )
        dispatch(addinternships(data.internship))
        dispatch(asynccurrentemploye())

    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncshowjobs = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/read/jobs/"  )
        dispatch(addjobs(data.jobs))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}




export const asyncapplyjobemploye = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/apply/job/" + id  )
        dispatch(asynccurrentemploye())
        dispatch(addjobs())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncapplyinternshipemploye = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/employe/apply/internship/" + id  )
        dispatch(asynccurrentemploye())
        dispatch(addinternships())

    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}
