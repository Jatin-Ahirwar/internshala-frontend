"use client"
import Footer from '@/Components/home/Footer'
import '../../../css/otp.css'
import { asyncotpstudentpassword } from '@/Store/Actions/StudentActions'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'


const otp = () => {
  const { errors } = useSelector((state) =>state.StudentReducer)
  const [otp, setotp] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const router = useRouter()
  const dispatch = useDispatch()
    const sendotpHandler = async(e)=>{ 
      const newpass = {
        email ,
        otp,
        password
      }
      e.preventDefault()
      await dispatch(asyncotpstudentpassword(newpass))
      if(errors[0] === "Please login with your account"){
            router.push("/student/signin")
        }
        else{
          toast.error(JSON.stringify(errors))
        }
    }
  return <>
    <div className='otp'>
      <div className='otpbox'>
        <h3>Create New Password</h3>
      <form onSubmit={sendotpHandler}>
        <label>Verification Code</label>
        <input required onChange={(e)=>setotp(e.target.value)} type="text" placeholder='Enter Verification code' />
        <label>Email</label>
        <input required onChange={(e)=>setemail(e.target.value)} type="text" placeholder='Enter Email' />
        <label>Password</label>
        <input required onChange={(e)=>setpassword(e.target.value)} type="text" placeholder='Enter New Password '/>
      <button type='submit' >Change Password</button>
      </form>
      </div>
    </div>
    <Footer />
  </>
}

export default otp