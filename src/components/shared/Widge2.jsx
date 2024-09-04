import React, { useState } from 'react';
import { Button } from '../ui/button';
import { FaPlus } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Widge2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1690574562246-43522f632a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1690574562246-43522f632a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1690574562246-43522f632a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1690574562246-43522f632a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
 
   
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(images.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const getVisibleImages = () => {
    const start = currentIndex * itemsPerPage;
    return images.slice(start, start + itemsPerPage);
  };

  return (
    <div className='w-[40rem] px-4 py-6 font-poppins flex-col bg-[#4A4E54] rounded-2xl flex justify-center items-center mt-10'>
      <div className="flex justify-between items-center w-full">
        <Button className="px-6 py-6 rounded-2xl">Gallery</Button>
        <div className="flex gap-4">
          <Button className="rounded-3xl bg-transparent shadoww2 flex justify-center items-center">
            <FaPlus />
            ADD IMAGE
          </Button>
          <div className="flex gap-2">
            <Button onClick={handlePrev} className="gradient shadoww2 rounded-full">
              <FiArrowLeft />
            </Button>
            <Button onClick={handleNext} className="gradient shadoww2 rounded-full">
              <FiArrowRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className='w-full flex justify-center items-center mt-4'>
        <div className='flex'>
          {getVisibleImages().map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${currentIndex * itemsPerPage + index + 1}`}
              className='w-[180px] h-[133px] mx-3 cursor-pointer object-cover rounded-xl grayscale transition-all duration-300 ease-in-out hover:grayscale-0 slide hover:-rotate-6 transform-gpu hover:scale-110'

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Widge2;
