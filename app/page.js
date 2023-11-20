"use client"
import { asynccurrentstudent } from '@/Store/Actions/StudentActions'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from '@/utils/axios'
import Nav from '@/Components/home/Nav'
import Page1 from '@/Components/home/Page1'
import Page2 from '@/Components/home/Page2'
import Footer from '@/Components/home/Footer'
const page = () => {
  const dispatch = useDispatch()
  return <>
      {/* <Link className='student' href="/student">student</Link> */}
      <Nav />
      <Page1 />
      <Page2 />
      <br />
      <Footer />
    </>
}

export default page