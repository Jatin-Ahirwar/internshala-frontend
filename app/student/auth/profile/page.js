"use client"
import Footer from '@/Components/home/Footer'
import { asyncresetpassword, asyncstudentavatar, asyncstudentupdate } from '@/Store/Actions/StudentActions'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
const profile = () => {
    const router = useRouter()
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [city, setcity] = useState();
    const [gender, setgender] = useState();
    const [email, setemail] = useState();
    const [contact, setcontact] = useState();
    const [password, setpassword] = useState()
    const [confirmpassword, setconfirmpassword] = useState()
    const { student , isAuthenticated }   =  useSelector((state) => state.StudentReducer)
    
    const dispatch = useDispatch()
    useEffect(() => {
      if(!isAuthenticated) router.push("/student")
    }, [isAuthenticated])
    
    const StudentUpdateHandler =async (e)=>{
      e.preventDefault()
    const newStudent = {
      firstname,
      lastname,
      gender,
      city,
      email,
      contact
    }
    await dispatch(asyncstudentupdate(newStudent))
    router.push("/student/auth/profile")
    }    
    const AvatarHandler = (e)=>{
        e.preventDefault()
        const formdata = new FormData(e.target);
        formdata.set("avatar", e.target.avatar.files[0]);
        dispatch(asyncstudentavatar(formdata));
    }
    const ResetPasswordHandler = async(e)=>{
      e.preventDefault()
      // if(confirmpassword === newpassword){
        const pwd = {
          password
        }
        console.log(pwd)
        await dispatch(asyncresetpassword(pwd))
        setpassword("")
    }
    const UpdateHandler = (e)=>{
      e.preventDefault()
    }
    
  return <>
    <div className='profile'>
      <div className='pleft'>
      <h6 id='prightname'>Hi,{student && student.firstname}! <img src="https://internshala.com/static/images/student/profile/waving-hand.svg" alt="" /> </h6>
      <h3>Let's get started</h3>
      <div id='pleftform'>
        <div className='lefttop'>
        <div className='imgdiv'>
           <img height={200} src={student && student.avatar.url} alt="" />
        </div>
        <br />
        <form id='avat' onSubmit={AvatarHandler} encType="multipart/form-data" className='mt-3 mb-3'>
            <input type="file" name='avatar' />
            <button type='submit'>update avatar</button>
        </form>
        </div>
        <h3 id='resetpass'>Reset Password</h3>
        <form onSubmit={ResetPasswordHandler} className='password'>
          <input onChange={(e)=>setpassword(e.target.value)} type="text" name='newpassword' placeholder='New Password'/>    
          {/* <input onChange={(e)=>setconfirmpassword(e.target.value)}  type="text" name='confirmpassword' placeholder='Confirm Password'/>     */}
          <button  className='btn btn-primary me-5' >Reset Password</button>
        </form>
      </div>
      </div>
      <div id='dividor'></div>
      <div className='pright'>
        <h6 id='prightname'>Hi,{student && student.firstname}! <img src="https://internshala.com/static/images/student/profile/waving-hand.svg" alt="" /> </h6>
        <h3>Let's get started</h3>
        <div id='prightform'>

          <form onSubmit={UpdateHandler}>
          <h3>Personal Details</h3>
          
          <div className='f1'>

          <div className='content'>
          <label>First Name</label>
          <input
          defaultValue={student && student.firstname} 
          onChange={(e)=>setfirstname(e.target.value)} 
          type="text"
          name='firstname' 
          placeholder='First name' />
          </div>

          <div className='content'>
          <label>Last Name</label>
          <input
          defaultValue={student && student.lastname}
          onChange={(e)=>setlastname(e.target.value)}
          type="text" 
          name='lastname' 
          placeholder='Last name' />
          </div>

          </div>


          <div className='f1'>

          <div className='content'>
          <label>Contact</label>
          <input defaultValue={student && student.contact} onChange={(e)=>setcontact(e.target.value)} type="text" name='contact' placeholder='**********' />
          </div>

          <div className='content'>
          <label>City</label>
          <input defaultValue={student && student.city} onChange={(e)=>setcity(e.target.value)}type="text" name='city' placeholder='City' />
          </div>

          </div>
    
          <label className='more'>Gender</label>
          <input defaultValue={student && student.gender} onChange={(e)=>setgender(e.target.value)} className='more' type="text" name='gender' placeholder='Gender' />

          {/* <select value={(e)=>setgender(e.target.value)} onChange={(e)=>setgender(e.target.value)} className='more'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
          </select> */}

          <label className='more'>Email</label>
          <input defaultValue={student && student.email} onChange={(e)=>setemail(e.target.value)} className='more' type="text" name='email' placeholder='Email address' />

          {/* <label className='more'>Password</label> */}
          {/* <input defaultValue={student && student.password} onChange={(e)=>setpassword(e.target.value)} className='more' type="text" name='password' placeholder='Password' /> */}
          <button onClick={StudentUpdateHandler} id='btn' className='btn btn-primary' type='submit'>Update</button>
        </form>
        </div>
        {/* <div id='prightform2'></div> */}
        {/* <button onClick={UpdateHandler} className='btn btn-warning me-5' >Update</button> */}
      </div>
    </div>
    <Footer />
    </>
}

export default profile