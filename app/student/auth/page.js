"use client"
import '@/app/css/auth.css'
import Footer from '@/Components/home/Footer'
import { asyncapplyinternshipstudent, asyncapplyjobstudent } from '@/Store/Actions/StudentActions'
import { addinternships } from '@/Store/Reducers/StudentReducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const dispatch = useDispatch()
  const { student , jobs , internships } = useSelector((state)=>state.StudentReducer)
  const applyHandler = (id,e) => {
    dispatch(asyncapplyinternshipstudent(id))
    dispatch(asyncapplyjobstudent(id))
  }
  useEffect(()=>{
  },[student])
  return <>
    <div className='authlandingpage'>
        <div className='authlandingpagetop'>
          <h2>Hi,<strong>{student && student.firstname}!</strong><img src="https://internshala.com/static/images/student/dashboard/waving-hand.svg" alt="" /></h2>
          <h5>Let’s help you land your dream career</h5>
        </div>
        <div className='authlandingpagemid'>
            <div className='authlandingpagemidtop'>
              <h2>Jobs</h2>
              <h5>as per your <span>preferences</span></h5>
            </div>
              <div className='jobdiv'>
                {internships && internships.map((i)=>(
                  <Link id='Link'  href={"/singleinternship/" + i._id} key={i._id} className='jobcard'>

                  {/* <div key={i._id} className='jobcard'> */}
                  <div className='button'><p><i class="ri-funds-box-line"></i> Actively hiering</p></div>
                  <div className='jobnamediv'>
                    <div className='jobname'>
                      <h6>{i && i.profile}</h6>
                      <p>{i && i.orgname}</p>
                    </div>
                    <div className='jobimagediv'>
                      
                    </div>
                  </div>
                  <div className='line'></div>
                  <div className='jobmoneydiv'>
                    <p><i class="ri-map-pin-line"></i> {i && i.internshiptype}</p>
                    <p><i class="ri-money-cny-box-line"></i>₹ 3,00,000 - 6,00,000 / Year  </p>
                  </div>
                  <Link className='link' href="">View details <i class="ri-arrow-right-s-line"></i></Link>
                  {/* </div>    */}
                  </Link>

                ))}

                
              </div>
        </div>
        {/* <div>Available jobs and internships for <strong>{student && student.firstname}</strong></div>
        <ul className='container'>
              {internships && internships.map((i)=>(
                <div className='' key={i._id}>{JSON.stringify(i)} <br />
                <br />
                {!i.students.includes(student && student._id) ? (
                  <button onClick={() => applyHandler(i._id)}>Apply Now</button>
                  ) : <h3>Already Applied</h3>}
                </div>
              ))}
              {student && student.internships.map((i)=>(<p key={i._id}>{JSON.stringify(i)}</p>))}
        </ul> */}
    </div>
  <Footer />
  </>
}

export default page