"use client"
import { asynccurrentstudent, asyncsignoutstudent } from '@/Store/Actions/StudentActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const StudentLayout = ({children}) => {
    const dispatch = useDispatch()
    const { isAuthenticated }= useSelector((state) => state.StudentReducer)
    // console.log(isAuthenticated)
    const router = useRouter()
    useEffect(() => {
        dispatch(asynccurrentstudent())
        if(isAuthenticated){
            router.push("/student/auth")
        }
    },[isAuthenticated])  
    const signoutHandler = ()=>{
        dispatch(asyncsignoutstudent())
    }

  return <>
{/*     
    <nav className='d-flex justify-content-between'>
    <p><Link href={isAuthenticated ? "/student/auth" : "/student"}>Home</Link></p>
        {isAuthenticated ?
        <>
            <p><Link  href="/student/auth/profile">Profile</Link></p>            
            <p><Link onClick={signoutHandler} href="">Signout</Link></p>            
        </>
         :
        <>
            <p><Link href="/student/signup">Signup</Link></p>
            <p><Link href="/student/signin">Signin</Link></p>
        </>
        }
    </nav> */}
    <div className='mainnav'>
        <div className='mainnavleft'>
            <Link className='Link' href="/">
              <img src="https://internshala.com//static/images/internshala_og_image.jpg" alt="" />
            </Link>
            <Link className='Link' href="">Internships <i class="ri-arrow-down-s-fill"></i></Link>            
            <Link className='Link' href="">Jobs <i class="ri-arrow-down-s-fill"></i></Link>            
            <Link className='Link' href="">Courses <span>OFFER</span> <i class="ri-arrow-down-s-fill"></i></Link>            
        </div>
        <div className='mainnavright'>
          <Link className='Link' href="">
            <div className='search'> 
            <i class="ri-search-line"></i>
            <h6>Search</h6>
            </div>
          </Link>
          {isAuthenticated ? 
          <>
          <Link id='login' className='Link' href={isAuthenticated ? "/student/auth" : "/student"}>Home</Link>
          <Link id='register' className='Link' href="/student/auth/profile">profile</Link>
          <Link id='login' onClick={signoutHandler} className='Link' href="">Logout</Link>
          </>  
          :
          <>
          <Link id='login' className='Link' href="/student/signin">Login</Link>
          <Link id='register' className='Link' href="/student/signup">Register</Link>
          <div className='line'></div>
          <Link id='employe' className='Link' href="/employe">Hire Talent</Link>
          </>
          }
        </div>
    </div>
    {children}
  </>
}

export default StudentLayout

