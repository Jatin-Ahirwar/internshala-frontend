"use client"
import '@/app/css/auth.css'
import Footer from '@/Components/home/Footer'
import { asyncshowsingleinternships } from '@/Store/Actions/StudentActions'
import { asyncapplyinternshipstudent, asyncapplyjobstudent } from '@/Store/Actions/StudentActions'
import { addinternships } from '@/Store/Reducers/StudentReducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { student , jobs , internships } = useSelector((state)=>state.StudentReducer)
  const applyHandler = (id,e) => {
    
    dispatch(asyncapplyinternshipstudent(id))
    dispatch(asyncapplyjobstudent(id))
  }
  const singleinternship = (id) => {
    dispatch(asyncshowsingleinternships(id))

  }
  useEffect(()=>{
  },[student])
  return <>
    <div className='authlandingpage'>
        <div className='authlandingpagetop'>
          <h2 >Hi,<strong>{student && student.firstname}!</strong><img src="https://internshala.com/static/images/student/dashboard/waving-hand.svg" alt="" /></h2>
          <h5>Let’s help you land your dream career</h5>
        </div>
        <div className='authlandingpagemid'>
            <div className='authlandingpagemidtop'>
              <h3>Internships</h3>
              <h6>as per your <span>preferences</span></h6>
            </div>
              <div className='jobdiv'>
                {internships &&  internships.map((i)=>(
                  // <Link id='Link'  href={"/student/auth/singleinternship/" + i._id} key={i._id} className='jobcard'>
                  // <Link id='Link' href={"/student/auth/singleinternship/" + i._id} onClick={() => singleinternship(i._id)} key={i._id} className='jobcard'>
                  <Link id='Link' href={"/student/auth/singleinternship/" + i._id} key={i._id} className='jobcard'>

                  <div className='activitybtn'><i class="ri-funds-box-line"></i> Actively hiering</div>
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
                  <Link className='link' href={"/student/auth/singleinternship/" + i._id} >View details <i class="ri-arrow-right-s-line"></i></Link>
                  {/* </div>    */}
                  </Link>

                ))}

                
              </div>
        </div>
        
        <div style={{backgroundColor:"white"}} className='authlandingpagemid'>
            <div  className='authlandingpagemidtop'>
              <h3>Certification courses for you</h3>
            </div>
              <div className='jobdiv'>

                <div className='coursecard'>
                  <div className='coursetop'>
                    <img src="https://training-uploads.internshala.com/homepage/media/courses_section/card_images/web-development.png.webp" alt="" />
                  </div>
                  <Link href="" className='coursebottam'>
                    <div id='toppps'>
                      <h6 id='week'>8 weeks</h6>
                      <h6>Web Delevopment</h6>
                      <div className='rating'>
                      <h6><i class="ri-star-fill"></i> 4.1</h6>
                      <h6>106125</h6> 
                    </div> 
                     
                    </div>
                    <div className='link'>Know more<i class="ri-arrow-right-s-line"></i></div>
                         

                  </Link>

                </div>

                <div className='coursecard'>
                  <div className='coursetop'>
                    <img src="https://training-uploads.internshala.com/homepage/media/courses_section/card_images/react.png.webp" alt="" />
                  </div>
                  <Link href="" className='coursebottam'>
                    <div id='toppps'>
                      <h6 id='week'>6 weeks</h6>
                      <h6>React</h6>
                      <div className='rating'>
                      <h6><i class="ri-star-fill"></i>4.3</h6>
                      <h6>5454</h6> 
                    </div> 
                     
                    </div>
                    <div className='link'>Know more<i class="ri-arrow-right-s-line"></i></div>
                         

                  </Link>
                </div>

                <div className='coursecard'>
                  <div className='coursetop'>
                    <img src="https://training-uploads.internshala.com/homepage/media/courses_section/card_images/machine-learning.png.webp" alt="" />
                  </div>
                  <Link href="" className='coursebottam'>
                    <div id='toppps'>
                      <h6 id='week'>6 weeks</h6>
                      <h6>Machine Learning</h6>
                      <div className='rating'>
                      <h6><i class="ri-star-fill"></i> 4.5</h6>
                      <h6>31792</h6> 
                    </div> 
                     
                    </div>
                    <div className='link'>Know more<i class="ri-arrow-right-s-line"></i></div>
                         

                  </Link>
                </div>

                <div className='coursecard'>
                  <div className='coursetop'>
                    <img src="https://training-uploads.internshala.com/homepage/media/courses_section/card_images/android.png.webp" alt="" />
                  </div>
                  <Link href="" className='coursebottam'>
                    <div id='toppps'>
                      <h6 id='week'>8 weeks</h6>
                      <h6>Android App Development</h6>
                      <div className='rating'>
                      <h6><i class="ri-star-fill"></i> 4.1</h6>
                      <h6>37098</h6> 
                    </div> 
                     
                    </div>
                    <div className='link'>Know more<i class="ri-arrow-right-s-line"></i></div>
                         

                  </Link>
                </div>

                <div className='coursecard'>
                  <div className='coursetop'>
                    <img src="https://training-uploads.internshala.com/homepage/media/courses_section/card_images/python.png.webp" alt="" />
                  </div>
                  <Link href="" className='coursebottam'>
                    <div id='toppps'>
                      <h6 id='week'>6 weeks</h6>
                      <h6>Programming With Python</h6>
                      <div className='rating'>
                      <h6><i class="ri-star-fill"></i> 4.2</h6>
                      <h6>80188</h6> 
                    </div> 
                     
                    </div>
                    <div className='link'>Know more<i class="ri-arrow-right-s-line"></i></div>
                         

                  </Link>
                </div>
                                
              </div>
        </div>

        <div className='authlandingpagemid'>
            <div className='authlandingpagemidtop'>
              <h3>Jobs</h3>
              <h6>as per your <span>preferences</span></h6>
            </div>
              <div className='jobdiv'>
                {jobs && jobs.map((j)=>(
                  <Link id='Link'  href={"/student/auth/singlejob/" + j._id} key={j._id} className='jobcard'>

                  {/* <div key={i._id} className='jobcard'> */}
                  <div className='activitybtn'><i class="ri-funds-box-line"></i> Actively hiering</div>
                  <div className='jobnamediv'>
                    <div className='jobname'>
                      <h6>{j && j.profile}</h6>
                      <p>{j && j.orgname}</p>
                    </div>
                    <div className='jobimagediv'>
                      
                    </div>
                  </div>
                  <div className='line'></div>
                  <div className='jobmoneydiv'>
                    <p><i class="ri-map-pin-line"></i> {j && j.location}</p>
                    <p><i class="ri-money-cny-box-line"></i>₹ 3,00,000 - 6,00,000 / Year  </p>
                  </div>
                  <Link className='link' href={"/student/auth/singlejob/" + j._id} >View details <i class="ri-arrow-right-s-line"></i></Link>
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
              {student && student.internships?.map((i)=>(<p key={i._id}>{JSON.stringify(i)}</p>))}
        </ul> */}


    <Footer />

    </div>
  </>
}

export default page