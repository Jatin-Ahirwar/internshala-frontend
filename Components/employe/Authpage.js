"use client"
import '@/app/css/employeauth.css'
import React, { useState } from 'react'
import Footer from '../home/Footer'
import Link from 'next/link'
import Createinternship from './Createinternship'
import Createjob from './Createjob'

const Authpage = () => {
    const [isChecked, setChecked] = useState(false);
    const [showInternship, setShowInternship] = useState(true);
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
        
    };
    const handleButtonClick = (isInternship) => {
        setShowInternship(isInternship);
    };

    return <>
    <div className='employeauthlandingpage'>
        <div className='empauthcenter'>
            <h2>Post Internship/Job</h2>
            <div className='authbox'>
                <h5>Opportunity type</h5>
                <div className='links'>
                {/* <i style={{color:"#00A5EC"}} class="ri-record-circle-line"></i><Link className='apportunity' style={{color:"black",textDecoration:"none"}} href=""> Internship</Link> */}
                <div style={{fontSize:"18px",fontWeight:"400"}}>
                    <i onClick={() => handleButtonClick(true)} style={{marginRight:"5px",color: showInternship ? '#20B1EA' : 'initial'}} class="ri-record-circle-line"></i><Link className='apportunity' style={{color:"black",textDecoration:"none"}} href=""> Internship</Link>
                </div>

                <div style={{fontSize:"18px",fontWeight:"400"}}>
                    <i onClick={() => handleButtonClick(false)} style={{marginRight:"5px",color: !showInternship ? '#20B1EA' : 'initial'}} class="ri-record-circle-line"></i><Link className='apportunity' style={{color:"black",textDecoration:"none"}} href=""> Job</Link>
                </div>                
                
                </div>
            </div>
        </div>
    </div>

    {showInternship ? (
        <Createinternship />
    ) : (
        <Createjob />
    )}

    <Footer />
  </>
}

export default Authpage