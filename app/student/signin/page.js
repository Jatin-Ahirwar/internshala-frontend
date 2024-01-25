"use client"
import Footer from '@/Components/home/Footer'
import { asyncinstudent } from '@/Store/Actions/StudentActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const signin = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.StudentReducer)
  const router = useRouter()

  // const submitHandler = (e)=>{
  //   e.preventDefault()
  //   console.log(email,password)
  // }
  const signinHandler = (e)=>{
    e.preventDefault()
    const student = {
      email,password
    }
    // alert("invalid user")
    dispatch(asyncinstudent(student))
  }
  useEffect(() => {
    if(isAuthenticated){
        router.push("/student/auth")
    }
  },[isAuthenticated])  
  return <>
    <div className='authenticate'>
      <img src="https://img.freepik.com/premium-vector/project-development-specifications-concept-business-analysis-software-requirement-description_566886-8427.jpg" alt="" />
      <div className='signinform'>
        <h3>Student SignIn</h3>
        <h6>Signin to access resources</h6>
        <form onSubmit={signinHandler} >
          <label>email</label>
          <input onChange={(e)=> setemail(e.target.value)}  type="text" name='email' placeholder='user123@gmail.com' />
          <label>password</label>
          <input onChange={(e)=> setpassword(e.target.value)} type="text" name='password' placeholder='**********' />
          <button className='btn btn-primary' type='submit'>SignIn</button>
        </form>
        <Link id='forgetpass' className='Link' href="/student/forget">forget password ?</Link>
      </div>    
    </div>
    <Footer />
    {/* <div className='container mt-5'>
      <button onClick={signinHandler} className='btn btn-primary '>signin</button>
      <Link href="/student/forget">forget password?</Link>
    </div> */}
    </>
}

export default signin