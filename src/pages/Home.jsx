import Widge1 from '@/components/shared/Widge1'
import Widge2 from '@/components/shared/Widge2'
import React from 'react'


const Home = () => {
  return (
    <div className='main flex w-full py-10'>
      <div className="right w-[45%]"></div>
      <div className="left w-[45%]">
        <Widge1 />
        <Widge2 />
      </div>
    </div>
  )
}

export default Home