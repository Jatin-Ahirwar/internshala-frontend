import Link from 'next/link'
import React from 'react'
const Nav = () => {
  return (
    <div className='mainnav'>
        <div className='mainnavleft'>
            <Link className='Link' href="/">
              <img src="https://internshala.com//static/images/internshala_og_image.jpg" alt="" />
            </Link>           
        </div>
        <div className='mainnavright'>
          <Link className='Link' href="">Internships <i class="ri-arrow-down-s-fill"></i></Link>            
          <Link className='Link' href="">Jobs <i class="ri-arrow-down-s-fill"></i></Link>            
          <Link className='Link' href="">Courses <span>OFFER</span> <i class="ri-arrow-down-s-fill"></i></Link>
          <Link id='login' className='Link' href="/student">Student</Link>
          <Link id='register' className='Link' href="/employe">Employe</Link>
        </div>
    </div>
  )
}

export default Nav