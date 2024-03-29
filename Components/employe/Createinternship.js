"use client"
import { asyncCreateInternship } from "@/Store/Actions/EmployeActions"
import "@/app/css/createopportunity.css"
import Link from "next/link"
import React, { useState } from 'react'
import { useDispatch } from "react-redux"

const Createinternship = () => {
    const [isChecked, setChecked] = useState(false);
    const [showInternship, setShowInternship] = useState(true);
    const [selectedOption, setSelectedOption] = useState('In Office');
    const [profile, setprofile] = useState("")
    const [orgname, setorgname] = useState("")
    const [skill, setskill] = useState("")
    const [internshiptype, setinternshiptype] = useState("")
    const [openings, setopenings] = useState("")
    const [from, setfrom] = useState("")
    const [to, setto] = useState("")
    const [duration, setduration] = useState("")
    const [location, setlocation] = useState("")
    const [lastdate, setlastdate] = useState("")
    const [stipend, setstipend] = useState("")
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
        const internship = {
            profile:profile,
            skill:skillsList,
            openings:openings,
            from:from,
            to:to,
            duration:duration,
            location:location,
            lastdate:lastdate,
            stipend:stipend,
            internshiptype:selectedOption,
            orgname:orgname
        }
        console.log(internship)
        setloading(true)
        await dispatch(asyncCreateInternship(internship))
        setprofile('');
        setSkillsList([]);
        setopenings('');
        setfrom('');
        setto('');
        setduration('');
        setlocation('');
        setlastdate('');
        setstipend('');
        setSelectedOption('');
        setorgname('');
      
        setloading(false);

    }

    
    return <>
    <div className='createopportunity'>
        <div>
            <h5>Internship details</h5>
            <div className="creatediv">
                <form className='opwrapper' onSubmit={submitHandler}>
                    <div className='opitemdiv'>
                        <label style={{fontWeight:"400"}}>Internship profile</label>
                        <input onChange={(e)=>setprofile(e.target.value)}  required type="text" name='profile' placeholder='e.g. Full Stack Developer' />
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
                        <label style={{fontWeight:"400"}}>Internship type</label>
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
                        <label style={{fontWeight:"400", marginBottom:"10px" ,display:"flex", alignItems:"center", gap:"5px" , textTransform:"capitalize"}}>internship start date</label>
                        
                        <div style={{display:"flex"  , width:"100%" , justifyContent:"space-between" , paddingRight:"15vw" }} >
                            <label style={{fontWeight:"400",display:"flex", alignItems:"center", gap:"5px" , textTransform:"capitalize"}}>from</label>
                            <input onChange={(e)=>setfrom(e.target.value)}  style={{width:"80%"}}  type="date" name='skill' placeholder='e.g. 4' />
                        </div>

                        <div style={{display:"flex"  , width:"100%" , justifyContent:"space-between" , paddingRight:"15vw" }} >
                            <label style={{fontWeight:"400",display:"flex", alignItems:"center", gap:"5px" , textTransform:"capitalize"}}>to</label>
                            <input onChange={(e)=>setto(e.target.value)}  style={{width:"80%"}}  type="date" name='skill' placeholder='e.g. 4' />
                        </div>
                    </div>

                    <div className='opitemdiv'  >
                        <label style={{fontWeight:"400",display:"flex", alignItems:"center"}}>Internship duration</label>
                        <label style={{fontWeight:"100",display:"flex", alignItems:"center"}}>Shorter the duration, more the applications</label>
                        <select onChange={(e)=>setduration(e.target.value)} style={{padding:"10px" , borderRadius:"5px", marginTop:"5px"}} >
                            <option value="Choose the duration.">Choose the duration.</option>
                            <option value="1 Month">1 Month</option>
                            <option value="2 Months">2 Months</option>
                            <option value="3 Months">3 Months</option>
                            <option value="4 Months">4 Months</option>
                            <option value="5 Months">5 Months</option>
                            <option value="6 Months">6 Months</option>
                        </select>
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
                        <label style={{fontWeight:"400",display:"flex", alignItems:"center", gap:"5px"}}>Stipend</label>
                        <input onChange={(e)=>setstipend(e.target.value)} type="text" name='skill' placeholder='e.g. 10000 ' />
                    </div>

                    <div className='opitemdiv'  style={{display:"flex" , justifyContent:"center", alignItems:"center"}}>
                        <button type="submit" disabled={loading} style={{textTransform:"capitalize", width:"fit-content", padding:"3px 1vw" , border:"none" , outline:"none" , backgroundColor: loading ? "gray" : "#02A4E6"  , color:"white" , borderRadius:"5px" }}>
                            {
                                loading === false ?
                                "post internship"
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

export default Createinternship