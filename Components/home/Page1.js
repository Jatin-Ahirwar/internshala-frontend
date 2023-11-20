import Link from 'next/link'
import React from 'react'
const page1 = () => {
  return (
    <div id='page1'>
        <div className='page1top'>
            <h1 className='pg1title'>Make your dream career a reality</h1>
            <p className='pg1summary'>Internshala is a platform where students and professionals can find internships, online courses, and other opportunities to learn and grow. It was founded in 2010 and is based in India. It offers internships across various fields such as engineering, management, design, and more. It also offers various online courses to help the students and professionals build their skills and knowledge.</p>
            <h2 className='join'>Join Now</h2>
            <div id='bottamline'></div>
            <div className='buttons'>
              <Link id='goto' className='Link' href="/student">Student</Link>
              <Link id='goto' className='Link' href="/employe">Employe</Link>
            </div>
        </div>
        <div className='page1bottam'>
          <img className='userss' src="https://img.freepik.com/premium-vector/premium-flat-illustration-design-online-course_203633-7570.jpg?" alt="" />
          <p>Our platform is a transformative hub for students and recruiters. Students gain skills, build portfolios, and access networking opportunities, while recruiters tap into a diverse talent pool and streamline the hiring process. With data-driven insights and seamless communication tools, we make talent acquisition efficient and effective, benefiting both aspiring talents and organizations seeking top-notch candidates.</p>
        </div>
    </div>
  )
}

export default page1