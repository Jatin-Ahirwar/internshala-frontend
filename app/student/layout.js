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
          <Link className='Link' href={isAuthenticated ? "/student/auth" : "/"}>
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
                    <div className='hiddentop'>
                        <h6 style={{textTransform:"capitalize"}}>{student?.firstname} {student?.lastname}</h6>
                        <p>{student?.email}</p>
                    </div>
                    <div className='linnee'>
                      <Link className='Link' id='hiddenlinks' href={isAuthenticated ? "/student/auth" : "/student"}>Home</Link>
                      <Link className='Link' id='hiddenlinks'  href={isAuthenticated ? "/student/auth/myapplications" : "/student"}>My Applications</Link>
                      <Link className='Link' id='hiddenlinks' href="">Edit Resume</Link>
                      <Link className='Link' id='hiddenlinks' href={isAuthenticated ? "/student/auth/profile" : "/student"}>Edit Profile</Link>
                      <Link className='Link' id='hiddenlinks' href="">Change Password</Link>
                      <Link className='Link' id='hiddenlinks' href="">Delete My Account</Link>
                      <Link onClick={signoutHandler} className='Link' id='hiddenlinks' href="">Logout</Link>
                    </div>
                </div>
              </div>
              <i id='downn' class="ri-arrow-down-s-fill"></i>
          </div>
          </>  
          :
          <>
          <Link id='login' className='Link' href="/student">Student</Link>
          <Link id='register' className='Link' href="/employe">Employe</Link>
          {/* <div className='line'></div> */}
          </>
          }
        </div>
    </div>
    {children}
  </>
}

export default StudentLayout

