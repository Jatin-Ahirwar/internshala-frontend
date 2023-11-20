"use client"
import Footer from '@/Components/home/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const page = () => {
  const { isAuthenticated } = useSelector((state) => state.EmployeReducer)
  // const { isAuthenticated }= useSelector((state) => state.StudentReducer)
  const router = useRouter()
  useEffect(() => {
      if(isAuthenticated){
          router.push("/employe/auth")
      }
  },[isAuthenticated]) 
  return <>
    <div className='studentauth'>
      <div className='tags'>
      <h2>Employee authentication and authorization.</h2>
      <p>Create a user-friendly employee login page for your website. Ensure it's secure and easy to use. Include fields for username and password, along with a "Forgot Password" option. Implement CAPTCHA or two-factor authentication for added security. Provide clear instructions and error messages for a seamless login experience. Additionally, consider a "Remember Me" feature for convenience. </p>
      <Link className='Link' id='register' href="/employe/signin">Signin</Link>
      <Link className='Link' id='register' href="/employe/signup">Signup</Link>  
      </div>
      <img style={{ height: "50vh"}} id='stuimg' src="https://img.freepik.com/premium-vector/uiux-designer-illustration-concept-white-background_701961-878.jpg"/>
    </div>
    <Footer />
  </>
}

export default page

