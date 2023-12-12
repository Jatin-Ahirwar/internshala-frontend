"use client"
import "@/app/css/myapplication.css"
import React from 'react'
import { useSelector } from 'react-redux'
import Footer from "../home/Footer"
import Link from "next/link"

const Myapplications = () => {
    const { student } = useSelector((state)=>state.StudentReducer)
    return <>
        <div className='myapplication'>
            {/* <p>{JSON.stringify(student?.appliedjobs)}</p> */}
            <h2 style={{marginBottom:"30px"}}>My applied jobs</h2>
            <div className="mydatadiv">
                <div className="mydatadivnav">
                    <div className="appliedcompany">company</div>
                    <div className="profilerole">profile</div>
                    <div className="applieddate">applied on</div>
                    <div className="applicants">number of applicants</div>
                    <div className="application">application status</div>
                    <div className="review">Review application</div>
                </div>
                {student?.appliedjobs.length > 0 ? 
                student?.appliedjobs.map((job)=>(
                <div key={job._id} style={{backgroundColor:"white",fontSize:"13px"}} className="mydatadivnav">
                    <div className="appliedcompany">{job.orgname}</div>
                    <div className="profilerole">{job.profile}<Link id="redirect" href={`/student/auth/singlejob/`+ job._id}><i class="ri-external-link-line"></i></Link></div>
                    <div className="applieddate">{job.orgname}</div>
                    <div className="applicants">{job.students.length}</div>
                    <div className="application">application status</div>
                    <div className="review">Review application</div>
                </div>
                ))
                :
                <h3 style={{marginTop:"20px" ,textAlign:"center"}}>No Jobs Found</h3>
                }
            </div>

            <div style={{marginTop:"20px"}} className="line "></div>
            
            <h2 style={{padding:"20px 0"}}>My applied internships</h2>
            <div className="mydatadiv">
                <div className="mydatadivnav">
                    <div className="appliedcompany">company</div>
                    <div className="profilerole">profile</div>
                    <div className="applieddate">applied on</div>
                    <div className="applicants">number of applicants</div>
                    <div className="application">application status</div>
                    <div className="review">Review application</div>
                </div>
                {student?.appliedinternships.length > 0 ? 
                student?.appliedinternships.map((internship)=>(
                <div key={internship._id} style={{backgroundColor:"white",fontSize:"13px"}} className="mydatadivnav">
                    <div className="appliedcompany">{internship.orgname}</div>
                    <div className="profilerole">{internship.profile} <Link id="redirect" href={`/student/auth/singleinternship/`+ internship._id}><i class="ri-external-link-line"></i></Link></div>
                    <div className="applieddate">{internship.orgname}</div>
                    <div className="applicants">{internship.students.length}</div>
                    <div className="application">application status</div>
                    <div className="review">Review application</div>
                </div>
                ))
                :
                <h3 style={{marginTop:"20px" ,textAlign:"center"}}>No internships Found</h3>
                }
            </div>
        </div>
        <Footer/>
    </>
}

export default Myapplications