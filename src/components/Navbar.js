import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
 
  return (
    <div className=' absolute top-0 flex justify-between items-center h-24 mx-[10%] w-[80%] z-20'>
      <h1 className='w-full text-3xl font-bold text-[#2563ec] mr-24'> ECOMM </h1>
      <ul className='hidden md:flex'>
        <li className='p-4 text-lg'>Home</li>
        <li className='p-4 text-lg'>Company</li>
        <li className='p-4 text-lg'>Resources</li>
        <li className='p-4 text-lg'>About</li>
        <li className='p-4 text-lg'>Contact</li>
      </ul>
      <div onClick={handleNav} className='sm:block md:hidden'>
          {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-gray-900 ease-in-out duration-500 z-20' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#2563ec] text-center my-4'> ECOMM </h1>
          <li className='py-2 text-lg text-center bg-white m-2 rounded-lg'>Home</li>
          <li className='py-2 text-lg text-center bg-white m-2 rounded-lg'>Company</li>
          <li className='py-2 text-lg text-center bg-white m-2 rounded-lg'>Resources</li>
          <li className='py-2 text-lg text-center bg-white m-2 rounded-lg'>About</li>
          <li className='py-2 text-lg text-center bg-white m-2 rounded-lg'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;