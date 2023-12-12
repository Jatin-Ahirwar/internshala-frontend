"use client"
import "@/app/css/myapplication.css"
import React from 'react'
import { useSelector } from 'react-redux'
import Footer from "../home/Footer"
import Link from "next/link"

const Myapplications = () => {
    const { employe } = useSelector((state)=>state.EmployeReducer)
    return <>
        {/* <p>{JSON.stringify(employe?.job)}</p> */}
        {/* <p>{JSON.stringify(employe?.internship)}</p> */}

        <div className='myapplication'>
            <h2 style={{marginBottom:"30px"}}>My created jobs</h2>
            <div className="mydatadiv">
                <div className="mydatadivnav">
                    <div className="appliedcompany">company</div>
                    <div className="profilerole">profile</div>
                    <div className="applieddate">created on</div>
                    <div className="applicants">number of applicants</div>
                    <div className="application">application status</div>
                    <div className="review">Review application</div>
                </div>
                {employe?.job.length > 0 ? 
                employe?.job.map((job)=>(
                <div key={job._id} style={{backgroundColor:"white",fontSize:"13px"}} className="mydatadivnav">
                    <div className="appliedcompany">{job.orgname}</div>
                    <div className="profilerole">{job.profile}<Link id="redirect" href={`/employe/auth/singlejob/`+ job._id}><i class="ri-external-link-line"></i></Link></div>
                    <div  className="applieddate">{job.createdAt}</div>
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
            
            <h2 style={{padding:"20px 0"}}>My created internships</h2>
            <div className="mydatadiv">
                <div className="mydatadivnav">
                    <div className="appliedcompany">company</div>
                    <div className="profilerole">profile</div>
                    <div className="applieddate">applied on</div>
                    <div className="applicants">number of applicants</div>
                    <div className="application">application status</div>
                    <div className="review">Review application</div>
                </div>
                {employe?.internship.length > 0 ? 
                employe?.internship.map((internship)=>(
                <div key={internship._id} style={{backgroundColor:"white",fontSize:"13px"}} className="mydatadivnav">
                    <div className="appliedcompany">{internship.orgname}</div>
                    <div className="profilerole">{internship.profile} <Link id="redirect" href={`/employe/auth/singleinternship/`+ internship._id}><i class="ri-external-link-line"></i></Link></div>
                    <div className="applieddate">{internship.createdAt}</div>
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