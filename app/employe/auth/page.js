"use client"
import '@/app/css/employeauth.css'
import Authpage from '@/Components/employe/Authpage'
import Footer from '@/Components/home/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const dispatch = useDispatch()
  const { employe } = useSelector((state)=>state.EmployeReducer)

  useEffect(()=>{
  },[employe])
  return <>
    <Authpage />
  </>
}

export default page