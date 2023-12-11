"use client"
import { asynccurrentstudent, asyncsignoutstudent } from '@/Store/Actions/StudentActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const StudentLayout = ({children}) => {
    const dispatch = useDispatch()
    const { isAuthenticated,student }= useSelector((state) => state.StudentReducer)
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
    <div className='mainnav'>
        <div className='mainnavleft'>
          <Link className='Link' href="/">
            <img src="https://internshala.com//static/images/internshala_og_image.jpg" alt="" />
          </Link>
        </div>
        <div className='mainnavright'>
          <Link className='Link' href="/student/auth/internships">Internships <i class="ri-arrow-down-s-fill"></i></Link>            
          <Link className='Link' href="/student/auth/jobs">Jobs <i class="ri-arrow-down-s-fill"></i></Link>            
          <Link className='Link' href="">Courses <span>OFFER</span> <i class="ri-arrow-down-s-fill"></i></Link>            
          {isAuthenticated ? 
          <>
          <Link className='bookmark' href=""><i class="ri-bookmark-line"></i></Link>
          <Link className='bookmark' href=""><i class="ri-message-2-line"></i></Link>
          <div className='profilediv'>
            <div className="circle">
            <span className='emailtag'>{student?.firstname.charAt(0)}</span>
                <div className="hidden-nav">
                    <h6>{student?.email}</h6>
                    <a href="#">Item 2</a>
                    <a href="#">Item 3</a>
                </div>
              </div>
              <i id='downn' class="ri-arrow-down-s-fill"></i>
          </div>
          {/* <Link id='login' className='Link' href={isAuthenticated ? "/student/auth" : "/student"}>Home</Link>
          <Link id='register' className='Link' href="/student/auth/profile">profile</Link>
          <Link id='login' onClick={signoutHandler} className='Link' href="">Logout</Link> */}
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

