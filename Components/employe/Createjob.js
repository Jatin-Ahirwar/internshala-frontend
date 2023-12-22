"use client"
import "@/app/css/createopportunity.css"
import React from 'react'

const Createinternship = () => {
  return <>
    <div className='createopportunity'>
        <div>
            <h5>Job details</h5>
            <div className="creatediv">
                <form className='opwrapper'>
                    <div className='opitemdiv'>
                    <label>Job title</label>
                    <input onChange={(e)=>setfirstname(e.target.value)}  required type="text" name='firstname' placeholder='First name' />
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