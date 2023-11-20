"use client"
import Footer from '@/Components/home/Footer'
import '../../css/forget.css'
import { asyncforgetpassword } from '@/Store/Actions/StudentActions'
import { useRouter } from 'next/navigation'
// import { StudentReducer } from '@/Store/Reducers/StudentReducer'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const forget = () => {
    const [email, setemail] = useState()
    const router = useRouter()
    const dispatch = useDispatch()
    const { errors } = useSelector((state) =>state.StudentReducer)
    const sendmailhandler = async (e)=>{
        e.preventDefault()
        const sendmail = {
            email:email
        }
        // console.log(sendmail)
        await dispatch(asyncforgetpassword(sendmail))
        if(errors[0] === "Please login with your account" ){
            router.push("/student/forget/otp")
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