import React from 'react'
import '@/app/css/internship.css'
import { useSelector } from 'react-redux'
import Footer from '../home/Footer'
import Link from 'next/link'

const Internships = () => {
    
    const { internships } = useSelector((state)=>state.StudentReducer)
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
                      <input style={{marginBottom:"10px",marginLeft:"0", width:"100%" ,padding:"7px 8px", borderRadius:"4px", border:".5px solid rgba(128, 128, 128, 0.429)" , outline:"none"}} className='more' type="text" name='email' placeholder='e.g. Marketing' />
                      {/* <input onChange={(e)=>setemail(e.target.value)} className='more'  required type="text" name='email' placeholder='Email address' /> */}
                      <label style={{padding:"5px" , fontSize:"17px"}} >Location</label>
                      <input style={{marginBottom:"10px",marginLeft:"0", width:"100%" ,padding:"7px 8px", borderRadius:"4px", border:".5px solid rgba(128, 128, 128, 0.429)" , outline:"none"}} className='more' type="text" name='email' placeholder='e.g. Delhi' />
                      {/* <input onChange={(e)=>setemail(e.target.value)} className='more'  required type="text" name='email' placeholder='Email address' /> */}
                      <div style={{display:"flex", alignItems:"center",gap:"5px", padding :"5px 0"}}>
                        <input  type="checkbox" /> <label style={{fontSize:"15px", marginTop:"-.5px"}} > Work From Home</label>
                      </div>
                      <div style={{display:"flex", alignItems:"center",gap:"5px", padding :"5px 0"}}>
                        <input  type="checkbox" /> <label style={{fontSize:"15px", marginTop:"-.5px"}} > Part Time</label>
                      </div>
                    </div>
            </div>
            <div className='contentarearight'>
                {internships && internships?.map((internship)=>(
                    <div className='internshipcard'>
                        <div className='bttn'><p><i class="ri-funds-box-line"></i> Actively hiering</p></div>
                        <h3></h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
    <Footer/>
    </>
}

export default Internships