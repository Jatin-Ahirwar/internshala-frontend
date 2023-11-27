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
            <div className='interntop' style={{display:"flex" , flexDirection:"column" }}>
            <div className='button'><p><i class="ri-funds-box-line"></i> Actively hiering</p></div>
            <h6 style={{fontSize:"17px", marginTop:"5px"}}>{internship?.profile}</h6>
            <h6 style={{fontSize:"15px", color:'gray'}}>{internship?.orgname}</h6>
            <h6 style={{fontSize:"15px", color:'gray',textTransform:"capitalize" , padding:"12px 0"}}>
                <i style={{marginRight:"5px"}} class="ri-map-pin-line"></i>
                {internship?.location}
                {/* {internship && internship.location === "Remote" ? "Remote" : internship?.location} */}
            </h6>
            </div>


            <div style={{display:"flex",height : "50px" , width : "100%" , gap:"30px"}}>
               
               <div  style={{  height: "100%", width:"150px"  }}>
               <div style={{ color:"gray", display:"flex",gap:"7px", textAlign:"center"}}>
                    <i class="ri-play-circle-line"></i>
                    <p style={{ textTransform:"uppercase", fontSize:"13px" , letterSpacing:".5px"}}>Start Date</p>
               </div>
               <h6 style={{ fontWeight:"400",marginTop:"-10px",display:"flex",gap:"7px",textTransform:"capitalize"}}>Immediately</h6>
               </div> 



               <div  style={{  height: "100%", width:"150px",  }}>
               <div style={{ color:"gray", display:"flex",gap:"7px", textAlign:"center"}}>
                    <i class="ri-time-line"></i>
                    <p style={{ textTransform:"uppercase", fontSize:"13px" , letterSpacing:".5px"}}>duration</p>
               </div>
               <h6 style={{ fontWeight:"400",marginTop:"-10px",display:"flex",gap:"7px",textTransform:"capitalize"}}>{internship?.duration}</h6>

               </div> 




               <div  style={{  height: "100%", width:"150px"  }}>
               <div style={{  color:"gray", display:"flex",gap:"7px", textAlign:"center"}}>
                    <i class="ri-money-dollar-box-line"></i>
                    <p style={{ textTransform:"uppercase", fontSize:"13px" , letterSpacing:".5px"}}>STIPEND</p>
               </div>
               <h6 style={{ fontWeight:"400",marginTop:"-10px",display:"flex",gap:"7px",textTransform:"capitalize"}}> 16,000 /month</h6>

               </div> 



               <div  style={{  height: "100%", width:"150px"  }}>
               <div style={{ color:"gray", display:"flex",gap:"7px", textAlign:"center"}}>
                    <i class="ri-hourglass-line"></i>
                    <p style={{ textTransform:"uppercase", fontSize:"13px" , letterSpacing:".5px"}}>APPLY BY</p>
               </div>
               <h6 style={{ fontWeight:"400",marginTop:"-10px",display:"flex",gap:"7px",textTransform:"capitalize"}}>{internship?.lastdate}</h6>

               </div> 



            </div>

            <div className='ting' style={{display:"flex" , gap :"20px"}}>
                    <div className='timee'>
                    <i style={{marginRight:"5px"}} class="ri-history-line"></i>

                    Posted few hours ago
                    </div>

                    <div className='intern'>Internship</div>
            </div>


            <div className='appli'>
                <button>
                    <i class="ri-group-line"></i>
                    <p style={{marginRight:"5px"}}>{internship?.students.length}</p>
                    {internship?.students.length === 1 ? <p>applicant</p> : <p>applicants</p>}    
                </button>

                <div className='save'>
                    <i class="ri-bookmark-line"></i>
                    <i class="ri-share-line"></i>
                </div>

            </div> 

            <div className='line'></div>
               
            </div>
    </div>
    <Footer/>
    </>
}

export default Solointernship