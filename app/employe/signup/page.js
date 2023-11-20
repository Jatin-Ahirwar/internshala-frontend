"use client"
import Footer from '@/Components/home/Footer'
import { asyncsignupemploye } from '@/Store/Actions/EmployeActions'
import EmployeReducer from '@/Store/Reducers/EmployeReducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const signup = () => {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [contact, setcontact] = useState("")
  const [orgname, setorgname] = useState("")
  const [city, setcity] = useState("")
  const [gender, setgender] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()
  const router = useRouter()
  const { isAuthenticated } = useSelector((state)=> state.EmployeReducer)

  // const checkhandler = (e)=>{
  //   e.preventDefault()
  //   console.log(firstname,lastname,city,contact,gender,email,password)
  //   console.log(e.target.value)
  // }
  const submitHandler = (e)=>{
    e.preventDefault()
    const newEmploye = {
      firstname:firstname,
      lastname:lastname,
      contact:contact,
      city:city,
      gender:gender,
      orgname:orgname,
      email:email,
      password:password
    }
    dispatch(asyncsignupemploye(newEmploye))
  }
  useEffect(() => {
    if(isAuthenticated){ 
      router.push("/employe/auth")
    }
  },[isAuthenticated]) 
  return <>
    <div className='authorization'>
      <img style={{height: "50vh"}} src="https://img.freepik.com/premium-vector/business-team-brainstorm-idea-lightbulb-working-team-collaboration-colleagues-mutual-assistance_566886-3325.jpg?w=2000" alt="" />
      <div className='signupform'>
        <h3>Employe SignUp</h3>
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
    
          <label className='more'>Orgname</label>
          <input onChange={(e)=>setorgname(e.target.value)} className='more'  required type="text" name='orgname' placeholder='Orgname' />


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
      <h6>Already have an account ? <Link href="/employe/signin">Login Account</Link></h6>
      </div>    
    </div>
    <Footer />


    {/* <div className='container mt-5'>
      <button onClick={submitHandler} className='btn btn-primary'>signup</button>
    </div> */}
    </>
}

export default signup