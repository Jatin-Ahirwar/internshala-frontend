import Link from 'next/link'
import React from 'react'
const Nav = () => {
  return (
    <div className='mainnav'>
        <div className='mainnavleft'>
            <Link className='Link' href="/">
              <img src="https://internshala.com//static/images/internshala_og_image.jpg" alt="" />
            </Link>
            <Link className='Link' href="">Internships <i class="ri-arrow-down-s-fill"></i></Link>            
            <Link className='Link' href="">Jobs <i class="ri-arrow-down-s-fill"></i></Link>            
            <Link className='Link' href="">Courses <span>OFFER</span> <i class="ri-arrow-down-s-fill"></i></Link>            
        </div>
        <div className='mainnavright'>
          <Link className='Link' href="">
            <div className='search'> 
            <i class="ri-search-line"></i>
            <h6>Search</h6>
            </div>
          </Link>
          <Link id='login' className='Link' href="/student/signin">Login</Link>
          <Link id='register' className='Link' href="/student/signup">Register</Link>
          <div className='line'></div>
          <Link id='employe' className='Link' href="/employe">Hire Talent</Link>
        </div>
    </div>
  )
}

export default Nav