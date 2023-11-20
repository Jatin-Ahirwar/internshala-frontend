"use client"
import Footer from '@/Components/home/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const page = () => {
  const { isAuthenticated }= useSelector((state) => state.StudentReducer)
  const router = useRouter()
  useEffect(() => {
      if(isAuthenticated){
          router.push("/student/auth")
      }
  },[isAuthenticated]) 
  return <>
    <div className='studentauth'>
      <div className='tags'>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea ipsum accusamus, accusantium itaque veritatis tenetur earum laudantium eligendi aperiam, aliquid quam beatae vero labore ut corrupti fugit qui animi consequuntur. Ullam, quisquam quaerat fugit facere natus aut quidem, maiores dignissimos dolor ad nihil minima cupiditate veritatis excepturi explicabo autem.</p>
      <Link className='Link' id='register' href="/student/signin">Signin</Link>
      <Link className='Link' id='register' href="/student/signup">Signup</Link>  
      </div>
      <img id='stuimg' src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=1060&t=st=1696524982~exp=1696525582~hmac=5f66deb129e18984265b74dc48560a68a356b875b7e643a665cf48c7ea1fbb5c" alt="hero image"/>
    </div>
    <Footer />
  </>
}

export default page