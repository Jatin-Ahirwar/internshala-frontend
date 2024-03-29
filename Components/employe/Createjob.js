"use client"
import { asyncCreatejob } from "@/Store/Actions/EmployeActions"
import "@/app/css/createopportunity.css"
import Link from "next/link"
import React, { useState } from 'react'
import { useDispatch } from "react-redux"

const Createjob = () => {
    const [isChecked, setChecked] = useState(false);
    const [showjob, setShowjob] = useState(true);
    const [selectedOption, setSelectedOption] = useState('In Office');
    const [title, settitle] = useState("")
    const [orgname, setorgname] = useState("")
    const [skill, setskill] = useState("")
    const [jobtype, setjobtype] = useState("")
    const [openings, setopenings] = useState("")
    const [from, setfrom] = useState("")
    const [to, setto] = useState("")
    const [experience, setexperience] = useState("")
    const [location, setlocation] = useState("")
    const [lastdate, setlastdate] = useState("")
    const [salary, setsalary] = useState("")
    const [skillsList, setSkillsList] = useState([]);
    const [loading, setloading] = useState(false)
    const dispatch = useDispatch()

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()   
            if (e.key === 'Enter' && skill.trim() !== '') {
                setSkillsList([...skillsList, skill]);
                setskill('');
            }
        }
    };

    const removeSkill = (index) => {
        const newSkillsList = [...skillsList];
        newSkillsList.splice(index, 1);
        setSkillsList(newSkillsList);    
    };
    
    const handleBlur = () => {
        if (skill.trim() !== '') {
            setSkillsList([...skillsList, skill]);
            setskill('');
        }
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    const labelStyle = {
        color: selectedOption === 'In Office' ? '#20B1EA' : 'black',
    };
    const labelStyleremote = {
        color: selectedOption === 'Remote' ? '#20B1EA' : 'black',
    };
    
    const submitHandler = async(e)=>{
        e.preventDefault()
        const job = {
            title:title,
            skill:skillsList,
            openings:openings,
            start:from,
            location:location,
            lastdate:lastdate,
            experience:experience,
            salary:salary,
            jobtype:selectedOption,
            orgname:orgname
        }
        console.log(job)
        setloading(true)
        await dispatch(asyncCreatejob(job))
        settitle('');
        setSkillsList([]);
        setopenings('');
        setfrom('');
        setto('');
        setexperience('');
        setlocation('');
        setlastdate('');
        setsalary('');
        setSelectedOption('');
        setorgname('');
      
        setloading(false);
    }

    
    return <>
    <div className='createopportunity'>
        <div>
            <h5>Job details</h5>
            <div className="creatediv">
                <form className='opwrapper' onSubmit={submitHandler}>
                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400"}}>job title</label>
                        <input onChange={(e)=>settitle(e.target.value)}  required type="text" name='title' placeholder='e.g. Full Stack Developer' />
                    </div>

                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400",display:"flex", alignItems:"center", gap:"5px"}}>
                            Skill required <span style={{fontSize:"12px",color:"gray"}}>(Optional)</span>
                        </label>
                        <input 
                            onChange={(e) => setskill(e.target.value)}
                            onKeyPress={handleKeyPress}
                            value={skill}
                            onBlur={handleBlur}
                            type="text"
                            name='skill'
                            placeholder='e.g. Full Stack Developer'
                        />
                        {
                            skillsList.map((item,index)=>(
                                <div key={index} style={{padding:"4px 15px", backgroundColor:"#02A4E6", color:"white", width:"fit-content", display:"flex", gap:"10px", justifyContent:"center", borderRadius:"15px"}} >{item}<i onClick={()=>{removeSkill(index)}} style={{cursor:"pointer"}} class="ri-close-line"></i></div>
                            ))
                        }
                    </div>                    

                    <div className='opitemdiv' >
                        <label style={{fontWeight:"400"}}>job type</label>
                        <div className='links' style={{padding:"1vh 0", border:"none"}} >
                            <div style={{fontSize:"16px",fontWeight:"400" , display:"flex" , gap:"5px" , alignItems:"center", justifyContent:"center" }}>
                                <i style={labelStyle} class="ri-record-circle-line"></i>
                                <label >
                                <input className='apportunity'
                                    type="checkbox"
                                    checked={selectedOption === 'In Office'}
                                    onChange={() => handleOptionChange('In Office')}
                                    style={{color:"black",textDecoration:"none"}}
                                />
                                In Office
                                </label>
                            </div>

                            <div style={{fontSize:"16px",fontWeight:"400" , display:"flex" , gap:"5px" , alignItems:"center", justifyContent:"center"}}>
                                <i style={labelStyleremote} class="ri-record-circle-line"></i>
                                <label>
                                <input className='apportunity'
                                    type="checkbox"
                                    checked={selectedOption === 'Remote'}
                                    onChange={() => handleOptionChange('Remote')}
                                    style={{color:"black",textDecoration:"none"}}
                                />
                                Remote
                                </label>
                            </div>                
                        </div>
                    </div>

                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400",display:"flex", alignItems:"center", gap:"5px"}}>Number of openings</label>
                        <input onChange={(e)=>setopenings(e.target.value)}   type="text" name='skill' placeholder='e.g. 4' />
                    </div>

                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400",display:"flex", alignItems:"center", gap:"5px"}}>Years of experience</label>
                        <input onChange={(e)=>setexperience(e.target.value)}  type="text" name='experience' placeholder='e.g. 4' />
                    </div>

                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400", marginBottom:"10px" ,display:"flex", alignItems:"center", gap:"5px" , textTransform:"capitalize"}}>job start date</label>
                        <input onChange={(e)=>setfrom(e.target.value)}  style={{width:"80%"}}  type="date" name='skill' placeholder='e.g. 4' />
                    </div>

                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400",display:"flex", alignItems:"center", gap:"5px"}}>Location</label>
                        <input onChange={(e)=>setlocation(e.target.value)} type="text" name='skill' placeholder='e.g. Mumbai' />
                    </div>

                    <div className='opitemdiv'>
                    
                        <label style={{fontWeight:"400", marginBottom:"10px" ,display:"flex", alignItems:"center", gap:"5px" , textTransform:"capitalize"}}>Last Date</label>
            
                        <div style={{display:"flex"  , width:"100%" , justifyContent:"space-between" , paddingRight:"15vw" }} >
                            <input onChange={(e)=>setlastdate(e.target.value)}  style={{width:"80%"}}  type="date" name='skill' placeholder='e.g. 4' />
                        </div>
                    
                    </div>

                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400",display:"flex", alignItems:"center", gap:"5px"}}>Organization Name</label>
                        <input onChange={(e)=>setorgname(e.target.value)} type="text" name='skill' placeholder='e.g. walmart' />
                    </div>

                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400",display:"flex", alignItems:"center", gap:"5px"}}>salary</label>
                        <input onChange={(e)=>setsalary(e.target.value)} type="text" name='skill' placeholder='e.g. 10000 ' />
                    </div>

                    <div className='opitemdiv'  style={{display:"flex" , justifyContent:"center", alignItems:"center"}}>
                        <button type="submit" disabled={loading} style={{textTransform:"capitalize", width:"fit-content", padding:"3px 1vw" , border:"none" , outline:"none" , backgroundColor: loading ? "gray" : "#02A4E6"  , color:"white" , borderRadius:"5px" }}>
                            {
                                loading === false ?
                                "post job"
                                :
                                "posting..."
                            }
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
    </>
}

export default Createjob