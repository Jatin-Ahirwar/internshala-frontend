"use client"
import "@/app/css/createopportunity.css"
import Link from "next/link"
import React, { useState } from 'react'

const Createinternship = () => {
    const [isChecked, setChecked] = useState(false);
    const [showInternship, setShowInternship] = useState(true);
    const [selectedOption, setSelectedOption] = useState('office');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    const labelStyle = {
        color: selectedOption === 'office' ? '#20B1EA' : 'black',
    };
    const labelStyleremote = {
        color: selectedOption === 'remote' ? '#20B1EA' : 'black',
    };
    

  return <>
    <div className='createopportunity'>
        <div>
            <h5>Internship details</h5>
            <div className="creatediv">
                <form className='opwrapper'>
                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400"}}>Internship profile</label>
                        <input onChange={(e)=>setfirstname(e.target.value)}  required type="text" name='profile' placeholder='e.g. Full Stack Developer' />
                    </div>

                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400",display:"flex", alignItems:"center", gap:"5px"}}>Skill required <span style={{fontSize:"12px",color:"gray"}}>(Optional)</span></label>
                        <input onChange={(e)=>setfirstname(e.target.value)}   type="text" name='skill' placeholder='e.g. Full Stack Developer' />
                    </div>
                    
                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400"}}>Internship type</label>
                        <div className='links'>
                            {/* <i style={{color:"#00A5EC"}} class="ri-record-circle-line"></i><Link className='apportunity' style={{color:"black",textDecoration:"none"}} href=""> Internship</Link> */}
                            <div style={{fontSize:"18px",fontWeight:"400"}}>
                                {/* <i style={{marginRight:"5px",color: showInternship ? '#20B1EA' : 'initial'}} class="ri-record-circle-line"></i> */}
                                <i style={labelStyle} class="ri-record-circle-line"></i>
                                {/* <Link className='apportunity' style={{color:"black",textDecoration:"none"}} href=""> Internship</Link> */}
                                <label >
                                <input className='apportunity'
                                    type="checkbox"
                                    checked={selectedOption === 'office'}
                                    onChange={() => handleOptionChange('office')}
                                    style={{color:"black",textDecoration:"none"}}
                                />
                                In Office
                                </label>
                            </div>

                            <div style={{fontSize:"18px",fontWeight:"400"}}>
                                {/* <i onClick={() => handleButtonClick(false)} style={{marginRight:"5px",color: !showInternship ? '#20B1EA' : 'initial'}} class="ri-record-circle-line"></i> */}
                                {/* <i onClick={() => handleButtonClick(false)} style={} class="ri-record-circle-line"></i> */}
                                <i style={labelStyleremote} class="ri-record-circle-line"></i>
                                {/* <Link className='apportunity' style={{color:"black",textDecoration:"none"}} href=""> Job</Link> */}
                                <label>
                                <input className='apportunity'
                                    type="checkbox"
                                    checked={selectedOption === 'remote'}
                                    onChange={() => handleOptionChange('remote')}
                                    style={{color:"black",textDecoration:"none"}}
                                />
                                Remote
                                </label>
                            </div>                
                            {/* <p>Selected Option: {selectedOption}</p> */}
                        </div>
                    </div>
                </form>
                {/* <p>Internship profile</p>
                <input  type="text" placeholder="e.g. Andriod  App Development" /> */}
            </div>
        </div>
    </div>
    </>
}

export default Createinternship