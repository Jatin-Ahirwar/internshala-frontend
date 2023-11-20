"use client"
import Footer from '@/Components/home/Footer'
import { asyncinemploye } from '@/Store/Actions/EmployeActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const signin = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()
  const { isAuthenticated }= useSelector((state) => state.EmployeReducer)
  const router = useRouter()

  // const submitHandler = (e)=>{
  //   e.preventDefault()
  //   console.log(email,password)
  // }
  const signinHandler = (e)=>{
    e.preventDefault()
    const employe = {
      email,password
    }
    dispatch(asyncinemploye(employe))
  }
  useEffect(() => {
    if(isAuthenticated){
        router.push("/employe/auth")
    }
  },[isAuthenticated])  
  return <>
    <div className='authenticate'>
      <img style={{height: "50vh"}} src="https://static.vecteezy.com/system/resources/thumbnails/020/811/041/small_2x/business-meeting-team-conference-in-office-room-flat-character-on-presentation-conference-illustration-presenting-charts-and-reports-employees-meeting-at-business-training-seminar-or-conference-free-vector.jpg" alt="" />
      <div className='signinform'>
        <h3>Employee SignIn</h3>
        <h6>Signin to access resources</h6>
        <form onSubmit={signinHandler} >
          <label>email</label>
          <input onChange={(e)=> setemail(e.target.value)}  type="text" name='email' placeholder='user123@gmail.com' />
          <label>password</label>
          <input onChange={(e)=> setpassword(e.target.value)} type="text" name='password' placeholder='**********' />
          <button className='btn btn-primary' type='submit'>SignIn</button>
        </form>
        <Link id='forgetpass' className='Link' href="/employe/forget">forget password ?</Link>
      </div>    
    </div>
    <Footer />
    
    </>
}

export default signin