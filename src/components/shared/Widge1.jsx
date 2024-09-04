import React from 'react'
import Widge1Navbar from './Widge1Navbar'
import { Outlet } from 'react-router-dom'

const Widge1 = () => {
  return (
    <div className='widge1 w-[40rem] px-4 py-6 font-poppins flex-col bg-[#4A4E54] rounded-2xl flex justify-center items-center '>
         <Widge1Navbar/>
        <div className='h-[10rem] overflow-y-auto'>
        <Outlet/>
        </div>
    </div>
  )
}

export default Widge1