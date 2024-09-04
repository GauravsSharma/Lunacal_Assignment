import React, { useRef, useLayoutEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Widge1Navbar = () => {
  const location = useLocation();
  const [activeWidth, setActiveWidth] = useState(0);
  const [activeX, setActiveX] = useState(0);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const activeLink = containerRef.current?.querySelector('.active');
    if (activeLink) {
      setActiveWidth(activeLink.offsetWidth);
      setActiveX(activeLink.offsetLeft);
    }
  }, [location.pathname]);
  console.log(activeWidth,activeX);
  
  return (
    <div ref={containerRef} className='relative navbar flex w-full h-[62px] rounded-3xl p-1 bg-[#171717] justify-start items-center gap-2'>
      <motion.div
        className='absolute top-1 bottom-1 bg-[#28292F] rounded-3xl shadoww'
        initial={false}
        animate={{ width: activeWidth, x: activeX }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'active px-10 py-2 text-white font-semibold text-[18px] z-10 ' : 'px-10 py-2 text-slate-400 font-semibold text-[18px] z-10'}
      >
        About Me
      </NavLink>
      <NavLink 
        to="/experience" 
        className={({ isActive }) => isActive ? 'active px-10 py-2 text-white font-semibold text-[18px] z-10' : 'px-10 py-2 text-slate-400 font-semibold text-[18px] z-10'}
      >
        Experience
      </NavLink>
      <NavLink 
        to="/recommended" 
        className={({ isActive }) => isActive ? 'active px-10 py-2 text-white font-semibold text-[18px] z-10' : 'px-10 py-2 text-slate-400 font-semibold text-[18px] z-10'}
      >
        Recommended
      </NavLink>
    </div>
  );
};

export default Widge1Navbar;
