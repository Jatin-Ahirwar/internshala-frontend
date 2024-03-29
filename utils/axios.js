"use client"
import axios from "axios";

const instance = axios.create({
    // baseURL:"http://localhost:3080/" || "https://internshala-backend-eceu.onrender.com/",
    // baseURL: "https://internshala-backend-eceu.onrender.com/",
    baseURL:"http://localhost:3080/",
    withCredentials:true
})


export default instance