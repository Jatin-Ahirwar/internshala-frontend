'use client'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { asyncshowsingleinternships } from '@/Store/Actions/StudentActions';
import Solointernship from '@/Components/student/SoloInternship';
const page = (props) => {
  const { internship } = useSelector((state)=>state.StudentReducer)
  const dispatch = useDispatch();
  const id = props.params.id;
  
  useEffect(()=>{
    dispatch(asyncshowsingleinternships(id))
  },[])

  return (
    <>
      <Solointernship/>
    </>
  )
}

export default page