"use client"
import '@/app/css/Solointernship.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../home/Footer'
import Link from 'next/link'
import { asyncapplyjobstudent } from '@/Store/Actions/StudentActions'

const Solojob = () => {
    const dispatch = useDispatch()
    const { student , job , isAuthenticated   } = useSelector((state)=>state.StudentReducer)
    const applyHandler = () => {
        if(!isAuthenticated){
            alert("please login to access the resource")
            return
        }
        dispatch(asyncapplyjobstudent(job?._id));
    }

    return <>
    <div className='solopage' >
        <h2 style={{ width:"65%",textTransform:"capitalize" , marginBottom:"40px",textAlign:"center"}}>Remote {job?.profile} job in {job?.location} at {job?.orgname}</h2>
        <div className='information'>
            <div className='interntop' style={{display:"flex" , flexDirection:"column" }}>
            <div className='buttonn'><p><i class="ri-funds-box-line"></i> Actively hiering</p></div>
            <h6 style={{fontSize:"17px", marginTop:"5px"}}>{job?.profile}</h6>
            <h6 style={{fontSize:"15px", color:'gray'}}>{job?.orgname}</h6>
            <h6 style={{fontSize:"15px", color:'gray',textTransform:"capitalize" , padding:"12px 0"}}>
                <i style={{marginRight:"5px"}} class="ri-map-pin-line"></i>
                {job?.location}
                {/* {job && job.location === "Remote" ? "Remote" : job?.location} */}
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
               <h6 style={{ fontWeight:"400",marginTop:"-10px",display:"flex",gap:"7px",textTransform:"capitalize"}}>{job?.duration}</h6>

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
               <h6 style={{ fontWeight:"400",marginTop:"-10px",display:"flex",gap:"7px",textTransform:"capitalize"}}>{job?.lastdate}</h6>

               </div> 



            </div>

            <div className='ting' style={{display:"flex" , gap :"20px"}}>
                    <div className='timee'>
                    <i style={{marginRight:"5px"}} class="ri-history-line"></i>

                    Posted few hours ago
                    </div>

                    <div style={{padding:"0 10px"}} className='intern'>Job</div>
            </div>


            <div className='appli'>
                <button>
                    <i class="ri-group-line"></i>
                    <p style={{marginRight:"5px"}}>{job?.students.length}</p>
                    {job?.students.length === 1 ? <p>applicant</p> : <p>applicants</p>}    
                </button>

                <div className='save'>
                    <i class="ri-bookmark-line"></i>
                    <i class="ri-share-line"></i>
                </div>

            </div> 

            <div className='aboutcompany'>
                <h6 style={{textTransform:"capitalize", fontSize:"18px"}}>about {job?.orgname}</h6>
                <p>Lorem ipsum, dolor sit amet lore consectetur adipisicing elit. Accusantium delectus saepe amet suscipit quas repudiandae unde fugiat, ab voluptatem quasi qui aspernatur doloribus error obcaecati modi non officia. Sint hic assumenda obcaecati molestiae, eos quaerat tempora tenetur voluptates provident vero possimus harum culpa alias laborum natus placeat officia quae quidem!</p>
            </div>

            <div className='companystart'>
                <h6>Activity on Internshala</h6>
                <div style={{display:"flex" , gap:"20px"}}>
                    <p><i class="ri-phone-find-line"></i> Hiring since January 2021</p>
                    <p><i class="ri-mail-line"></i> 60 opportunities posted</p>
                    <p><i class="ri-user-follow-line"></i> 27 candidates hired</p>
                </div>
            </div>


            <div className='requirement'>
                <div style={{lineHeight:'1'}}>
                    <h6 style={{textTransform:"capitalize", fontSize:"18px"}}>about the job</h6>
                    <p>Selected intern's day-to-day responsibilities include:</p>
                </div>
                <div className='key'>
                    <p>1. Work on the front-end development of various sites, apps, and device screens</p>
                    <p>2. Work with UI/UX designers to convert design ideas into implemented apps/websites</p>
                    <p>3. Collaborate with other developers and improve existing code</p>
                </div>
            </div>

            <div  className='skill'>
                <h5>Skill(s) required</h5>
                <div className='skilldiv'>
                    {
                        job?.skill.map((skill)=>(
                            <div className='button'>{skill}</div>
                        ))
                    }
                </div>
            </div>

            <div className='requirement'>
                <div style={{lineHeight:'1'}}>
                    <h6 style={{textTransform:"capitalize", fontSize:"18px"}}>Who can apply</h6>
                    <p>Only those candidates can apply who:</p>
                </div>
                <div className='key'>
                    <p>1. are available for full time (in-office) job</p>
                    <p>2. can start the job between {job?.from} to {job?.to}</p>
                    <p>3. are available for duration of {job?.duration}</p>
                    <p>4. are from or open to relocate to {job?.location}</p>
                    <p>5. have relevant skills and interests</p>
                </div>
            </div>    
            
            <div className='skill'>
                <h5>Perks</h5>
                <div className='skilldiv'>
                    <div className='button'>certificate</div>
                    <div className='button'>Letter of recommendation</div>
                    <div className='button'>Flexible work hours</div>
                    <div className='button'>Informal dress code</div>
                    <div className='button'>5 days a week</div>
                    <div className='button'>AWS</div>
                    <div className='button'>Free snacks & beverages</div>
                </div>
            </div>

            <div style={{lineHeight:'1'}} className='requirement'>
                    <h6 style={{textTransform:"capitalize", fontSize:"18px"}}>Number of openings</h6>
                    <p>{job?.openings}</p>
            </div>

            <div style={{height:"40px", width:"100%"  , display:"flex" , justifyContent:"center"}}>
                {job && !job?.students.includes(student && student._id) ? (
                    <button onClick={applyHandler} className='applynow' href="">
                        Apply now
                    </button>     
                ) : 
                    <button style={{width:"150px" , backgroundColor:"#b5b5b5cb" , color:"black" , cursor: "not-allowed" }} className='applynow' href="">
                        Already applied
                    </button> 
                }
       
            </div>
            </div>
    </div>
    <Footer/>
    </>
}

export default Solojob