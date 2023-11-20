"use client"
import Footer from '@/Components/home/Footer'
import { asyncsignupstudent } from '@/Store/Actions/StudentActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const signup = () => {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [contact, setcontact] = useState("")
  const [city, setcity] = useState("")
  const [gender, setgender] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()
  const { isAuthenticated }= useSelector((state) => state.StudentReducer)
  const router = useRouter()

  // const checkhandler = (e)=>{
  //   e.preventDefault()
  //   console.log(firstname,lastname,city,contact,gender,email,password)
  //   console.log(e.target.value)
  // }
  const submitHandler = (e)=>{
    e.preventDefault()
    const newStudent = {
      firstname:firstname,
      lastname:lastname,
      contact:contact,
      city:city,
      gender:gender,
      email:email,
      password:password
    }
    dispatch(asyncsignupstudent(newStudent))
  }
  useEffect(() => {
    if(isAuthenticated){ 
      router.push("/student/auth")
    }
  },[isAuthenticated]) 
  return <>
    <div className='authorization'>
      <img src="https://img.freepik.com/premium-vector/businessman-with-many-arms-sitting-computer-office-doing-many-tasks-same-time-freelance-worker-multitasking-skills-effective-time-management-productivity-concept_458444-1261.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais" alt="" />
      <div className='signupform'>
        <h3>Student SignUp</h3>
        <h6>Signup to access resources</h6>
        <form onSubmit={submitHandler}>

          <div className='f1'>

          <div className='content'>
          <label>First Name</label>
          <input onChange={(e)=>setfirstname(e.target.value)}  required type="text" name='firstname' placeholder='First name' />
          </div>

          <div className='content'>
          <label>Last Name</label>
          <input onChange={(e)=>setlastname(e.target.value)}  required type="text" name='lastname' placeholder='Last name' />
          </div>

          </div>


          <div className='f1'>

          <div className='content'>
          <label>Contact</label>
          <input onChange={(e)=>setcontact(e.target.value)}  required type="text" name='contact' placeholder='**********' />
          </div>

          <div className='content'>
          <label>City</label>
          <input onChange={(e)=>setcity(e.target.value)} required type="text" name='city' placeholder='City' />
          </div>

          </div>
    
          <label className='more'>Gender</label>
          <input onChange={(e)=>setgender(e.target.value)} className='more'  required type="text" name='gender' placeholder='Gender' />

          {/* <select value={(e)=>setgender(e.target.value)} onChange={(e)=>setgender(e.target.value)} className='more'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
          </select> */}

          <label className='more'>Email</label>
          <input onChange={(e)=>setemail(e.target.value)} className='more'  required type="text" name='email' placeholder='Email address' />

          <label className='more'>Password</label>
          <input onChange={(e)=>setpassword(e.target.value)} className='more'  required type="text" name='password' placeholder='Password' />
          <button id='btn'  className='btn btn-primary'  required type='submit'>Signup</button>
        </form>
      </div>    
    </div>
    <Footer />


    {/* <div className='container mt-5'>
      <button onClick={submitHandler} className='btn btn-primary'>signup</button>
    </div> */}
    </>
}

export default signup