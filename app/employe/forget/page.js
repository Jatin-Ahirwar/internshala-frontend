"use client"
import Footer from '@/Components/home/Footer'
import '../../css/forget.css'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmployeReducer from '@/Store/Reducers/EmployeReducer'
import { asyncforgetpassword } from '@/Store/Actions/EmployeActions'

const forget = () => {
    const [email, setemail] = useState()
    const router = useRouter()
    const dispatch = useDispatch()
    const { errors } = useSelector((state) =>state.EmployeReducer)
    const sendmailhandler = async (e)=>{
        e.preventDefault()
        const sendmail = {
            email:email
        }
        // console.log(sendmail)
        await dispatch(asyncforgetpassword(sendmail))
        // if(errors[0] === "jwt expired" ){
        if(errors.length < 10 ){
            router.push("/employe/forget/otp")
        }
        else{
            console.log(errors[0])
        }
    }
  return <>
    <div className='sendmaildiv'>
        <div className='forgetpasswordform'>
            <h4>Forget Password</h4>
            <p>Please enter your e-mail address. You will receive an e-mail along with a link which can be used to reset your password.</p>
        <form onSubmit={sendmailhandler}>
            <label>Email</label>
            <input required onChange={(e)=> setemail(e.target.value)} type="text" placeholder='Your email' />
        <button type='submit' className='sendmail'>Send Mail</button>
        <h6>I am not receiving password reset email. <span>Need help?</span></h6>
        </form>
        </div>
    </div>
        <Footer />
    </>
}

export default forget