// "use client"
// import { removesingleinternships } from '@/Store/Reducers/StudentReducer'
// import { useRouter } from 'next/navigation'

// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'


// const page = () => {
//   const router = useRouter()
//   const dispatch = useDispatch()
//   const { singleinternships ,   } = useSelector((state)=>state.StudentReducer)
//   const [id, setid] = useState("")
//   const newid = ()=>{
//     setid(singleinternships && singleinternships._id)
//   }
  
//   useEffect(()=>{
//   },[singleinternships])

//   useEffect(() => {
//       if(!router.pathname === `/student/auth/singleinternship/${newid}`){
//         dispatch(removesingleinternships());
//       }
//   }, [dispatch]);
//   return (
//     <div>
//       {/* <button onClick={click}> button</button> */}
//         <p>{JSON.stringify(singleinternships)}</p>
//     </div>
//   )
// }

// export default page


'use client'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { asyncshowsingleinternships, asyncshowsinglejob } from '@/Store/Actions/StudentActions';
import Solojob from '@/Components/student/Solojob';

const page = (props) => {
    const dispatch = useDispatch();
  const id = props.params.id;
  
  useEffect(()=>{
    dispatch(asyncshowsinglejob(id))
  },[])

  return (
    <>
      <Solojob/>
    </>
  )
}

export default page