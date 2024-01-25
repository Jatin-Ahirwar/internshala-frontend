import React, { useEffect, useRef, useState } from 'react'
import '@/app/css/internship.css'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../home/Footer'
import Link from 'next/link'
import '@/app/css/Solointernship.css'
import { asyncapplyinternshipstudent } from '@/Store/Actions/StudentActions'

const Internships = () => {
    const dispatch = useDispatch()
    const { internships,isAuthenticated,student,  } = useSelector((state)=>state.StudentReducer)
    const applyHandler = (id) => {
        if(!isAuthenticated){
            alert("please login to access the resource")
            return
        }
        dispatch(asyncapplyinternshipstudent(id));
    }
        
    return <>
    <div className='internshiphome'>
        <div className='internshiphometop'>
            <p style={{fontWeight:"500" , color:"#00A5EC"}}>
                <Link style={{textDecoration:"none" , color:"black", fontWeight:"400"}} href="/student/auth">Home</Link>
                <i style={{color:"black"}} class="ri-arrow-right-s-line"></i>
                Internships
            </p>
            <h5 style={{position:"absolute" , top:"80%" , left:"70%", transform:"translate(-50%,-50%)"}}>{internships?.length} Total Internships </h5 >
        </div>
        <div className='contentarea'>
            <div className='contentarealeft'>
                <h5><i style={{color:"#00A5EC"}} class="ri-filter-line"></i> Filters</h5>
                   <div className='filtersdiv'>
                      <label style={{padding:"5px" , fontSize:"17px"}} >Profile</label>
                      <input style={{marginBottom:"10px",marginLeft:"0", width:"100%" ,padding:"7px 10px", borderRadius:"4px", border:".5px solid rgba(128, 128, 128, 0.429)" , outline:"none"}} className='more' type="text" name='email' placeholder='e.g. Marketing' />
                      {/* <input onChange={(e)=>setemail(e.target.value)} className='more'  required type="text" name='email' placeholder='Email address' /> */}
                      <label style={{padding:"5px" , fontSize:"17px"}} >Location</label>
                      <input style={{marginBottom:"10px",marginLeft:"0", width:"100%" ,padding:"7px  10px", borderRadius:"4px", border:".5px solid rgba(128, 128, 128, 0.429)" , outline:"none"}} className='more' type="text" name='email' placeholder='e.g. Delhi' />
                      {/* <input onChange={(e)=>setemail(e.target.value)} className='more'  required type="text" name='email' placeholder='Email address' /> */}
                      <div style={{display:"flex", alignItems:"center",gap:"5px", padding :"5px 0"}}>
                        <input  type="checkbox" /> <label style={{fontSize:"15px", marginTop:"-.5px"}} > Work From Home</label>
                      </div>
                      <div style={{display:"flex", alignItems:"center",gap:"5px", padding :"5px 0"}}>
                        <input  type="checkbox" /> <label style={{fontSize:"15px", marginTop:"-.5px"}} > Part Time</label>
                      </div>
                      <h4 style={{textAlign:"center", marginTop:"15px"}}>Keyword Search</h4>  
                      <input style={{marginBottom:"10px",marginLeft:"0", width:"100%" ,padding:"7px 10px", borderRadius:"4px", border:".5px solid rgba(128, 128, 128, 0.429)" , outline:"none"}} className='more' type="text" name='all' placeholder='e.g. Design,Mumbai,Infosys' />
                       <p style={{cursor:"pointer",color:"#006BC2", textAlign:"right"}}>Clear all</p> 
                    </div>
            </div>
            <div className='contentarearight'>
                {internships && internships?.map((internship)=>(
                    <div href="" key={internship._id} className='internshipcard'>
                        <div className='bttn'><p><i class="ri-funds-box-line"></i> Actively hiering</p></div>
                        <h5>{internship.profile}</h5>
                        <h6 style={{textTransform:"capitalize"}}>{internship.orgname}</h6>
                        <p style={{textTransform:"capitalize"}}>{internship.location}</p>
                        
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


            </div>

               <div className='ting' style={{display:"flex" , gap :"20px" , height:"8vh" , borderBottom:".5px solid rgba(0, 0, 0, 0.11)" }}>
                    <div className='timee'>
                    <i style={{marginRight:"5px"}} class="ri-history-line"></i>
                    Posted few hours ago
                    </div>
                    <div className='intern'>Internship</div>
                </div>

                <div className='lastline'>
                    <Link style={{color:"#006BC2",textDecoration:"none"}} className='link' href={"/student/auth/singleinternship/" + internship._id} >View details </Link>
                    { !internship?.students.includes(student?._id) ? (
                    <button id='apply' style={{height:"80%",width:"100px", fontSize:"14px" }} onClick={()=>{applyHandler(internship._id)}} className='applynow' >
                        Apply now
                    </button>     
                    ) : (
                    <button id='applied' style={{height:"80%",width:"120px" , backgroundColor:"rgba(128, 128, 128, 0.228)" , color:"black" , cursor: "not-allowed", fontSize:"14px" }} className='applynow' href="">
                        Already applied
                    </button>
                    )}
                </div>






                    </div>

                ))}
            </div>
        </div>
    </div>
    <Footer/>
    </>
}

export default Internships