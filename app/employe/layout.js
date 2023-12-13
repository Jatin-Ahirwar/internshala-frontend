"use client"
import { asynccurrentemploye, asyncsignoutemploye } from '@/Store/Actions/EmployeActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const StudentLayout = ({children}) => {
    const dispatch = useDispatch()
    const { isAuthenticated,employe } = useSelector((state)=> state.EmployeReducer)
    // console.log(isAuthenticated)
    const router = useRouter()
    useEffect(() => {
        dispatch(asynccurrentemploye())
        if(isAuthenticated){
            router.push("/employe/auth")
        }
    },[isAuthenticated])  
    const signoutHandler = ()=>{
        dispatch(asyncsignoutemploye())
    }

  return <>

    <div className='mainnav'>
        <div className='mainnavleft'>
            <Link className='Link' href={isAuthenticated ? "/employe/auth" : "/"}>
              <img src="https://internshala.com//static/images/internshala_og_image.jpg" alt="" />
            </Link>
        </div>
        <div className='mainnavright'>
          <Link className='Link' href="">Internships <i class="ri-arrow-down-s-fill"></i></Link>            
          <Link className='Link' href="">Jobs <i class="ri-arrow-down-s-fill"></i></Link>            
          <Link className='Link' href="">Courses <span>OFFER</span> <i class="ri-arrow-down-s-fill"></i></Link>            
          {isAuthenticated ? 
          <>
          <Link className='bookmark' href=""><i class="ri-bookmark-line"></i></Link>
          <Link className='bookmark' href=""><i class="ri-message-2-line"></i></Link>
          <div className='profilediv'>
            <div className="circle">
            <span className='emailtag'>{employe?.firstname.charAt(0)}</span>
                <div className="hidden-nav">
                    <div className='hiddentop'>
                        <h6 style={{textTransform:"capitalize"}}>{employe?.firstname} {employe?.lastname}</h6>
                        <p>{employe?.email}</p>
                    </div>
                    <div className='linnee'>
                      <Link className='Link' id='hiddenlinks' href={isAuthenticated ? "/employe/auth" : "/employe"}>Home</Link>
                      <Link className='Link' id='hiddenlinks' href="/employe/auth/myapplications">My Applications</Link>
                      <Link className='Link' id='hiddenlinks' href="/employe/auth/profile">Edit Profile</Link>
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

