"use client"
import '@/app/css/Solointernship.css'

import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../home/Footer'

const Solointernship = () => {
    const { internship } = useSelector((state)=>state.StudentReducer)
  return <>
    <div className='solopage' >
        <h2 style={{textTransform:"capitalize" , marginBottom:"40px"}}>Remote {internship?.profile} internship at {internship?.orgname}</h2>
        <div className='information'>
            <div style={{display:"flex" , flexDirection:"column" }}>
            <div className='button'><p><i class="ri-funds-box-line"></i> Actively hiering</p></div>
            <h6 style={{fontSize:"19px", marginTop:"5px"}}>{internship?.profile}</h6>
            <h6 style={{fontSize:"15px", color:'gray'}}>{internship?.orgname}</h6>
            <h6 style={{fontSize:"15px", color:'gray' , marginTop:"10px"}}>
                {}
            </h6>

            </div>

        </div>
    </div>
    <Footer/>
    </>
}

export default Solointernship