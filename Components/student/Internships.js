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

            </div>
            <div className='contentarearight'></div>
        </div>
    </div>
    <Footer/>
    </>
}

export default Internships